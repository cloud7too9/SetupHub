import { buttonPreviews } from '@/ui/actions/Button/Button.preview';
import { iconButtonPreviews } from '@/ui/actions/IconButton/IconButton.preview';
import { tabsPreviews } from '@/ui/actions/Tabs/Tabs.preview';
import { chipsPreviews } from '@/ui/actions/Chips/Chips.preview';
import { dropdownPreviews } from '@/ui/actions/Dropdown/Dropdown.preview';
import { cardPreviews } from '@/ui/data-display/Card/Card.preview';
import { badgePreviews } from '@/ui/data-display/Badge/Badge.preview';
import { dividerPreviews } from '@/ui/data-display/Divider/Divider.preview';
import { listItemPreviews } from '@/ui/data-display/ListItem/ListItem.preview';
import { avatarPreviews } from '@/ui/data-display/Avatar/Avatar.preview';
import { inputPreviews } from '@/ui/inputs/Input/Input.preview';
import { searchFieldPreviews } from '@/ui/inputs/SearchField/SearchField.preview';
import { togglePreviews } from '@/ui/inputs/Toggle/Toggle.preview';
import { loadingStatePreviews } from '@/ui/feedback/LoadingState/LoadingState.preview';
import { errorStatePreviews } from '@/ui/feedback/ErrorState/ErrorState.preview';
import { emptyStatePreviews } from '@/ui/feedback/EmptyState/EmptyState.preview';
import { sheetPreviews } from '@/ui/feedback/Sheet/Sheet.preview';
import { progressPreviews } from '@/ui/feedback/Progress/Progress.preview';
import { skeletonPreviews } from '@/ui/feedback/Skeleton/Skeleton.preview';
import { modalPreviews } from '@/ui/feedback/Modal/Modal.preview';
import { toastPreviews } from '@/ui/feedback/Toast/Toast.preview';

export interface PreviewSection {
  title: string;
  render: () => React.ReactNode;
}

export interface ComponentPreview {
  id: string;
  name: string;
  sections: PreviewSection[];
}

const all: ComponentPreview[] = [
  buttonPreviews,
  iconButtonPreviews,
  tabsPreviews,
  chipsPreviews,
  dropdownPreviews,
  cardPreviews,
  badgePreviews,
  dividerPreviews,
  listItemPreviews,
  avatarPreviews,
  inputPreviews,
  searchFieldPreviews,
  togglePreviews,
  loadingStatePreviews,
  errorStatePreviews,
  emptyStatePreviews,
  sheetPreviews,
  progressPreviews,
  skeletonPreviews,
  modalPreviews,
  toastPreviews,
];

export const previewRegistry = new Map(all.map(p => [p.id, p]));
