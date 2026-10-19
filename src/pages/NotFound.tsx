import React from 'react';
import { TextLink } from '../components/ui/TextLink';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFound() {
  usePageMeta({ title: 'Page not found', description: 'The requested page could not be found.', path: '/404' });
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <p className="text-sm font-medium text-muted">404</p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight text-navy-900">This page could not be found.</h1>
        <p className="mt-4 max-w-lg text-[17px] text-ink/80">The page may have moved as part of the website’s reorganization.</p>
        <div className="mt-8">
          <TextLink to="/">Return to the homepage</TextLink>
        </div>
      </div>
    </section>);

}