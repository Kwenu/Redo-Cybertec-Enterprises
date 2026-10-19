import type { Partner, PartnerCategory, RelationshipStatus } from '../types/content';

export const partnerCategories: PartnerCategory[] = [
{
  id: 'telecommunications',
  name: 'Telecommunications',
  description: 'Copper and fibre connectivity, optical cable, access networks and passive network components.'
},
{
  id: 'broadcasting',
  name: 'Broadcasting',
  description: 'Transmitters, compression, video delivery and service-provider video technology.'
},
{
  id: 'enterprise-networking',
  name: 'Enterprise Networking',
  description: 'Networking, security and data infrastructure for organizations and operators.'
},
{
  id: 'infrastructure',
  name: 'Infrastructure',
  description: 'Protection of power, telecommunication and railway infrastructure.'
},
{
  id: 'other',
  name: 'Other Technology Areas',
  description: 'Fibre optic test and measurement technology.'
}];


export const relationshipStatusLabels: Record<RelationshipStatus, {label: string;description: string;}> = {
  agreement: {
    label: 'Recorded agreement',
    description: 'A signed agreement is recorded in Cybertec’s company information.'
  },
  documented: {
    label: 'Documented representation',
    description: 'Representation is documented in Cybertec’s company information. Current status to be confirmed.'
  },
  project: {
    label: 'Project technology',
    description: 'Manufacturer whose technology Cybertec supplied in a documented project.'
  },
  listed: {
    label: 'Listed partner',
    description: 'Listed among Cybertec’s technology partners on the company website.'
  }
};

export const partners: Partner[] = [
{
  id: 'huawei',
  name: 'Huawei',
  category: 'enterprise-networking',
  focus: 'Networking and ICT infrastructure',
  description:
  'Huawei is a global provider of information and communications technology infrastructure, including networking and telecommunications systems.',
  relationship: 'Cybertec signed an agreement as a listed System Integrator for Huawei in Sri Lanka.',
  status: 'agreement',
  markets: 'Sri Lanka',
  applications: ['Enterprise network infrastructure', 'System integration'],
  technologies: ['Networking and ICT infrastructure'],
  industryIds: ['enterprise-networking', 'telecommunications'],
  projectIds: [],
  featured: true
},
{
  id: 'sterlite',
  name: 'Sterlite Optical Technologies',
  category: 'telecommunications',
  country: 'India',
  focus: 'Optical fibre cable',
  description:
  'Sterlite Optical Technologies is an India-based manufacturer of optical fibre and fibre optic cable for telecommunications networks.',
  relationship:
  'Representation of Sterlite in Sri Lanka is documented in Cybertec’s company information, which also records the supply of fibre optic cable for Sri Lanka Telecom’s fibre optic ring and sub-rings.',
  status: 'documented',
  markets: 'Sri Lanka',
  applications: ['National fibre optic backbone', 'Telecom operator networks'],
  technologies: ['Optical fibre', 'Fibre optic cable'],
  industryIds: ['telecommunications'],
  projectIds: [],
  featured: true,
  verificationNote: 'Market-share figures stated on the previous website are not reproduced pending verification.'
},
{
  id: 'krone',
  name: 'KRONE',
  category: 'telecommunications',
  country: 'American / German company',
  focus: 'Copper and fibre network connectivity',
  description:
  'KRONE, historically part of ADC, developed copper and fibre network connectivity and distribution frame technology used in telecommunications exchanges and communications complexes.',
  relationship:
  'Cybertec’s company information documents the representation of ADC KRONE in the Sri Lanka, Maldives and Nepal markets. KRONE equipment was used in Cybertec’s turnkey MDF solution at Katunayake International Airport.',
  status: 'documented',
  markets: 'Sri Lanka, Maldives and Nepal',
  applications: ['Main distribution frames (MDF)', 'Digital signal cross-connect', 'Communications complexes'],
  technologies: ['Copper connectivity', 'Fibre connectivity', 'DSX-1 cross-connect'],
  industryIds: ['telecommunications', 'infrastructure'],
  projectIds: ['kia-mdf', 'lanka-bell-dsx'],
  featured: true,
  verificationNote: 'Exclusivity and current status to be confirmed before publication.'
},
{
  id: 'commscope',
  name: 'CommScope',
  category: 'telecommunications',
  focus: 'Network connectivity infrastructure',
  description:
  'CommScope develops connectivity infrastructure for communications networks around the world, supporting network operators and enterprises.',
  relationship:
  'Listed among Cybertec’s technology partners. Cybertec supplies CommScope fibre network accessories to the Road Development Authority.',
  status: 'listed',
  applications: ['Operator network connectivity', 'Enterprise connectivity', 'Fibre network accessories'],
  technologies: ['Fibre and copper connectivity'],
  industryIds: ['telecommunications', 'enterprise-networking'],
  projectIds: ['rda-commscope']
},
{
  id: 'te-connectivity',
  name: 'TE Connectivity',
  category: 'telecommunications',
  focus: 'Telecom network products',
  description:
  'TE Connectivity’s telecom networks business develops, manufactures and supplies telecommunication products that seal, connect and protect telecom networks.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Telecom network connectivity', 'Network sealing and protection'],
  technologies: ['Connectivity', 'Sealing and protection'],
  industryIds: ['telecommunications'],
  projectIds: []
},
{
  id: 'fujikura',
  name: 'Fujikura',
  category: 'telecommunications',
  focus: 'Optical fibre technology',
  description: 'Manufacturer description pending verification.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Fibre optic networks'],
  technologies: ['Optical fibre'],
  industryIds: ['telecommunications'],
  projectIds: [],
  verificationNote:
  'The previous website entry for this partner described a different manufacturer. A verified description is required.'
},
{
  id: 'lg-ericsson',
  name: 'LG-Ericsson',
  category: 'telecommunications',
  focus: 'Access network solutions',
  description:
  'LG-Ericsson combined network convergence technologies to provide connectivity for access network applications and solutions.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Access networks'],
  technologies: ['Network convergence', 'Access network equipment'],
  industryIds: ['telecommunications'],
  projectIds: [],
  verificationNote: 'Relationship may be historical. Current status to be confirmed.'
},
{
  id: 'cyberlink',
  name: 'CyberLink',
  category: 'telecommunications',
  focus: 'Passive optical network accessories',
  description: 'CyberLink provides passive optical network (PON) accessories.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Fibre-to-the-home and PON deployments'],
  technologies: ['PON accessories'],
  industryIds: ['telecommunications'],
  projectIds: []
},
{
  id: 'cisco',
  name: 'Cisco',
  category: 'enterprise-networking',
  focus: 'Networking, security and computing',
  description:
  'Cisco is a worldwide technology company working across software, networking, security and computing.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Enterprise networks', 'Network security'],
  technologies: ['Networking', 'Security', 'Computing'],
  industryIds: ['enterprise-networking'],
  projectIds: []
},
{
  id: 'scientific-atlanta',
  name: 'Scientific Atlanta',
  category: 'broadcasting',
  focus: 'Video and broadcasting',
  description: 'Scientific Atlanta, a Cisco company, developed video and broadcasting technology.',
  relationship:
  'Cybertec’s company information documents the representation of Cisco BV in Sri Lanka, Maldives and Nepal.',
  status: 'documented',
  markets: 'Sri Lanka, Maldives and Nepal',
  applications: ['Broadcast video', 'Cable and video networks'],
  technologies: ['Video and broadcast systems'],
  industryIds: ['broadcasting'],
  projectIds: [],
  verificationNote: 'Exclusivity and current status to be confirmed before publication.'
},
{
  id: 'gatesair',
  name: 'GatesAir',
  category: 'broadcasting',
  focus: 'Broadcast transmitters',
  description: 'GatesAir develops over-the-air broadcast transmission technology, including television and radio transmitters.',
  relationship:
  'Cybertec supplies GatesAir VHF TV transmitters, with training, to Sri Lanka Rupavahini Corporation.',
  status: 'project',
  applications: ['National television broadcasting', 'Terrestrial transmission'],
  technologies: ['VHF TV transmitters'],
  industryIds: ['broadcasting'],
  projectIds: ['slrc-vhf-transmitters']
},
{
  id: 'harmonic',
  name: 'Harmonic',
  category: 'broadcasting',
  focus: 'Video compression and delivery',
  description: 'Harmonic develops video compression and delivery technology for broadcasters and service providers.',
  relationship:
  'Harmonic equipment was used in Cybertec’s content compression and distribution project for Sri Lanka Rupavahini Corporation.',
  status: 'project',
  applications: ['Broadcast content compression', 'Content distribution'],
  technologies: ['Video encoders and compression'],
  industryIds: ['broadcasting'],
  projectIds: ['slrc-compression']
},
{
  id: 'imagine',
  name: 'Imagine Communications',
  category: 'broadcasting',
  focus: 'Television and video delivery',
  description:
  'Imagine Communications provides strategies and technology that help broadcasters and media organizations keep pace with change in television.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Television broadcasting', 'Media delivery'],
  technologies: ['Broadcast and video delivery'],
  industryIds: ['broadcasting'],
  projectIds: []
},
{
  id: 'ateme',
  name: 'ATEME',
  category: 'broadcasting',
  focus: 'Video delivery',
  description: 'ATEME offers integrated solutions for video delivery.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Video delivery', 'Broadcast and streaming'],
  technologies: ['Video compression and delivery'],
  industryIds: ['broadcasting'],
  projectIds: []
},
{
  id: 'synamedia',
  name: 'Synamedia',
  category: 'broadcasting',
  focus: 'Service provider video software',
  description: 'Synamedia develops Service Provider Video Software Solutions (SPVSS).',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Pay-TV and service-provider video'],
  technologies: ['Video software'],
  industryIds: ['broadcasting'],
  projectIds: []
},
{
  id: 'sankosha',
  name: 'Sankosha',
  category: 'infrastructure',
  country: 'Japan',
  focus: 'Lightning and surge protection',
  description:
  'Sankosha’s mission is to protect the infrastructure of society — electric power, telecommunication and railway networks — from lightning and other natural disasters.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Telecommunication networks', 'Power networks', 'Railway networks'],
  technologies: ['Lightning protection', 'Surge protection'],
  industryIds: ['infrastructure', 'telecommunications'],
  projectIds: []
},
{
  id: 'shinewaytech',
  name: 'ShinewayTech',
  category: 'other',
  focus: 'Fibre optic test equipment',
  description:
  'Starting in 2002 with fibre optic testers, ShinewayTech has expanded its portfolio into RF and IP testing.',
  relationship: 'Listed among Cybertec’s technology partners.',
  status: 'listed',
  applications: ['Fibre network testing', 'RF and IP testing'],
  technologies: ['Fibre optic test equipment'],
  industryIds: ['other', 'telecommunications'],
  projectIds: []
}];