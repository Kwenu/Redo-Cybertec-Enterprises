import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { ProjectCard } from '../projects/ProjectCard';
import { projects } from '../../data/projects';

export function SelectedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  return (
    <section className="bg-surface py-20 lg:py-28" aria-labelledby="projects-title">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <SectionHeading
          id="projects-title"
          title="Experience Across Technology Infrastructure."
          description="Recent project highlights with airports, utilities, universities, the national broadcaster and government bodies."
          action={<TextLink to="/project-experience">Explore Project Experience</TextLink>} />
        
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) =>
          <ProjectCard key={p.id} project={p} linked />
          )}
        </div>
      </div>
    </section>);

}