import { cardActionsPreviews } from '@/patterns/mobile/CardActions.preview';
import { listFilterSearchPreviews } from '@/patterns/mobile/ListFilterSearch.preview';
import { formSectionPreviews } from '@/patterns/mobile/FormSection.preview';
import { detailHeaderPreviews } from '@/patterns/mobile/DetailHeader.preview';
import { actionPanelPreviews } from '@/patterns/mobile/ActionPanel.preview';
import { infoPanelPreviews } from '@/patterns/mobile/InfoPanel.preview';
import { statCardsPreviews } from '@/patterns/mobile/StatCards.preview';
import { avatarGroupPreviews } from '@/patterns/mobile/AvatarGroup.preview';
import { notificationListPreviews } from '@/patterns/mobile/NotificationList.preview';
import type { PreviewSection } from './preview-registry';

export interface PatternEntry {
  id: string;
  name: string;
  description: string;
  sections: PreviewSection[];
}

export const patternRegistry: PatternEntry[] = [
  cardActionsPreviews,
  listFilterSearchPreviews,
  formSectionPreviews,
  detailHeaderPreviews,
  actionPanelPreviews,
  infoPanelPreviews,
  statCardsPreviews,
  avatarGroupPreviews,
  notificationListPreviews,
];
