import { media } from './media';
import type { Accent } from '../utils/accent';

export const company = {
  name: 'Cybertec Enterprises (Pvt) Ltd',
  shortName: 'Cybertec Enterprises',
  established: '2000',
  statement: 'Connecting Global Technology Through Trusted Partnerships.',
  supporting: 'Established Experience. Global Relationships. Technology Expertise.',
  summary:
  'Established in 2000, Cybertec Enterprises (Pvt) Ltd has developed experience across telecommunications, broadcasting, enterprise networking, and related technology infrastructure.',
  addressLines: ['No 10, St Joseph Place', 'Mabola, Wattala', 'Sri Lanka'],
  phones: ['+94-11-2597696', '+94-11-2598033'],
  email: 'crm@cybertecent.com',
  website: 'https://www.cybertecent.com',
  mapUrl:
  'https://www.google.com/maps/search/?api=1&query=No+10+St+Joseph+Place+Mabola+Wattala+Sri+Lanka'
};

export const trustItems: {label: string;value: string;accent: Accent;}[] = [
{ label: 'Established', value: '2000', accent: 'royal' },
{ label: 'International', value: 'Global Technology Partnerships', accent: 'blue' },
{ label: 'Sector', value: 'Telecommunications', accent: 'blue' },
{ label: 'Sector', value: 'Broadcasting', accent: 'coral' },
{ label: 'Sector', value: 'Enterprise Networking', accent: 'aqua' }];


export const enterpriseNetworks = {
  name: 'Cybertec Enterprise Networks',
  logo: media.enterpriseNetworksLogo,
  tagline: 'Powering Progress. Delivering Reliability.',
  description:
  'The enterprise networking arm of Cybertec, delivering design, supply, training, installation and commissioning of network infrastructure for public institutions — including Airport & Aviation Services Sri Lanka, the Ceylon Electricity Board and Kotelawala Defence University.'
};

export const identityPillars: {title: string;description: string;accent: Accent;}[] = [
{
  title: 'Global Relationships',
  description:
  'Relationships with international technology manufacturers across telecommunications, broadcasting and networking, recorded through representation and system integration agreements.',
  accent: 'blue'
},
{
  title: 'Industry Experience',
  description:
  'Experience across telecommunications, broadcasting, enterprise networking and related infrastructure, documented through projects with Sri Lankan operators and public institutions.',
  accent: 'aqua'
},
{
  title: 'Technical Capability',
  description:
  'Engineering knowledge in design, installation, commissioning and maintenance that complements the company’s wider technology activities.',
  accent: 'royal'
}];


export const corporateValues = [
{ title: 'Professional integrity', description: 'Representing manufacturers and organizations accurately and responsibly.' },
{ title: 'Long-term relationships', description: 'Valuing continuity with international partners and local institutions.' },
{ title: 'Technical knowledge', description: 'Grounding activity in a working understanding of the technology involved.' },
{ title: 'Reliability', description: 'Supporting infrastructure that organizations depend on day to day.' },
{ title: 'Responsible collaboration', description: 'Working openly alongside operators, partners and project stakeholders.' },
{ title: 'Continuous development', description: 'Following technology developments through manufacturer relationships.' }];


export const associatedCompanies = [
{
  name: 'Cybertec Computers Ltd',
  established: '1995',
  description:
  'Import and assembly of desktop computers marketed under the “Cybertec” brand, with field technical services including networking solutions added in 1999. Operates from a Colombo 10 office.'
},
{
  name: 'Prinrite Ltd',
  established: '1998',
  description: 'Printing and publishing company offering offset and letterpress printing, with press and office in Wattala.'
},
{
  name: 'Design Technologies',
  established: '1997',
  description:
  'Industrial electronics research and development company, with operational automation interfaces developed for industry. Office and production facility in Kalutara.'
},
{
  name: 'Sypro International (Pvt) Ltd',
  established: '2002',
  description: 'Energy management company established in collaboration with SYPRO Australia, operating from Colombo 02.'
}];


export const partnershipRoles = [
{
  title: 'Access to international expertise',
  description: 'Manufacturer relationships connect Cybertec to specialist knowledge developed by global technology companies.'
},
{
  title: 'Understanding technology developments',
  description: 'Ongoing exposure to manufacturer portfolios keeps the company informed of how network and broadcast technology is changing.'
},
{
  title: 'Specialist portfolio knowledge',
  description: 'Familiarity with specific product families, from distribution frames to broadcast transmitters.'
},
{
  title: 'Knowledge transfer',
  description: 'Product training at the factory or customer site, and technology presentations and seminars, delivered with experts from partner manufacturers.'
},
{
  title: 'Technology sourcing',
  description: 'Equipment supply through represented manufacturers, with ex-stock availability of popular equipment.'
}];


export const partnerBenefits: {title: string;description: string;accent: Accent;}[] = [
{
  title: 'Established local presence',
  description: 'A Sri Lankan technology company operating since 2000, with documented representation across Sri Lanka, the Maldives and Nepal.',
  accent: 'blue'
},
{
  title: 'Relationships with key institutions',
  description: 'Project experience with national operators, the national broadcaster, airports, utilities and government bodies.',
  accent: 'aqua'
},
{
  title: 'Engineering on the ground',
  description: 'Local design, installation, commissioning, maintenance and product training for the technology it represents.',
  accent: 'royal'
},
{
  title: 'Multi-sector reach',
  description: 'Active across telecommunications, broadcasting, enterprise networking, infrastructure and power systems.',
  accent: 'coral'
}];