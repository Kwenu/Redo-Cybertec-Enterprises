import React from 'react';
import { partners } from '../../data/partners';
import { projects } from '../../data/projects';
import { organizations } from '../../data/clients';

export function TrustStrip() {
  const stats = [
  { value: '2000', label: 'Year established', color: 'text-royal-700', bar: 'bg-royal-500' },
  { value: String(partners.length), label: 'International technology partners', color: 'text-brand-700', bar: 'bg-brand-600' },
  { value: String(projects.length), label: 'Documented projects', color: 'text-aqua-700', bar: 'bg-aqua-500' },
  { value: String(organizations.filter((o) => o.type === 'client').length), label: 'Client organizations', color: 'text-coral-700', bar: 'bg-coral-500' },
  { value: '3', label: 'Documented markets: Sri Lanka, Maldives, Nepal', color: 'text-iris-700', bar: 'bg-iris-500' }];


  return (
    <section aria-label="Company at a glance" className="border-b border-line bg-white">
      <dl className="mx-auto grid max-w-site grid-cols-2 gap-x-6 px-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {stats.map((s) =>
        <div key={s.label} className="py-7">
            <span className={`block h-1 w-8 rounded-full ${s.bar}`} aria-hidden="true" />
            <dd className={`mt-4 text-3xl font-semibold tracking-tight ${s.color}`}>{s.value}</dd>
            <dt className="mt-1 text-sm leading-snug text-muted">{s.label}</dt>
          </div>
        )}
      </dl>
    </section>);

}