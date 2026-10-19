import React from 'react';
import { Link } from 'react-router-dom';
import type { Milestone } from '../../types/content';

const kindLabels: Record<Milestone['kind'], string> = {
  group: 'Associated company',
  company: 'Company',
  project: 'Project',
  placeholder: 'To be added'
};

interface TimelineProps {
  milestones: Milestone[];
  tone?: 'light' | 'dark';
  showPlaceholder?: boolean;
}

export function Timeline({ milestones, tone = 'light', showPlaceholder = true }: TimelineProps) {
  const items: Milestone[] = showPlaceholder ?
  [
  ...milestones,
  {
    year: 'Next',
    title: 'Further milestones',
    description: 'Additional partnerships and projects are added here once verified against company records.',
    kind: 'placeholder'
  }] :

  milestones;

  const dark = tone === 'dark';
  const lineColor = dark ? 'bg-white/15' : 'bg-line';

  return (
    <div className="relative">
      <div className={`absolute bottom-2 left-[7px] top-2 w-px lg:hidden ${lineColor}`} aria-hidden="true" />
      <div className={`absolute left-0 right-0 top-[7px] hidden h-px lg:block ${lineColor}`} aria-hidden="true" />
      <ol className="relative grid gap-10 lg:auto-cols-fr lg:grid-flow-col lg:gap-8">
        {items.map((m) => {
          const isCompany = m.kind === 'company';
          const isPlaceholder = m.kind === 'placeholder';
          const dot = isCompany ?
          dark ?
          'border-brand-300 bg-brand-300' :
          'border-royal-500 bg-royal-500' :
          isPlaceholder ?
          `border-dashed ${dark ? 'border-white/40 bg-navy-900' : 'border-muted/60 bg-white'}` :
          m.kind === 'group' ?
          'border-iris-500 bg-iris-500' :
          'border-aqua-500 bg-aqua-500';
          const yearColor = isPlaceholder ?
          dark ?
          'text-white/40' :
          'text-muted/70' :
          dark ?
          'text-white' :
          'text-navy-900';
          return (
            <li key={`${m.year}-${m.title}`} className="relative pl-8 lg:pl-0">
              <span
                className={`absolute left-0 top-0 block h-[15px] w-[15px] rounded-full border-2 lg:static ${dot}`}
                aria-hidden="true" />
              
              <div className="lg:mt-6">
                <p className={`text-xs font-medium ${dark ? 'text-white/55' : 'text-muted'}`}>{kindLabels[m.kind]}</p>
                <p className={`mt-1 text-3xl font-medium tracking-tight ${yearColor}`}>{m.year}</p>
                <h3 className={`mt-3 text-[15px] font-semibold ${dark ? 'text-white' : 'text-navy-900'}`}>{m.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-white/65' : 'text-ink/75'}`}>{m.description}</p>
                {m.projectId &&
                <Link
                  to={`/project-experience#${m.projectId}`}
                  className={`mt-3 inline-block text-sm font-semibold underline-offset-2 hover:underline ${
                  dark ? 'text-brand-200' : 'text-brand-700'}`
                  }>
                  
                    View project
                  </Link>
                }
              </div>
            </li>);

        })}
      </ol>
    </div>);

}