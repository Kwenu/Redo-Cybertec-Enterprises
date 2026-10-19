export type Accent = 'blue' | 'aqua' | 'royal' | 'coral' | 'iris' | 'green';

interface AccentStyle {
  soft: string;
  softer: string;
  text: string;
  solid: string;
  solidText: string;
  border: string;
  light: string;
}

export const accentStyles: Record<Accent, AccentStyle> = {
  blue: {
    soft: 'bg-brand-100',
    softer: 'bg-brand-50',
    text: 'text-brand-700',
    solid: 'bg-brand-600',
    solidText: 'text-white',
    border: 'border-brand-600',
    light: 'text-brand-300'
  },
  aqua: {
    soft: 'bg-aqua-100',
    softer: 'bg-aqua-50',
    text: 'text-aqua-700',
    solid: 'bg-aqua-600',
    solidText: 'text-white',
    border: 'border-aqua-600',
    light: 'text-aqua-300'
  },
  royal: {
    soft: 'bg-royal-100',
    softer: 'bg-royal-50',
    text: 'text-royal-700',
    solid: 'bg-royal-500',
    solidText: 'text-white',
    border: 'border-royal-500',
    light: 'text-royal-300'
  },
  coral: {
    soft: 'bg-coral-100',
    softer: 'bg-coral-50',
    text: 'text-coral-700',
    solid: 'bg-coral-500',
    solidText: 'text-white',
    border: 'border-coral-500',
    light: 'text-coral-300'
  },
  iris: {
    soft: 'bg-iris-100',
    softer: 'bg-iris-50',
    text: 'text-iris-700',
    solid: 'bg-iris-500',
    solidText: 'text-white',
    border: 'border-iris-500',
    light: 'text-iris-300'
  },
  green: {
    soft: 'bg-eco-100',
    softer: 'bg-eco-50',
    text: 'text-eco-700',
    solid: 'bg-eco-600',
    solidText: 'text-white',
    border: 'border-eco-600',
    light: 'text-eco-300'
  }
};