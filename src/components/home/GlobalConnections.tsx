import React from 'react';
import { EcosystemFlow } from '../company/EcosystemFlow';
import { GlobalNetworkMap } from '../company/GlobalNetworkMap';

const steps = [
{ title: 'International technology ecosystem' },
{ title: 'Global manufacturers and partners' },
{ title: 'Cybertec Enterprises', highlight: true },
{ title: 'Local technology industries' }];


export function GlobalConnections() {
  return (
    <section className="bg-navy-950 py-20 text-white lg:py-28" aria-labelledby="connections-title">
      <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 id="connections-title" className="text-3xl font-medium tracking-tight sm:text-[2.5rem] sm:leading-[1.15]">
            Connected to the Global Technology Landscape.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-white/70">
            Cybertec sits between international technology manufacturers and the industries it serves in Sri Lanka,
            bringing global technology knowledge into local network, broadcast and infrastructure environments.
          </p>
          <div className="mt-10">
            <EcosystemFlow steps={steps} tone="dark" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <GlobalNetworkMap />
          <p className="mt-4 text-center text-xs text-white/45">
            Illustrative. Outer points represent technology areas of the partner ecosystem, not partner locations.
          </p>
        </div>
      </div>
    </section>);

}