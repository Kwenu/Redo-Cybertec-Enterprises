import React from 'react';
import { TextLink } from '../ui/TextLink';

const columns = [
{
  title: 'Our Identity',
  body: 'Founded in 2000 as a telecom and broadcasting solutions company, Cybertec represents international manufacturers and supports their technology locally.'
},
{
  title: 'Our Partnerships',
  body: 'Relationships with manufacturers including Huawei, Cisco, CommScope, Sterlite Optical Technologies and Sankosha connect the company to global technology ecosystems.'
},
{
  title: 'Our Experience',
  body: 'Documented projects for Sri Lanka Telecom, Airport & Aviation Services Sri Lanka, Lanka Bell and the Ministry of Finance, Maldives.'
}];


export function WhoWeAre() {
  return (
    <section className="bg-surface py-20 lg:py-28" aria-labelledby="who-title">
      <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 id="who-title" className="text-3xl font-medium tracking-tight text-navy-900 sm:text-[2.5rem] sm:leading-[1.15]">
            Who We Are.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ink/80">
            Cybertec Enterprises (Pvt) Ltd is an established technology company with experience across
            telecommunications, broadcasting, enterprise networking and related technology infrastructure. Its
            international relationships, industry experience and technical knowledge have developed together since
            2000.
          </p>
          <div className="mt-8">
            <TextLink to="/about">Learn More About Cybertec</TextLink>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          {columns.map((c) =>
          <div key={c.title} className="grid gap-2 border-t border-navy-900/10 py-7 sm:grid-cols-3 sm:gap-6">
              <h3 className="text-[15px] font-semibold text-navy-900">{c.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink/80 sm:col-span-2">{c.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}