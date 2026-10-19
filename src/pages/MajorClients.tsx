import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { organizations } from '../data/clients';
import { getProjects } from '../utils/lookup';
import { usePageMeta } from '../hooks/usePageMeta';
import type { Organization } from '../types/content';

export function MajorClients() {
  usePageMeta({
    title: 'Major Clients - Organizations Associated With Our Project Experience',
    description:
    'Organizations associated with Cybertec Enterprises’ documented project experience across telecommunications, aviation, broadcasting and government.',
    path: '/major-clients'
  });

  const clients = organizations.filter((o) => o.type === 'client');
  const stakeholders = organizations.filter((o) => o.type === 'stakeholder');

  return (
    <>
      <PageHero
        breadcrumb="Major Clients"
        title="Organizations Associated With Our Project Experience."
        description="Organizations that commissioned or took part in Cybertec’s documented projects, linked to the project records that describe each relationship." />
      

      <section className="bg-white py-20 lg:py-24" aria-labelledby="clients-title">
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="clients-title"
            title="Clients"
            description="Organizations that awarded Cybertec documented project work." />
          
          <OrganizationGrid items={clients} />
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-24" aria-labelledby="stakeholders-title">
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="stakeholders-title"
            title="Project stakeholders"
            description="Organizations involved in projects within Cybertec’s documented experience, where the direct contracting party was another organization." />
          
          <OrganizationGrid items={stakeholders} />
          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted">
            Organizations are listed to document project experience and do not imply endorsement. Clients, project
            stakeholders and technology partners are presented separately. Logos will be shown once approved for
            publication.
          </p>
        </div>
      </section>
    </>);

}

function OrganizationGrid({ items }: {items: Organization[];}) {
  return (
    <ul className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((o) => {
        const related = getProjects(o.projectIds);
        return (
          <li key={o.id} className="flex flex-col border-b border-r border-line bg-white p-7">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-medium text-muted">{o.sector}</p>
              {o.verificationNote &&
              <span className="whitespace-nowrap rounded-sm bg-surface px-2 py-0.5 text-[11px] text-muted">
                  {o.verificationNote}
                </span>
              }
            </div>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-navy-900">{o.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{o.description}</p>
            <div className="mt-auto pt-6">
              <p className="border-t border-line pt-4 text-xs font-semibold text-navy-900">Related projects</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {related.map((p) =>
                <li key={p.id}>
                    <Link to={`/project-experience#${p.id}`} className="text-brand-700 underline-offset-2 hover:underline">
                      {p.title}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </li>);

      })}
    </ul>);

}