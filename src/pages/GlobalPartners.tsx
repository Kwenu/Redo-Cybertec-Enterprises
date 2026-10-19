import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatusBadge } from '../components/ui/StatusBadge';
import { GlobalNetworkMap } from '../components/company/GlobalNetworkMap';
import { PartnerProfile } from '../components/partners/PartnerProfile';
import { PartnerWithUs } from '../components/partners/PartnerWithUs';
import { partnerCategories, partners, relationshipStatusLabels } from '../data/partners';
import { partnershipRoles } from '../data/company';
import { usePageMeta } from '../hooks/usePageMeta';
import type { RelationshipStatus } from '../types/content';

const statusOrder: RelationshipStatus[] = ['agreement', 'documented', 'project', 'listed'];

export function GlobalPartners() {
  usePageMeta({
    title: 'Global Technology Partners',
    description:
    'The international technology manufacturers associated with Cybertec Enterprises across telecommunications, broadcasting, enterprise networking and infrastructure.',
    path: '/partners'
  });

  const [params, setParams] = useSearchParams();
  const activeCategory = params.get('category') ?? 'all';
  const visibleCategories =
  activeCategory === 'all' ? partnerCategories : partnerCategories.filter((c) => c.id === activeCategory);

  const filters = [
  { id: 'all', name: 'All partners', count: partners.length },
  ...partnerCategories.map((c) => ({ id: c.id, name: c.name, count: partners.filter((p) => p.category === c.id).length }))];


  return (
    <>
      <PageHero
        breadcrumb="Global Partners"
        title="Our Global Technology Partners"
        description="Discover the international technology relationships that contribute to Cybertec’s industry presence, technology knowledge, and corporate experience."
        aside={<GlobalNetworkMap />} />
      

      <section className="bg-white py-20 lg:py-24" aria-labelledby="role-title">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 id="role-title" className="text-3xl font-medium tracking-tight text-navy-900 sm:text-[2.5rem] sm:leading-[1.15]">
              The role of international relationships
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-ink/80">
              Since its establishment, Cybertec has worked with international manufacturers whose technology is used in
              telecommunications, broadcasting and enterprise networks. These relationships are central to the
              company’s identity and to how its industry experience has developed.
            </p>
            <p className="mt-5 text-xs leading-relaxed text-muted">
              The areas listed describe the role of partnerships generally. Not every area applies to every individual
              relationship.
            </p>
          </div>
          <ul className="lg:col-span-6 lg:col-start-7">
            {partnershipRoles.map((r) =>
            <li key={r.title} className="grid gap-1 border-t border-line py-5 sm:grid-cols-5 sm:gap-6">
                <h3 className="text-[15px] font-semibold text-navy-900 sm:col-span-2">{r.title}</h3>
                <p className="text-sm leading-relaxed text-ink/75 sm:col-span-3">{r.description}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-surface py-20 lg:py-24" aria-labelledby="profiles-title">
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="profiles-title"
            title="Partner profiles"
            description="Each profile records the manufacturer’s technology focus and the relationship documented in Cybertec’s company information." />
          

          <dl className="mt-10 grid gap-4 border-y border-line py-5 sm:grid-cols-2 lg:grid-cols-4">
            {statusOrder.map((s) =>
            <div key={s} className="flex flex-col items-start gap-2">
                <dt>
                  <StatusBadge status={s} />
                </dt>
                <dd className="text-xs leading-relaxed text-muted">{relationshipStatusLabels[s].description}</dd>
              </div>
            )}
          </dl>

          <div role="group" aria-label="Filter partners by category" className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => {
              const selected = f.id === activeCategory;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setParams(f.id === 'all' ? {} : { category: f.id }, { replace: true })}
                  className={`inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap rounded-sm border px-3.5 text-sm font-medium transition-colors duration-150 ${
                  selected ?
                  'border-navy-900 bg-navy-900 text-white' :
                  'border-line bg-white text-navy-900 hover:border-navy-600'}`
                  }>
                  
                  {f.name}
                  <span className={selected ? 'text-white/60' : 'text-muted'}>{f.count}</span>
                </button>);

            })}
          </div>

          <div className="mt-10 space-y-8">
            {visibleCategories.map((cat) => {
              const items = partners.filter((p) => p.category === cat.id);
              if (!items.length) return null;
              return (
                <section key={cat.id} aria-labelledby={`cat-${cat.id}`} className="rounded-sm bg-white px-6 py-2 lg:px-10">
                  <div className="flex flex-col gap-1 border-b border-line py-6 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 id={`cat-${cat.id}`} className="text-xl font-semibold tracking-tight text-navy-900">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-muted">{cat.description}</p>
                  </div>
                  {items.map((p) =>
                  <PartnerProfile key={p.id} partner={p} />
                  )}
                </section>);

            })}
          </div>

          <p className="mt-8 text-xs leading-relaxed text-muted">
            Manufacturer names are shown as typographic marks until official logos are approved for use. All names and
            trademarks belong to their respective owners. Relationship descriptions reflect Cybertec’s company
            information and are subject to verification.
          </p>
        </div>
      </section>

      <PartnerWithUs />
    </>);

}