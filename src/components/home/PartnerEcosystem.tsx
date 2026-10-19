import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { PartnerMark } from '../partners/PartnerMark';
import { partnerCategories, partners } from '../../data/partners';
import { accentStyles } from '../../utils/accent';
import { getIndustry } from '../../utils/lookup';

export function PartnerEcosystem() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="ecosystem-title">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <SectionHeading
          id="ecosystem-title"
          title="An Ecosystem of Global Technology Relationships."
          description="International manufacturers listed among Cybertec’s technology partners, organized by technology area."
          action={<TextLink to="/partners">View All Partners</TextLink>} />
        

        <div className="mt-14">
          {partnerCategories.map((cat) => {
            const items = partners.filter((p) => p.category === cat.id);
            if (!items.length) return null;
            const a = accentStyles[getIndustry(cat.id)?.accent ?? 'blue'];
            return (
              <div key={cat.id} className="grid gap-6 border-t border-line py-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-3">
                  <h3 className="flex items-center gap-2.5 text-[15px] font-semibold text-navy-900">
                    <span className={`h-3 w-3 rounded-sm ${a.solid}`} aria-hidden="true" />
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cat.description}</p>
                </div>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-9 lg:grid-cols-4">
                  {items.map((p) =>
                  <li key={p.id}>
                      <Link
                      to={`/partners#${p.id}`}
                      className="flex h-full min-h-[104px] flex-col justify-between rounded-sm border border-line px-4 py-4 transition-colors duration-150 hover:border-navy-600">
                      
                        <PartnerMark partner={p} size="sm" />
                        <span className="mt-3 text-xs leading-snug text-muted">{p.focus}</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>);

          })}
        </div>
      </div>
    </section>);

}