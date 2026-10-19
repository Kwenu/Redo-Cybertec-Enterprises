import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { TextLink } from '../ui/TextLink';
import { Timeline } from '../company/Timeline';
import { milestones } from '../../data/milestones';

export function HistoryPreview() {
  return (
    <section className="bg-navy-900 py-20 lg:py-28" aria-labelledby="history-title">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <SectionHeading
          id="history-title"
          tone="dark"
          title="Experience Since 2000."
          description="Selected documented milestones in the development of Cybertec and its associated companies."
          action={
          <TextLink to="/about#history" tone="dark">
              Discover Our History
            </TextLink>
          } />
        
        <div className="mt-16">
          <Timeline milestones={milestones} tone="dark" />
        </div>
      </div>
    </section>);

}