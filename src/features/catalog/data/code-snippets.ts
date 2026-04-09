export const codeSnippets: Record<string, string> = {
  button: `import { Button } from '@/ui';

<Button variant="primary" icon={<Plus size={16} />}>
  Erstellen
</Button>

<Button variant="secondary" size="sm">
  Abbrechen
</Button>`,

  'icon-button': `import { IconButton } from '@/ui';

<IconButton variant="ghost">
  <Settings size={20} />
</IconButton>

<IconButton variant="surface" size={36}>
  <ArrowLeft size={18} />
</IconButton>`,

  tabs: `import { Tabs } from '@/ui';

const [active, setActive] = useState('tab1');

<Tabs
  items={[
    { id: 'tab1', label: 'Übersicht' },
    { id: 'tab2', label: 'Details' },
  ]}
  active={active}
  onChange={setActive}
/>`,

  chips: `import { Chip, ChipGroup } from '@/ui';

<ChipGroup>
  <Chip label="CNC" active onToggle={toggle} />
  <Chip label="Fräsen" onToggle={toggle} />
  <Chip label="React" active onRemove={remove} />
</ChipGroup>`,

  dropdown: `import { Dropdown } from '@/ui';

const [value, setValue] = useState('');

<Dropdown
  label="Maschine"
  placeholder="Wählen…"
  value={value}
  onChange={setValue}
  options={[
    { id: 'ctx510', label: 'DMG CTX 510' },
    { id: 'grob', label: 'GROB G350' },
  ]}
/>`,

  card: `import { Card } from '@/ui';

<Card variant="default" padding="md">
  <p>Inhalt</p>
</Card>

<Card variant="accent" onClick={handleTap}>
  <p>Klickbare Accent Card</p>
</Card>`,

  badge: `import { Badge } from '@/ui';

<Badge color="success">Aktiv</Badge>
<Badge color="error">Fehler</Badge>
<Badge color="neutral">Entwurf</Badge>`,

  divider: `import { Divider } from '@/ui';

<Divider />
<Divider label="Oder" />
<Divider spacing={24} />`,

  'list-item': `import { ListItem } from '@/ui';

<ListItem
  title="Auftrag #1042"
  subtitle="Welle Ø25"
  leading={<Package size={18} />}
  trailing={<Badge color="success">Aktiv</Badge>}
  onClick={handleTap}
/>`,

  avatar: `import { Avatar } from '@/ui';

<Avatar name="Max Recknagel" size="md" />
<Avatar name="Anna Schmidt" status="online" />
<Avatar name="Bernd" size="lg" status="busy" />`,

  input: `import { Input } from '@/ui';

<Input label="Name" placeholder="Max" />
<Input label="E-Mail" error="Ungültig" />
<Input label="Notiz" hint="Optional" />`,

  'search-field': `import { SearchField } from '@/ui';

const [search, setSearch] = useState('');

<SearchField
  value={search}
  onChange={setSearch}
  placeholder="Suchen…"
/>`,

  toggle: `import { Toggle } from '@/ui';

const [on, setOn] = useState(false);

<Toggle
  checked={on}
  onChange={setOn}
  label="Dark Mode"
/>`,

  'empty-state': `import { EmptyState } from '@/ui';

<EmptyState
  icon={<Inbox size={36} />}
  title="Keine Einträge"
  description="Noch keine Daten."
  action={<Button size="sm">Erstellen</Button>}
/>`,

  sheet: `import { Sheet } from '@/ui';

const [open, setOpen] = useState(false);

<Sheet
  open={open}
  onClose={() => setOpen(false)}
  title="Menü"
  side="left"
>
  <p>Inhalt</p>
</Sheet>`,

  progress: `import { Progress } from '@/ui';

<Progress value={72} label="Fortschritt" />
<Progress value={100} color="success" />
<Progress value={30} color="warning" size="sm" />`,

  skeleton: `import { Skeleton, SkeletonCard } from '@/ui';

<Skeleton variant="text" width="60%" />
<Skeleton variant="circle" />
<Skeleton variant="rect" height="120px" />
<SkeletonCard />`,

  modal: `import { Modal } from '@/ui';

const [open, setOpen] = useState(false);

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Bestätigung"
  actions={
    <>
      <Button variant="ghost">Nein</Button>
      <Button variant="danger">Ja</Button>
    </>
  }
>
  <p>Wirklich löschen?</p>
</Modal>`,

  toast: `import { useToast } from '@/ui';

const { toast } = useToast();

toast('Gespeichert!', 'success');
toast('Fehler aufgetreten', 'error');
toast('Neue Version', 'info');
toast('Verbindung instabil', 'warning');`,

  'loading-state': `import { LoadingState } from '@/ui';

<LoadingState />
<LoadingState label="Daten werden geladen…" />`,

  'error-state': `import { ErrorState } from '@/ui';

<ErrorState />
<ErrorState message="Verbindung fehlgeschlagen." />`,
};

