import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';

interface TextLinkProps {
  to: string;
  children: React.ReactNode;
  tone?: 'light' | 'dark';
}

export function TextLink({ to, children, tone = 'light' }: TextLinkProps) {
  const color = tone === 'light' ? 'text-brand-700 hover:text-navy-900' : 'text-brand-200 hover:text-white';
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors duration-150 ${color}`}>
      
      {children}
      <ArrowRightIcon
        className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5"
        aria-hidden="true" />
      
    </Link>);

}