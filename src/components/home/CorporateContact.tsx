import React from 'react';
import { TextLink } from '../ui/TextLink';
import { company } from '../../data/company';

export function CorporateContact() {
  return (
    <section className="bg-navy-900 py-16 text-white lg:py-20" aria-labelledby="home-contact-title">
      <div className="mx-auto grid max-w-site gap-10 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <h2 id="home-contact-title" className="text-2xl font-medium tracking-tight">
            Connect With Cybertec Enterprises.
          </h2>
          <div className="mt-6">
            <TextLink to="/contact" tone="dark">
              Corporate contact
            </TextLink>
          </div>
        </div>
        <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
          <div>
            <dt className="text-xs text-white/55">Address</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-white/85">
              {company.addressLines.map((l) =>
              <span key={l} className="block">
                  {l}
                </span>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-white/55">Telephone</dt>
            <dd className="mt-2 space-y-1 text-[15px]">
              {company.phones.map((p) =>
              <a key={p} href={`tel:${p.replace(/-/g, '')}`} className="block text-white/85 hover:text-white">
                  {p}
                </a>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-xs text-white/55">Email</dt>
            <dd className="mt-2 text-[15px]">
              <a href={`mailto:${company.email}`} className="text-white/85 hover:text-white">
                {company.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>);

}