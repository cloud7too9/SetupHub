/**
 * Sammelt die Live-Vorschauen automatisch ein.
 *
 * Früher musste jede Komponente zusätzlich in einer preview-registry
 * eingetragen werden — eine dritte Stelle, die vergessen werden konnte.
 * Jetzt reicht die Datei selbst: sie muss ein Objekt mit `id` und `sections`
 * exportieren.
 */

export interface PreviewSection {
  title: string;
  render: () => React.ReactNode;
}

export interface EntryPreview {
  id: string;
  name: string;
  description?: string;
  sections: PreviewSection[];
}

const modules = {
  ...import.meta.glob('/src/ui/**/*.preview.tsx', { eager: true }),
  ...import.meta.glob('/src/patterns/mobile/*.preview.tsx', { eager: true }),
} as Record<string, Record<string, unknown>>;

function isPreview(value: unknown): value is EntryPreview {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<EntryPreview>;
  return typeof candidate.id === 'string' && Array.isArray(candidate.sections);
}

export const previews = new Map<string, EntryPreview>(
  Object.values(modules)
    .flatMap(mod => Object.values(mod))
    .filter(isPreview)
    .map(preview => [preview.id, preview]),
);
