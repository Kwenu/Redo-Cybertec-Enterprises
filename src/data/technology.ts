import type { TechnologyArea } from '../types/content';

export const technologyAreas: TechnologyArea[] = [
{
  id: 'telecom-technology',
  name: 'Telecommunication Technology',
  summary: 'Infrastructure that carries voice and data across operator networks.',
  items: ['Network infrastructure', 'Fibre optic cable and accessories', 'Transmission technology', 'Communication infrastructure'],
  status: 'established',
  industryId: 'telecommunications',
  partnerIds: ['krone', 'sterlite', 'commscope', 'te-connectivity', 'fujikura', 'lg-ericsson', 'cyberlink']
},
{
  id: 'broadcast-technology',
  name: 'Broadcast Technology',
  summary: 'Systems that compress, transport and transmit broadcast-quality audio and video.',
  items: ['TV transmitters', 'Content compression and distribution', 'Digital audio/video transport', 'Fibre-based media transport'],
  status: 'established',
  industryId: 'broadcasting',
  partnerIds: ['gatesair', 'harmonic', 'scientific-atlanta', 'imagine', 'ateme', 'synamedia']
},
{
  id: 'enterprise-networking',
  name: 'Enterprise Networking',
  summary: 'Networks that connect people, systems and sites within organizations.',
  items: ['Core network upgrades', 'Ethernet switching and routing', 'IP communication systems', 'Data networking environments'],
  status: 'established',
  industryId: 'enterprise-networking',
  partnerIds: ['huawei', 'cisco']
},
{
  id: 'infrastructure-connectivity',
  name: 'Infrastructure & Connectivity',
  summary: 'Physical systems that house, connect, light and protect critical facilities.',
  items: ['Airport high mast systems', 'Optical and main distribution frames', 'Network-related infrastructure', 'Lightning protection'],
  status: 'established',
  industryId: 'infrastructure',
  partnerIds: ['sankosha']
},
{
  id: 'power-systems',
  name: 'Power & Energy Systems',
  summary: 'Equipment for testing and supporting electrical power systems.',
  items: ['Mobile load bank testers', 'On-site power testing', 'Energy-related systems'],
  status: 'established',
  industryId: 'energy-agriculture',
  partnerIds: []
},
{
  id: 'specialized',
  name: 'Other Specialized Technology',
  summary: 'Confirmed technology domains outside the core sectors.',
  items: ['Secure identity card systems', 'Fibre optic test and measurement'],
  status: 'established',
  industryId: 'other',
  partnerIds: ['shinewaytech']
},
{
  id: 'solar-agriculture',
  name: 'Solar & Agricultural Technology',
  summary: 'A prospective area. Capability and partners are yet to be confirmed.',
  items: ['Solar technology', 'Agricultural technology applications', 'Solar pumping and irrigation'],
  status: 'emerging',
  industryId: 'energy-agriculture',
  partnerIds: []
}];