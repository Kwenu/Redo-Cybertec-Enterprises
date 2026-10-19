import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { IndustryCard } from '../industries/IndustryCard';
import { industries } from '../../data/industries';

export function IndustryPresence() {
  const featured = industries.filter((i) => i.id === 'telecommunications' || i.id === 'broadcasting');
  const secondary = industries.filter((i) => !featured.includes(i));

  return (
    <section className="bg-surface py-20 lg:py-28" aria-labelledby="industries-title">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <SectionHeading
          id="industries-title"
          title="Industries That Shape Our Experience."
          description="Telecommunications and broadcasting have defined the company since its founding, with enterprise networking and related infrastructure developing alongside."
          action={<TextLink to="/industries">Explore Our Industry Experience</TextLink>} />
        
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {featured.map((i) =>
          <IndustryCard key={i.id} industry={i} variant="feature" />
          )}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((i) =>
          <IndustryCard key={i.id} industry={i} />
          )}
        </div>
      </div>
    </section>);

}