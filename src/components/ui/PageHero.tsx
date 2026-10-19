import React from 'react';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  aside?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHero({
  breadcrumb,
  title,
  description,
  image,
  imageAlt = '',
  imagePosition = 'object-center',
  aside,
  children
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {image &&
      <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <img src={image} alt={imageAlt} className={`h-full w-full object-cover ${imagePosition}`} />
          <div className="absolute inset-0 bg-navy-900/45" aria-hidden="true" />
        </div>
      }
      <div className="relative mx-auto grid max-w-site items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className={image ? 'lg:col-span-6' : 'lg:col-span-7'}>
          <nav aria-label="Breadcrumb" className="text-xs text-white/55">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="transition-colors duration-150 hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white/80">
                {breadcrumb}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{description}</p>
          {children}
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </div>
    </section>);

}