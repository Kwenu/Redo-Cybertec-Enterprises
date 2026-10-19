import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  action?: React.ReactNode;
  id?: string;
}

export function SectionHeading({ title, description, tone = 'light', action, id }: SectionHeadingProps) {
  const titleColor = tone === 'light' ? 'text-navy-900' : 'text-white';
  const bodyColor = tone === 'light' ? 'text-muted' : 'text-white/70';
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2 id={id} className={`text-3xl font-medium tracking-tight sm:text-[2.5rem] sm:leading-[1.15] ${titleColor}`}>
          {title}
        </h2>
        {description && <p className={`mt-4 text-[17px] leading-relaxed ${bodyColor}`}>{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>);

}