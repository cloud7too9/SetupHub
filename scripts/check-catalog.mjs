/**
 * Prüft, dass Katalog, Quelldateien und Vorschauen zusammenpassen.
 *
 * Läuft ohne Bundler: liest das erzeugte catalog.json und schaut im Dateisystem
 * nach. Findet die Fehlerklasse, die früher unbemerkt blieb — ein Eintrag ohne
 * Vorschau, eine Vorschau ohne Eintrag, ein falscher Quellpfad, ein fehlender
 * Barrel-Export.
 */
import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const problems = [];

const manifest = JSON.parse(await readFile(path.join(root, 'public/catalog.json'), 'utf8'));

async function walk(dir) {
  const out = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out.push(...await walk(full));
    else out.push(full);
  }
  return out;
}

const files = await walk(path.join(root, 'src'));
const previewFiles = files.filter(f => f.endsWith('.preview.tsx'));

// Welche ids belegen die Vorschau-Dateien?
const previewIds = new Map();
for (const file of previewFiles) {
  // Bewusst am Export verankert: eine lose Suche nach "id:" trifft sonst
  // Demo-Daten in der Datei (z.B. { id: 'tab1' } in der Tabs-Vorschau).
  const match = (await readFile(file, 'utf8')).match(/export const \w+\s*=\s*\{\s*id:\s*'([^']+)'/);
  if (!match) {
    problems.push(`${path.relative(root, file)}: exportiert keine id`);
    continue;
  }
  previewIds.set(match[1], file);
}

const barrels = {
  '@/ui': await readFile(path.join(root, 'src/ui/index.ts'), 'utf8'),
  '@/patterns': await readFile(path.join(root, 'src/patterns/index.ts'), 'utf8'),
};

const seen = new Set();
for (const entry of manifest.entries) {
  if (seen.has(entry.id)) problems.push(`${entry.id}: doppelte id`);
  seen.add(entry.id);

  if (!existsSync(path.join(root, entry.source.path))) {
    problems.push(`${entry.id}: Quelldatei fehlt — ${entry.source.path}`);
  }

  const barrel = barrels[entry.source.from];
  if (!barrel) {
    problems.push(`${entry.id}: unbekanntes Modul ${entry.source.from}`);
  } else if (!new RegExp(`\\b${entry.source.named}\\b`).test(barrel)) {
    problems.push(`${entry.id}: ${entry.source.named} fehlt im Barrel-Export ${entry.source.from}`);
  }

  if (!previewIds.has(entry.id)) {
    problems.push(`${entry.id}: keine Vorschau (*.preview.tsx mit dieser id)`);
  }
  if (!entry.props.length && entry.kind === 'component') {
    problems.push(`${entry.id}: keine Props beschrieben`);
  }
}

for (const [id, file] of previewIds) {
  if (!seen.has(id)) {
    problems.push(`${path.relative(root, file)}: Vorschau "${id}" hat keinen Katalog-Eintrag`);
  }
}

if (problems.length) {
  console.error(`Katalog inkonsistent — ${problems.length} Problem(e):`);
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log(`Katalog konsistent — ${manifest.entries.length} Einträge, ${previewIds.size} Vorschauen.`);
