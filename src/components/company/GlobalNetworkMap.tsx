import React from 'react';
import { motion } from 'framer-motion';

interface GlobalNetworkMapProps {
  labelled?: boolean;
  className?: string;
}

/**
 * Abstract globe — no partner locations are plotted. Outer nodes represent
 * technology categories of the partner ecosystem, not geographic positions.
 * The highlighted node marks Cybertec in Sri Lanka.
 */
const outerNodes = [
{ x: 150, y: 120, label: 'Telecommunications', anchor: 'end' as const },
{ x: 300, y: 70, label: 'Broadcasting', anchor: 'middle' as const },
{ x: 440, y: 112, label: 'Enterprise Networking', anchor: 'start' as const },
{ x: 140, y: 270, label: 'Infrastructure', anchor: 'end' as const },
{ x: 455, y: 310, label: 'Test & Measurement', anchor: 'start' as const }];


const hub = { x: 372, y: 238 };

export function GlobalNetworkMap({ labelled = true, className = '' }: GlobalNetworkMapProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label="Abstract illustration of Cybertec in Sri Lanka connected to an international technology partner ecosystem">
      
      <g fill="none" stroke="currentColor" className="text-white/[0.12]" strokeWidth="1">
        <circle cx="300" cy="200" r="168" />
        <ellipse cx="300" cy="200" rx="110" ry="168" />
        <ellipse cx="300" cy="200" rx="48" ry="168" />
        <ellipse cx="300" cy="200" rx="168" ry="58" />
        <line x1="132" y1="200" x2="468" y2="200" />
        <ellipse cx="300" cy="130" rx="152" ry="22" />
        <ellipse cx="300" cy="270" rx="152" ry="22" />
      </g>

      {outerNodes.map((n, i) => {
        const cx = (n.x + hub.x) / 2;
        const cy = Math.min(n.y, hub.y) - 50;
        return (
          <motion.path
            key={n.label}
            d={`M${n.x} ${n.y} Q${cx} ${cy} ${hub.x} ${hub.y}`}
            fill="none"
            stroke="currentColor"
            className="text-brand-300"
            strokeWidth="1.25"
            strokeOpacity="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.06, ease: [0.23, 1, 0.32, 1] }} />);


      })}

      {outerNodes.map((n) =>
      <g key={`${n.label}-node`}>
          <circle cx={n.x} cy={n.y} r="4" className="fill-brand-200" />
          {labelled &&
        <text
          x={n.anchor === 'end' ? n.x - 10 : n.anchor === 'start' ? n.x + 10 : n.x}
          y={n.anchor === 'middle' ? n.y - 12 : n.y + 4}
          textAnchor={n.anchor}
          className="fill-white/70 text-[12px] font-medium">
          
              {n.label}
            </text>
        }
        </g>
      )}

      <circle cx={hub.x} cy={hub.y} r="14" className="fill-brand-600/25" />
      <circle cx={hub.x} cy={hub.y} r="6" className="fill-white" />
      <text x={hub.x + 18} y={hub.y + 26} className="fill-white text-[13px] font-semibold">
        Cybertec · Sri Lanka
      </text>
    </svg>);

}