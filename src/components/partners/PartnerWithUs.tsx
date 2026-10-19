import React from 'react';
import { Link } from 'react-router-dom';
import { GlobeIcon, LandmarkIcon, WrenchIcon, LayersIcon } from 'lucide-react';
import { partnerBenefits } from '../../data/company';
import { accentStyles } from '../../utils/accent';

const icons = [GlobeIcon, LandmarkIcon, WrenchIcon, LayersIcon];

export function PartnerWithUs() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="partner-with-us-title">
      <div className="mx-auto max-w-site px-6 lg:px-8">
        <div className="grid gap-12 overflow-hidden rounded-lg bg-navy-900 p-8 text-white sm:p-12 lg:grid-cols-12 lg:p-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-brand-200">For international manufacturers</p>
            <h2 id="partner-with-us-title" className="mt-4 text-3xl font-medium tracking-tight sm:text-[2.5rem] sm:leading-[1.15]">
              Partner With Cybertec in Sri Lanka.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/70">
              Cybertec works with technology manufacturers seeking an established, technically capable partner in
              Sri Lanka and the wider region.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact?type=partnership"
                className="inline-flex min-h-[48px] items-center rounded-sm bg-brand-500 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-600">
                
                Discuss a Partnership
              </Link>
              <Link
                to="/partners"
                className="inline-flex min-h-[48px] items-center rounded-sm border border-white/30 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:border-white">
                
                Current partners
              </Link>
            </div>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
            {partnerBenefits.map((b, i) => {
              const Icon = icons[i % icons.length];
              const a = accentStyles[b.accent];
              return (
                <li key={b.title}>
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-md ${a.solid} ${a.solidText}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{b.description}</p>
                </li>);

            })}
          </ul>
        </div>
      </div>
    </section>);

}