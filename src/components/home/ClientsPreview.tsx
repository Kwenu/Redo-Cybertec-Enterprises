import React from 'react';
import { TextLink } from '../ui/TextLink';
import { organizations } from '../../data/clients';

export function ClientsPreview() {
  const clients = organizations.filter((o) => o.type === 'client' && !o.verificationNote).slice(0, 8);
  return (
    <section className="border-b border-line bg-white py-16 lg:py-20" aria-labelledby="clients-title">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="clients-title" className="max-w-xl text-2xl font-medium tracking-tight text-navy-900">
            Organizations Associated With Our Project Experience
          </h2>
          <TextLink to="/major-clients">View Major Clients</TextLink>
        </div>
        <ul className="mt-10 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c) =>
          <li key={c.id} className="flex min-h-[96px] flex-col justify-center border-b border-r border-line px-6 py-5">
              <span className="text-[15px] font-semibold tracking-tight text-navy-900">{c.name}</span>
              <span className="mt-1 text-xs text-muted">{c.sector}</span>
            </li>
          )}
        </ul>
      </div>
    </section>);

}