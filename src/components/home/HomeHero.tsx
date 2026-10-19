import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { media } from '../../data/media';

const mosaic = [
{ src: media.heroFibre, alt: 'Fibre optic patch cords in an optical distribution frame', label: 'Telecommunications', to: '/industries#telecommunications' },
{ src: media.heroBroadcast, alt: 'Television broadcast master control room', label: 'Broadcasting', to: '/industries#broadcasting' },
{ src: media.heroNetwork, alt: 'Enterprise core network switches in a server rack', label: 'Enterprise Networking', to: '/industries#enterprise-networking' },
{ src: media.heroTower, alt: 'Telecommunications tower with microwave dishes at dusk', label: 'Infrastructure', to: '/industries#infrastructure' }];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white" aria-labelledby="hero-title">
      <div className="relative mx-auto grid max-w-site items-center gap-16 px-6 py-16 lg:grid-cols-12 lg:px-8 lg:py-18">
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}>
          
          <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-200">
            <span className="h-2 w-2 rounded-full bg-brand-300" aria-hidden="true" />
            Cybertec Enterprises (Pvt) Ltd · Established 2000
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Connecting Global Technology Through{' '}
            <span className="text-brand-300">Trusted Partnerships.</span>
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-white/85">
            An established technology company with international manufacturer relationships, industry experience, and
            technical expertise across critical technology sectors.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Established in 2000, Cybertec Enterprises (Pvt) Ltd operates across telecommunication, broadcast and
            enterprise networks, bringing together global technology relationships, local industry knowledge, and
            professional technical experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex min-h-[48px] items-center rounded-sm bg-brand-500 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-brand-600">
              
              Discover Cybertec
            </Link>
            <Link
              to="/partners"
              className="inline-flex min-h-[48px] items-center rounded-sm border border-white/30 px-6 text-sm font-semibold text-white transition-colors duration-150 hover:border-white">
              
              Explore Our Global Partners
            </Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70" aria-label="Sectors">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />Telecommunications</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-coral-500" aria-hidden="true" />Broadcasting</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-aqua-500" aria-hidden="true" />Enterprise Networking</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-iris-500" aria-hidden="true" />Infrastructure</li>
          </ul>
        </motion.div>

        <div className="lg:col-span-6">
          <div className="ml-auto grid w-full max-w-[620px] grid-cols-2 gap-3 sm:gap-4 lg:pb-8">
            {mosaic.map((m, i) =>
            <Link
              key={m.src}
              to={m.to}
              className={`group relative block overflow-hidden rounded-md ring-1 ring-white/10 ${i % 2 === 1 ? 'sm:translate-y-8' : ''}`}>
              
                <img
                src={m.src}
                alt={m.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
              
                <span className="absolute bottom-3 left-3 rounded-sm bg-navy-950/85 px-2.5 py-1 text-xs font-medium text-white">
                  {m.label}
                </span>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>);

}