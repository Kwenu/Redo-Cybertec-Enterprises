import React, { useMemo, useState } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { industries } from '../data/industries';
import { usePageMeta } from '../hooks/usePageMeta';
import type { IndustryId } from '../types/content';

export function ProjectExperience() {
  usePageMeta({
    title: 'Project Experience - Technology Infrastructure Projects',
    description:
    'Selected documented projects of Cybertec Enterprises, including work for Sri Lanka Telecom, Airport & Aviation Services Sri Lanka, Lanka Bell and the Ministry of Finance, Maldives.',
    path: '/project-experience'
  });

  const [filter, setFilter] = useState<IndustryId | 'all'>('all');

  const filters = useMemo(
    () => [
    { id: 'all' as const, name: 'All projects', count: projects.length },
    ...industries.
    map((i) => ({ id: i.id, name: i.name, count: projects.filter((p) => p.industryId === i.id).length })).
    filter((f) => f.count > 0)],

    []
  );

  const visible = filter === 'all' ? projects : projects.filter((p) => p.industryId === filter);

  return (
    <>
      <PageHero
        breadcrumb="Project Experience"
        title="Experience Built Through Technology Projects."
        description="Explore selected projects that reflect Cybertec’s documented involvement in technology infrastructure and related industry environments." />
      

      <section className="bg-surface py-16 lg:py-20" aria-label="Projects">
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <div role="group" aria-label="Filter projects by industry" className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const selected = f.id === filter;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(f.id)}
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

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) =>
            <ProjectCard key={p.id} project={p} />
            )}
          </div>

          <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted">
            Project descriptions are based on Cybertec’s documented project records. Dates are shown only where
            recorded. Verified project photography will be added as it becomes available for publication.
          </p>
        </div>
      </section>
    </>);

}