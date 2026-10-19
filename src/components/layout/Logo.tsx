import React from 'react';
import { media } from '../../data/media';

interface LogoProps {
  tone?: 'dark' | 'light';
}

export function Logo({ tone = 'dark' }: LogoProps) {
  const img =
  <img src={media.logo} alt="Cybertec Enterprises (Pvt) Ltd." className="h-11 w-auto sm:h-12" width={116} height={53} />;

  if (tone === 'light') {
    return <span className="inline-flex rounded-md bg-white px-3 py-2">{img}</span>;
  }
  return img;
}