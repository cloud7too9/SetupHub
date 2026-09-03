/**
 * Schreibt public/catalog.json aus dem TypeScript-Manifest.
 *
 * Der Katalog ist die Schnittstelle zum Editor: TS-Konsumenten importieren
 * `@/catalog`, alle anderen lesen das JSON. Damit beides nie auseinanderläuft,
 * wird das JSON bei jedem Build aus derselben Quelle erzeugt.
 *
 * Vite bündelt das Manifest kurz nach ESM (SSR-Modus, löst die @/-Aliase auf),
 * damit Node es importieren kann — ein eigener TS-Runner ist dafür nicht nötig.
 */
import { build } from 'vite';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const tmpDir = path.join(root, 'node_modules', '.catalog-build');
const outFile = path.join(root, 'public', 'catalog.json');

await build({
  configFile: false,
  logLevel: 'error',
  resolve: { alias: { '@': path.resolve(root, 'src') } },
  build: {
    ssr: path.resolve(root, 'src/catalog/manifest.ts'),
    outDir: tmpDir,
    emptyOutDir: true,
    minify: false,
    rollupOptions: { output: { format: 'es', entryFileNames: 'manifest.mjs' } },
  },
});

const { manifest } = await import(pathToFileURL(path.join(tmpDir, 'manifest.mjs')).href);

await mkdir(path.dirname(outFile), { recursive: true });
await writeFile(outFile, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
await rm(tmpDir, { recursive: true, force: true });

console.log(`catalog.json geschrieben — ${manifest.entries.length} Einträge, ${manifest.categories.length} Kategorien`);
