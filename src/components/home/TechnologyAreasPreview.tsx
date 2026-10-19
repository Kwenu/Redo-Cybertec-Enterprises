import React from 'react';
import { TextLink } from '../ui/TextLink';
import { EmergingBadge } from '../ui/EmergingBadge';
import { technologyAreas } from '../../data/technology';

export function TechnologyAreasPreview() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="tech-title">
      <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <h2 id="tech-title" className="text-3xl font-medium tracking-tight text-navy-900 sm:text-[2.5rem] sm:leading-[1.15]">
            Technology Areas and Expertise.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted">
            The technology domains associated with Cybertec’s industry experience and international relationships.
          </p>
          <div className="mt-8">
            <TextLink to="/technology-portfolio">View Technology Portfolio</TextLink>
          </div>
        </div>
        <ul className="lg:col-span-7 lg:col-start-6">
          {technologyAreas.map((a) =>
          <li key={a.id} className="grid gap-2 border-t border-line py-5 sm:grid-cols-5 sm:gap-6">
              <div className="sm:col-span-2">
                <h3 className="text-[15px] font-semibold text-navy-900">{a.name}</h3>
                {a.status === 'emerging' &&
              <div className="mt-2">
                    <EmergingBadge />
                  </div>
              }
              </div>
              <p className="text-sm leading-relaxed text-ink/75 sm:col-span-3">{a.items.join(' · ')}</p>
            </li>
          )}
        </ul>
      </div>
    </section>);

}