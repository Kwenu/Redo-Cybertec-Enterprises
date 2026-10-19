import { media } from './media';
import type { Industry } from '../types/content';

export const industries: Industry[] = [
{
  id: 'telecommunications',
  name: 'Telecommunications',
  tagline: 'Your Voice, Our Network, Limitless Possibilities.',
  summary: 'Network infrastructure, fibre connectivity and transmission for telecom operators.',
  overview:
  'Telecommunications has been central to Cybertec since its establishment as a telecom and broadcasting solutions company in 2000. Its documented work includes main distribution frame solutions, fibre optic accessories, base station site infrastructure and transmission cross-connect arrangements for Sri Lankan operators and institutions.',
  experience:
  'MDF solutions for Sri Lanka Telecom’s NGN Phase III, a one-year fibre optic accessories contract with SLT-Mobitel, CommScope fibre accessories for the Road Development Authority, and base station sites for Lanka Bell.',
  technologies: [
  'Main distribution frames',
  'Fibre optic cable and accessories',
  'Transmission cross-connect',
  'Base station infrastructure',
  'Passive optical networks'],

  status: 'established',
  accent: 'blue',
  image: media.industryTelecom,
  imageAlt: 'Fibre optic splice closure and fusion splicer on a technician’s workbench',
  partnerIds: ['krone', 'sterlite', 'commscope', 'te-connectivity', 'fujikura', 'lg-ericsson', 'cyberlink'],
  projectIds: ['slt-fibre-accessories', 'rda-commscope', 'slt-ngn', 'lanka-bell-bts', 'lanka-bell-dsx']
},
{
  id: 'broadcasting',
  name: 'Broadcasting',
  tagline: 'Tune In to a World of Endless Possibilities.',
  summary: 'Transmitters, compression and digital audio/video transport for broadcasters.',
  overview:
  'Broadcasting is the second founding sector of Cybertec. Its partner portfolio includes international broadcast technology manufacturers, and its documented work for Sri Lanka’s national broadcaster includes VHF TV transmitters and a content compression and distribution project.',
  experience:
  'GatesAir VHF TV transmitters with training and a Harmonic-based content compression and distribution project for Sri Lanka Rupavahini Corporation, alongside fibre-based video transport projects with Sri Lanka Telecom.',
  technologies: ['TV transmitters', 'Video compression and distribution', 'Digital audio/video transport', 'SDI video over fibre'],
  status: 'established',
  accent: 'coral',
  image: media.industryBroadcast,
  imageAlt: 'Television transmitter tower on a hilltop at dusk',
  partnerIds: ['gatesair', 'harmonic', 'scientific-atlanta', 'imagine', 'ateme', 'synamedia'],
  projectIds: ['slrc-vhf-transmitters', 'slrc-compression', 'mbc-fibre', 'saf-sdi']
},
{
  id: 'enterprise-networking',
  name: 'Enterprise Networking',
  tagline: 'Empowering Connections, Elevating Enterprise: Where Networking Meets Innovation.',
  summary: 'Core networks, switching, routing and IP communications for organizations.',
  overview:
  'Through Cybertec Enterprise Networks, the company delivers enterprise network infrastructure for public institutions, supported by relationships with networking manufacturers including a recorded System Integrator agreement with Huawei in Sri Lanka.',
  experience:
  'An IP communication system upgrade for AASL, Ethernet switches and routers for CEB Colombo City, and a network core upgrade for Kotelawala Defence University.',
  technologies: ['Core network upgrades', 'Ethernet switching and routing', 'IP communication systems', 'Fibre connectivity'],
  status: 'established',
  accent: 'aqua',
  image: media.industryEnterprise,
  imageAlt: 'Network operations room with a network topology display',
  partnerIds: ['huawei', 'cisco', 'commscope'],
  projectIds: ['aasl-ip-upgrade', 'ceb-colombo-city', 'kdu-core-upgrade']
},
{
  id: 'infrastructure',
  name: 'Infrastructure & Connectivity',
  summary: 'Airport, communications-complex and site infrastructure.',
  overview:
  'Communications networks rely on physical infrastructure: distribution frames and fibre in communications complexes, airport high mast systems, towers and equipment shelters at base station sites, and protection of network assets from lightning and surges.',
  experience:
  'A high mast systems upgrade contract at Mattala Rajapaksa International Airport, optical distribution frame and fibre works for AASL, and a turnkey MDF solution at Katunayake International Airport.',
  technologies: ['Airport high mast systems', 'Optical and main distribution frames', 'Towers and equipment shelters', 'Lightning and surge protection'],
  status: 'established',
  accent: 'iris',
  image: media.industryInfrastructure,
  imageAlt: 'Airport apron illuminated by high mast floodlight towers',
  partnerIds: ['sankosha', 'krone'],
  projectIds: ['mattala-high-mast', 'aasl-fibre-odf', 'kia-mdf', 'lanka-bell-bts']
},
{
  id: 'energy-agriculture',
  name: 'Energy & Power Systems',
  summary: 'Power testing systems, with solar and agricultural technology as a prospective area.',
  overview:
  'Cybertec’s documented energy activity includes the supply, installation and commissioning of mobile load bank testers for the government sector. Solar and agricultural technology remain a prospective area whose capability and partners are yet to be confirmed.',
  experience: 'An agreement to supply, install and commission mobile 624 kVA load bank testers for the government sector.',
  technologies: ['Load bank testing', 'Power systems', 'Solar technology (prospective)', 'Solar pumping and irrigation (prospective)'],
  status: 'established',
  accent: 'green',
  image: media.industryEnergy,
  imageAlt: 'Containerised load bank unit connected to electrical power equipment',
  partnerIds: [],
  projectIds: ['load-bank-testers']
},
{
  id: 'other',
  name: 'Other Technology Areas',
  summary: 'Documented activity beyond the core sectors.',
  overview:
  'Cybertec’s documented activity extends beyond its core sectors, including a national identity card programme for the Maldives and fibre optic test and measurement technology.',
  experience: 'A five-year contract for the National Identity Card of the Maldives with the Ministry of Finance, Maldives.',
  technologies: ['Secure identity card systems', 'Fibre optic test and measurement'],
  status: 'established',
  accent: 'royal',
  image: media.industryOther,
  imageAlt: 'A variety of different technology devices and systems',
  partnerIds: ['shinewaytech'],
  projectIds: ['maldives-nic']
}];