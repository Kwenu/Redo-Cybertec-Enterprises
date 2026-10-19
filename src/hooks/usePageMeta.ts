import { useEffect } from 'react';
import { company } from '../data/company';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  structuredData?: Record<string, unknown>;
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function usePageMeta({ title, description, path, structuredData }: PageMeta) {
  useEffect(() => {
    const fullTitle = `${title} | ${company.name}`;
    const url = `${company.website}${path}`;
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', company.name);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const existing = document.getElementById('structured-data');
    if (existing) existing.remove();
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, path, structuredData]);
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  url: company.website,
  foundingDate: company.established,
  email: company.email,
  telephone: company.phones[0],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No 10, St Joseph Place, Mabola',
    addressLocality: 'Wattala',
    addressCountry: 'LK'
  }
};