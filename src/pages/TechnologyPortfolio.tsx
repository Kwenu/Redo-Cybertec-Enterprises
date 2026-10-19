import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { EmergingBadge } from '../components/ui/EmergingBadge';
import { VerificationNote } from '../components/ui/VerificationNote';
import { technologyAreas } from '../data/technology';
import { getPartners, industryName } from '../utils/lookup';
import { usePageMeta } from '../hooks/usePageMeta';

export function TechnologyPortfolio() {
  usePageMeta({
    title: 'Technology Portfolio — Technology Areas and Expertise',
    description:
    'An overview of the technology domains associated with Cybertec Enterprises: telecommunication, broadcast, enterprise networking and infrastructure technology.',
    path: '/technology-portfolio'
  });

  return (
    <>
      <PageHero
        breadcrumb="Technology Portfolio"
        title="Technology Areas and Expertise."
        description="An overview of the technology domains associated with Cybertec’s industry experience and international technology relationships." />
      

      <section className="bg-white py-20 lg:py-24" aria-label="Technology areas">
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <div className="max-w-3xl">
            <VerificationNote>
              These areas describe the technology domains associated with Cybertec. They are not a statement of current
              product availability. Prospective areas are marked separately from established ones.
            </VerificationNote>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {technologyAreas.map((area) => {
              const relatedPartners = getPartners(area.partnerIds);
              const emerging = area.status === 'emerging';
              return (
                <article
                  key={area.id}
                  id={area.id}
                  className={`flex flex-col rounded-sm border p-7 lg:p-8 ${
                  emerging ? 'border-eco-600/25 bg-eco-50/40' : 'border-line bg-white'}`
                  }>
                  
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-xs font-medium text-muted">{industryName(area.industryId)}</p>
                    {emerging && <EmergingBadge />}
                  </div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-navy-900">{area.name}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{area.summary}</p>
                  <ul className="mt-6 grid gap-x-6 gap-y-2 text-sm text-ink/85 sm:grid-cols-2">
                    {area.items.map((item) =>
                    <li key={item} className="flex items-start gap-2.5">
                        <span
                        className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${emerging ? 'bg-eco-600' : 'bg-brand-600'}`}
                        aria-hidden="true" />
                      
                        {item}
                      </li>
                    )}
                  </ul>
                  <div className="mt-auto pt-8">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-5 text-sm">
                      {relatedPartners.length > 0 ?
                      <p className="text-muted">
                          Partners:{' '}
                          {relatedPartners.map((p, i) =>
                        <React.Fragment key={p.id}>
                              <Link to={`/partners#${p.id}`} className="font-medium text-brand-700 hover:underline">
                                {p.name}
                              </Link>
                              {i < relatedPartners.length - 1 && ', '}
                            </React.Fragment>
                        )}
                        </p> :

                      <p className="text-muted">Partners to be confirmed</p>
                      }
                      <Link
                        to={`/industries#${area.industryId}`}
                        className="ml-auto whitespace-nowrap font-semibold text-brand-700 hover:text-navy-900">
                        
                        Industry context
                      </Link>
                    </div>
                  </div>
                </article>);

            })}
          </div>
        </div>
      </section>
    </>);

}