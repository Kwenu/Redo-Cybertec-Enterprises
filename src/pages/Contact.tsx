import React from 'react';
import { ExternalLinkIcon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { InquiryForm } from '../components/contact/InquiryForm';
import { company } from '../data/company';
import { usePageMeta, organizationSchema } from '../hooks/usePageMeta';

export function Contact() {
  usePageMeta({
    title: 'Contact — Corporate Inquiries',
    description:
    'Corporate contact information for Cybertec Enterprises (Pvt) Ltd, No 10, St Joseph Place, Mabola, Wattala, Sri Lanka.',
    path: '/contact',
    structuredData: organizationSchema
  });

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        title="Connect With Cybertec Enterprises."
        description="For general corporate inquiries and information about Cybertec’s background, technology relationships, and areas of experience, please contact our team." />
      

      <section className="bg-surface py-16 lg:py-24" aria-label="Contact details and inquiry form">
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <h2 className="text-xl font-semibold text-navy-900">{company.name}</h2>
            <ul className="mt-8 space-y-7">
              <li className="flex gap-4">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted">Corporate address</p>
                  <address className="mt-1 text-[15px] not-italic leading-relaxed text-navy-900">
                    {company.addressLines.map((l) =>
                    <span key={l} className="block">
                        {l}
                      </span>
                    )}
                  </address>
                  <a
                    href={company.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-navy-900">
                    
                    View on map
                    <ExternalLinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted">Telephone</p>
                  {company.phones.map((p) =>
                  <a key={p} href={`tel:${p.replace(/-/g, '')}`} className="mt-1 block text-[15px] text-navy-900 hover:text-brand-700">
                      {p}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex gap-4">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a href={`mailto:${company.email}`} className="mt-1 block text-[15px] text-navy-900 hover:text-brand-700">
                    {company.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="mb-6 text-xl font-semibold text-navy-900">Send a corporate inquiry</h2>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>);

}