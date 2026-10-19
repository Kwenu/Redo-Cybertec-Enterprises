import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { getPartners } from '../../utils/lookup';
import { accentStyles } from '../../utils/accent';
import { industryIcons } from '../../utils/industryIcons';
import type { Industry } from '../../types/content';

interface IndustryCardProps {
  industry: Industry;
  variant?: 'feature' | 'compact';
}

export function IndustryCard({ industry, variant = 'compact' }: IndustryCardProps) {
  const related = getPartners(industry.partnerIds).slice(0, 3);
  const feature = variant === 'feature';
  const a = accentStyles[industry.accent];
  const Icon = industryIcons[industry.id];

  return (
    <Link
      to={`/industries#${industry.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white transition-colors duration-150 hover:border-navy-600">
      
      {industry.image ?
      <div className={`overflow-hidden ${a.softer} ${feature ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          <img
          src={industry.image}
          alt={industry.imageAlt ?? ''}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
        
        </div> :

      <div className={`flex aspect-[4/3] items-center justify-center ${a.softer}`}>
          <Icon className={`h-12 w-12 ${a.text}`} strokeWidth={1.25} aria-hidden="true" />
        </div>
      }
      <div className={`flex flex-1 flex-col ${feature ? 'p-7' : 'p-6'}`}>
        <div className="flex items-center gap-3">
          <span className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded ${a.solid} ${a.solidText}`}>
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className={`font-semibold tracking-tight text-navy-900 ${feature ? 'text-2xl' : 'text-lg'}`}>{industry.name}</h3>
        </div>
        {feature && industry.tagline && <p className={`mt-4 text-sm font-medium ${a.text}`}>{industry.tagline}</p>}
        <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{industry.summary}</p>
        {feature && <p className="mt-4 text-sm leading-relaxed text-muted">{industry.experience}</p>}
        <div className="mt-auto pt-6">
          {related.length > 0 &&
          <p className="text-xs font-medium text-navy-800">Partners: {related.map((p) => p.name).join(', ')}</p>
          }
          <span className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text}`}>
            Read more
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>);

}