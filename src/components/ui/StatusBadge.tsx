import React from 'react';
import { relationshipStatusLabels } from '../../data/partners';
import type { RelationshipStatus } from '../../types/content';

const styles: Record<RelationshipStatus, string> = {
  agreement: 'bg-brand-50 text-brand-700 border-brand-100',
  documented: 'bg-aqua-50 text-aqua-700 border-aqua-100',
  project: 'bg-coral-50 text-coral-700 border-coral-100',
  listed: 'bg-surface text-muted border-line'
};

export function StatusBadge({ status }: {status: RelationshipStatus;}) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-sm border px-2 py-0.5 text-[11px] font-medium ${styles[status]}`}
      title={relationshipStatusLabels[status].description}>
      
      {relationshipStatusLabels[status].label}
    </span>);

}