import React from 'react';

export interface FlowStep {
  title: string;
  description?: string;
  highlight?: boolean;
}

interface EcosystemFlowProps {
  steps: FlowStep[];
  tone?: 'light' | 'dark';
}

export function EcosystemFlow({ steps, tone = 'light' }: EcosystemFlowProps) {
  const dark = tone === 'dark';
  return (
    <ol className="mx-auto flex w-full max-w-md flex-col items-stretch">
      {steps.map((step, i) =>
      <li key={step.title} className="flex flex-col items-center">
          <div
          className={`w-full rounded-sm border px-5 py-4 text-center ${
          step.highlight ?
          'border-brand-600 bg-brand-600 text-white' :
          dark ?
          'border-white/15 bg-navy-800 text-white' :
          'border-line bg-white text-navy-900'}`
          }>
          
            <p className={`text-[13px] font-semibold ${step.highlight ? 'tracking-wide' : ''}`}>{step.title}</p>
            {step.description &&
          <p
            className={`mt-1 text-xs leading-relaxed ${
            step.highlight ? 'text-white/80' : dark ? 'text-white/60' : 'text-muted'}`
            }>
            
                {step.description}
              </p>
          }
          </div>
          {i < steps.length - 1 &&
        <span className="flex flex-col items-center py-1" aria-hidden="true">
              <span className={`h-5 w-px ${dark ? 'bg-white/25' : 'bg-navy-600/30'}`} />
              <svg width="9" height="6" viewBox="0 0 9 6" className={dark ? 'text-white/40' : 'text-navy-600/50'}>
                <path d="M0 0l4.5 6L9 0z" fill="currentColor" />
              </svg>
            </span>
        }
        </li>
      )}
    </ol>);

}