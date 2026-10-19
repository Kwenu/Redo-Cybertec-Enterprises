import React from 'react';
import { TextLink } from '../ui/TextLink';
import { capabilities } from '../../data/capabilities';
import { accentStyles } from '../../utils/accent';
import type { Accent } from '../../utils/accent';

const chipAccents: Accent[] = ['blue', 'aqua', 'royal', 'coral', 'iris', 'green'];

export function CapabilitiesPreview() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="capabilities-title">
      <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <h2
            id="capabilities-title"
            className="text-3xl font-medium tracking-tight text-navy-900 sm:text-[2.5rem] sm:leading-[1.15]">
            
            Technology Knowledge Backed by Technical Experience.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            Cybertec’s engineering capabilities complement its partnerships, supporting the technology it represents
            from design through ongoing maintenance.
          </p>
          <div className="mt-8">
            <TextLink to="/solutions-capabilities">Solutions & Capabilities</TextLink>
          </div>
        </div>
        <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            const a = accentStyles[chipAccents[i % chipAccents.length]];
            return (
              <li key={c.id} className="flex gap-4">
                <span className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${a.soft} ${a.text}`}>
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-navy-900">{c.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/75">{c.description}</p>
                </div>
              </li>);

          })}
        </ul>
      </div>
    </section>);

}