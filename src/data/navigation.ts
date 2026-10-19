import type { NavItem } from '../types/content';

export const primaryNav: NavItem[] = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{
  label: 'Global Partners',
  to: '/partners',
  children: [
  { label: 'All global partners', to: '/partners', description: 'The full partner ecosystem' },
  { label: 'Telecommunications', to: '/partners?category=telecommunications' },
  { label: 'Broadcasting', to: '/partners?category=broadcasting' },
  { label: 'Enterprise Networking', to: '/partners?category=enterprise-networking' },
  { label: 'Infrastructure', to: '/partners?category=infrastructure' }]

},
{
  label: 'Industries',
  to: '/industries',
  children: [
  { label: 'Telecommunications', to: '/industries#telecommunications' },
  { label: 'Broadcasting', to: '/industries#broadcasting' },
  { label: 'Enterprise Networking', to: '/industries#enterprise-networking' },
  { label: 'Infrastructure & Connectivity', to: '/industries#infrastructure' },
  { label: 'Other technology areas', to: '/industries#other' }]

},
{ label: 'Technology Portfolio', to: '/technology-portfolio' },
{
  label: 'Solutions & Capabilities',
  to: '/solutions-capabilities',
  children: [
  { label: 'Technical capabilities', to: '/solutions-capabilities#capabilities' },
  { label: 'How we work', to: '/solutions-capabilities#process' },
  { label: 'Knowledge & training', to: '/solutions-capabilities#knowledge' }]

},
{ label: 'Project Experience', to: '/project-experience' },
{ label: 'Major Clients', to: '/major-clients' }];