import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { PartnerMark } from '../partners/PartnerMark';
import { partners, relationshipStatusLabels } from '../../data/partners';
import { industryName } from '../../utils/lookup';

export function FeaturedPartnerships() {
  const featured = partners.filter((p) => p.featured);
  const [activeId, setActiveId] = useState(featured[0]?.id);
  const active = featured.find((p) => p.id === activeId) ?? featured[0];

  if (!active) return null;

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="featured-partners-title">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <SectionHeading
          id="featured-partners-title"
          title="Global Partnerships. Shared Technology Expertise."
          description="Cybertec’s relationships with international technology manufacturers form an important part of its corporate identity, industry involvement, and technology experience." />
        

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div role="tablist" aria-label="Featured partners" className="flex flex-col lg:col-span-4">
            {featured.map((p) => {
              const selected = p.id === active.id;
              return (
                <button
                  key={p.id}
                  role="tab"
                  id={`tab-${p.id}`}
                  aria-selected={selected}
                  aria-controls="featured-partner-panel"
                  onClick={() => setActiveId(p.id)}
                  className={`border-l-2 px-5 py-5 text-left transition-colors duration-150 ${
                  selected ? 'border-brand-600 bg-surface' : 'border-line hover:border-navy-600 hover:bg-surface/60'}`
                  }>
                  
                  <span className="block text-lg font-semibold tracking-tight text-navy-900">{p.name}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {industryName(p.category)} · {relationshipStatusLabels[p.status].label}
                  </span>
                </button>);

            })}
            <div className="mt-8 px-5">
              <TextLink to="/partners">Explore Our Global Partnerships</TextLink>
            </div>
          </div>

          <div
            id="featured-partner-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="relative min-h-[420px] overflow-hidden rounded-sm bg-navy-900 p-8 text-white sm:p-12 lg:col-span-8">
            
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="flex h-full flex-col">
                
                <p className="inline-flex items-center gap-2 text-xs font-medium text-brand-200">
                  <span className="h-1.5 w-6 rounded-full bg-brand-300" aria-hidden="true" />
                  Global technology partner
                </p>
                <div className="mt-8">
                  <PartnerMark partner={active} size="xl" tone="light" />
                </div>
                <p className="mt-4 text-sm text-white/60">
                  {active.focus} · {industryName(active.category)}
                  {active.country && <> · {active.country}</>}
                </p>
                <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-white/85">{active.description}</p>
                <div className="mt-8 max-w-2xl border-t border-white/15 pt-6">
                  <p className="text-xs font-semibold text-white">Relationship with Cybertec</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/70">{active.relationship}</p>
                </div>
                <div className="mt-10">
                  <TextLink to={`/partners#${active.id}`} tone="dark">
                    Explore Partnership
                  </TextLink>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}