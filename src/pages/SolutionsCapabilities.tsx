import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { TextLink } from '../components/ui/TextLink';
import { capabilities, knowledgeTransfer, processSteps } from '../data/capabilities';
import { usePageMeta } from '../hooks/usePageMeta';

const sectors = [
{ name: 'Telecommunications', text: 'Distribution frames, cross-connects and base station infrastructure for operators.' },
{ name: 'Broadcasting', text: 'Broadcast infrastructure and fibre-based audio/video transport.' },
{ name: 'Enterprise Networking', text: 'Network infrastructure and connectivity for organizations.' }];


export function SolutionsCapabilities() {
  usePageMeta({
    title: 'Solutions & Capabilities — Engineering and Technical Capabilities',
    description:
    'The technical capabilities of Cybertec Enterprises — system design, installation, commissioning, maintenance and support — that complement its technology-sector experience.',
    path: '/solutions-capabilities'
  });

  return (
    <>
      <PageHero
        breadcrumb="Solutions & Capabilities"
        title="Technology Knowledge and Technical Capabilities."
        description="Cybertec’s technology-sector experience is complemented by technical capabilities relevant to infrastructure deployment and ongoing support." />
      

      <section className="bg-white py-20 lg:py-24" aria-labelledby="context-title">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 id="context-title" className="text-2xl font-medium tracking-tight text-navy-900 sm:text-3xl">
              Technology context first
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/80">
              Cybertec’s capabilities developed in support of the technology it represents. All equipment supplied is
              offered with installation and commissioning, and engineering services are provided to telcos and
              broadcasters.
            </p>
            <p className="mt-6 border-l-2 border-royal-500 pl-4 text-[15px] font-medium leading-relaxed text-navy-900">
              Turnkey project solutions through engineering expertise and product training.
            </p>
          </div>
          <ul className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {sectors.map((s) =>
            <li key={s.name} className="border-t-2 border-navy-900 pt-5">
                <h3 className="text-[15px] font-semibold text-navy-900">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.text}</p>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section id="process" className="bg-surface py-20 lg:py-24" aria-labelledby="process-title">
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="process-title"
            title="From technology knowledge to ongoing support"
            description="How Cybertec’s technical capabilities relate to one another across a project." />
          
          <ol className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line lg:grid-cols-5">
            {processSteps.map((step, i) =>
            <li key={step.title} className="relative bg-white p-6">
                <span className="text-sm font-medium text-brand-600">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-[15px] font-semibold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{step.description}</p>
              </li>
            )}
          </ol>
        </div>
      </section>

      <section id="capabilities" className="bg-white py-20 lg:py-24" aria-labelledby="capabilities-title">
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading id="capabilities-title" title="Technical capabilities" />
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.id} className="border-t border-line pt-6">
                  <Icon className="h-5 w-5 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="mt-4 text-[17px] font-semibold text-navy-900">{c.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/75">{c.description}</p>
                </li>);

            })}
          </ul>
        </div>
      </section>

      <section id="knowledge" className="bg-navy-900 py-20 text-white lg:py-24" aria-labelledby="knowledge-title">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <h2 id="knowledge-title" className="text-2xl font-medium tracking-tight sm:text-3xl">
              Knowledge shared through partnerships
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-white/70">
              Manufacturer relationships also support knowledge transfer, bringing specialist expertise from partner
              companies to local organizations.
            </p>
            <div className="mt-8">
              <TextLink to="/project-experience" tone="dark">
                See capabilities in project experience
              </TextLink>
            </div>
          </div>
          <ul className="grid gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {knowledgeTransfer.map((k) => {
              const Icon = k.icon;
              return (
                <li key={k.id} className="border-t border-white/15 pt-6">
                  <Icon className="h-5 w-5 text-brand-200" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="mt-4 text-[17px] font-semibold">{k.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/65">{k.description}</p>
                </li>);

            })}
          </ul>
        </div>
      </section>
    </>);

}