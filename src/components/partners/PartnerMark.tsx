import React from 'react';
import type { Partner } from '../../types/content';

interface PartnerMarkProps {
  partner: Pick<Partner, 'name' | 'logoUrl'>;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  tone?: 'dark' | 'light';
}

const sizes = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
  xl: 'text-4xl sm:text-5xl'
};

const imgSizes = {
  sm: 'h-5',
  md: 'h-7',
  lg: 'h-10',
  xl: 'h-14'
};

/**
 * Renders the official manufacturer logo when `logoUrl` is supplied in data/partners.ts.
 * Until approved logo files are added, a typographic mark of the official name is shown.
 */
export function PartnerMark({ partner, size = 'md', tone = 'dark' }: PartnerMarkProps) {
  if (partner.logoUrl) {
    return (
      <img
        src={partner.logoUrl}
        alt={`${partner.name} logo`}
        className={`${imgSizes[size]} w-auto object-contain`}
        loading="lazy" />);


  }
  return (
    <span
      className={`font-semibold tracking-tight ${sizes[size]} ${tone === 'dark' ? 'text-navy-900' : 'text-white'}`}>
      
      {partner.name}
    </span>);

}