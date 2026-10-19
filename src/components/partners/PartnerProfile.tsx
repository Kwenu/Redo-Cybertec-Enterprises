import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, ExternalLinkIcon } from 'lucide-react';
import { PartnerMark } from './PartnerMark';
import { StatusBadge } from '../ui/StatusBadge';
import { VerificationNote } from '../ui/VerificationNote';
import { getProjects, industryName } from '../../utils/lookup';
import type { Partner } from '../../types/content';

export function PartnerProfile({ partner }: {partner: Partner;}) {
  const { hash } = useLocation();
  const [open, setOpen] = useState(hash === `#${partner.id}`);
  const relatedProjects = getProjects(partner.projectIds);
  const detailsId = `${partner.id}-details`;

  useEffect(() => {
    if (hash === `#${partner.id}`) setOpen(true);
  }, [hash, partner.id]);

  return (
    <article id={partner.id} className="border-t border-line py-8 first:border-t-0">
      <div className="grid gap-6 md:grid-cols-12 md:gap-8">
        <div className="flex h-24 items-center justify-center rounded-sm bg-surface px-4 text-center md:col-span-3">
          <PartnerMark partner={partner} size="md" />
        </div>

        <div className="md:col-span-6">
          <p className="text-xs font-medium text-muted">
            {industryName(partner.category)}
            {partner.country && <span> · {partner.country}</span>}
          </p>
          <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-navy-900">{partner.name}</h3>
          <p className="mt-1 text-sm font-medium text-brand-700">{partner.focus}</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/80">{partner.description}</p>
        </div>

        <div className="flex flex-col items-start gap-3 md:col-span-3">
          <StatusBadge status={partner.status} />
          <p className="text-sm leading-relaxed text-ink/80">{partner.relationship}</p>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((o) => !o)}
            className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors duration-150 hover:text-navy-900">
            
            {open ? 'Hide profile' : 'View full profile'}
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true" />
            
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open &&
        <motion.div
          id={detailsId}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden">
          
            <dl className="mt-6 grid gap-6 border-l-2 border-brand-100 pl-6 sm:grid-cols-2 lg:grid-cols-4 md:ml-[calc(25%+0.5rem)]">
              <DetailList label="Industry applications" items={partner.applications} />
              <DetailList label="Associated technologies" items={partner.technologies} />
              {partner.markets && <DetailList label="Documented markets" items={[partner.markets]} />}
              <div>
                <dt className="text-xs font-semibold text-navy-900">Related project experience</dt>
                <dd className="mt-2 text-sm text-ink/80">
                  {relatedProjects.length ?
                <ul className="space-y-1.5">
                      {relatedProjects.map((p) =>
                  <li key={p.id}>
                          <Link to={`/project-experience#${p.id}`} className="text-brand-700 underline-offset-2 hover:underline">
                            {p.title}
                          </Link>
                        </li>
                  )}
                    </ul> :

                <span className="text-muted">No linked projects recorded.</span>
                }
                </dd>
              </div>
              {(partner.verificationNote || partner.website) &&
            <div className="space-y-3 sm:col-span-2 lg:col-span-4">
                  {partner.verificationNote && <VerificationNote>{partner.verificationNote}</VerificationNote>}
                  {partner.website &&
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-navy-900">
                
                      Official {partner.name} website
                      <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
              }
                </div>
            }
            </dl>
          </motion.div>
        }
      </AnimatePresence>
    </article>);

}

function DetailList({ label, items }: {label: string;items: string[];}) {
  return (
    <div>
      <dt className="text-xs font-semibold text-navy-900">{label}</dt>
      <dd className="mt-2">
        <ul className="space-y-1.5 text-sm text-ink/80">
          {items.map((i) =>
          <li key={i}>{i}</li>
          )}
        </ul>
      </dd>
    </div>);

}