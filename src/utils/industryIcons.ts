import { RadioTowerIcon, TvIcon, NetworkIcon, Building2Icon, ZapIcon, LayersIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IndustryId } from '../types/content';

export const industryIcons: Record<IndustryId, LucideIcon> = {
  telecommunications: RadioTowerIcon,
  broadcasting: TvIcon,
  'enterprise-networking': NetworkIcon,
  infrastructure: Building2Icon,
  'energy-agriculture': ZapIcon,
  other: LayersIcon
};