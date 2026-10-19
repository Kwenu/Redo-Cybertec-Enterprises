import React from 'react';
import { InfoIcon } from 'lucide-react';

export function VerificationNote({ children }: {children: React.ReactNode;}) {
  return (
    <p className="flex items-start gap-1.5 text-xs leading-relaxed text-muted">
      <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>);

}