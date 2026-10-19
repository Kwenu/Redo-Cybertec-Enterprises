import { media } from './media';
import type { Project } from '../types/content';

export const projects: Project[] = [
{
  id: 'aasl-ip-upgrade',
  title: 'IP Communication System Upgrade',
  organization: 'Airport & Aviation Services (Sri Lanka) (Private) Limited',
  industryId: 'enterprise-networking',
  technology: 'IP communication systems',
  overview:
  'Completion of an IP communication system upgrade for Airport & Aviation Services Sri Lanka, delivered by Cybertec Enterprise Networks.',
  role: 'Completed the IP communication system upgrade.',
  partnerIds: [],
  verified: true,
  featured: true,
  recent: true,
  image: media.aaslIpUpgrade,
  imageAlt: 'Announcement: Cybertec completes IP communication system upgrade for AASL'
},
{
  id: 'ceb-colombo-city',
  title: 'Ethernet Switches and Routers for CEB Colombo City',
  organization: 'Ceylon Electricity Board (CEB), Colombo City',
  industryId: 'enterprise-networking',
  technology: 'Ethernet switching and routing',
  overview:
  'Enterprise network infrastructure for CEB Colombo City, covering Ethernet switches and routers across the city office cluster.',
  role: 'Design, supply, training, installation and commissioning of Ethernet switches and routers.',
  partnerIds: [],
  verified: true,
  featured: true,
  recent: true,
  image: media.cebColombo,
  imageAlt: 'Announcement: Cybertec completes Ethernet switches and routers work for CEB Colombo City'
},
{
  id: 'kdu-core-upgrade',
  title: 'Network Core Upgrade',
  organization: 'General Sir John Kotelawala Defence University (KDU)',
  industryId: 'enterprise-networking',
  technology: 'Core network switching',
  overview: 'A core network upgrade for Kotelawala Defence University, delivered by Cybertec Enterprise Networks.',
  role: 'Network core upgrade.',
  partnerIds: [],
  verified: true,
  featured: true,
  recent: true,
  image: media.kduCoreUpgrade,
  imageAlt: 'Announcement: Network upgrade at Kotelawala Defence University'
},
{
  id: 'slrc-vhf-transmitters',
  title: 'VHF TV Transmitters for the National Broadcaster',
  organization: 'Sri Lanka Rupavahini Corporation',
  industryId: 'broadcasting',
  technology: 'VHF television transmission',
  overview: 'Supply of GatesAir VHF TV transmitters to Sri Lanka’s national broadcaster, with associated training.',
  role: 'Supply and training.',
  partnerIds: ['gatesair'],
  verified: true,
  featured: true,
  recent: true,
  image: media.gatesairVhf,
  imageAlt: 'Announcement: Cybertec to supply and provide training for GatesAir VHF TV transmitters to Rupavahini'
},
{
  id: 'slrc-compression',
  title: 'Content Compression & Distribution Project',
  organization: 'Sri Lanka Rupavahini Corporation',
  industryId: 'broadcasting',
  technology: 'Video compression and distribution',
  overview: 'A content compression and distribution project for SLRC using Harmonic broadcast equipment.',
  role: 'Successfully completed the content compression and distribution project.',
  partnerIds: ['harmonic'],
  verified: true,
  featured: true,
  recent: true,
  image: media.slrcCompression,
  imageAlt: 'Announcement: Cybertec completes content compression and distribution project for SLRC'
},
{
  id: 'rda-commscope',
  title: 'CommScope Fibre Network Accessories',
  organization: 'Road Development Authority',
  industryId: 'telecommunications',
  technology: 'Fibre network accessories',
  overview: 'Supply of CommScope fibre network accessories to the Road Development Authority of Sri Lanka.',
  role: 'Supply of CommScope fibre network accessories.',
  partnerIds: ['commscope'],
  verified: true,
  featured: true,
  recent: true,
  image: media.rdaCommscope,
  imageAlt: 'Announcement: Cybertec supplying CommScope fibre network accessories to the Road Development Authority'
},
{
  id: 'slt-fibre-accessories',
  title: 'Fibre Optic Accessories Supply Contract',
  organization: 'Sri Lanka Telecom (SLT-Mobitel)',
  industryId: 'telecommunications',
  technology: 'Fibre optic accessories',
  overview: 'Sri Lanka Telecom contracted Cybertec for the supply of fibre optic accessories over a one-year period.',
  role: 'One-year supply of fibre optic accessories.',
  partnerIds: [],
  verified: true,
  recent: true,
  image: media.sltFibreAccessories,
  imageAlt: 'Announcement: Sri Lanka Telecom contracts Cybertec for supply of fibre optic accessories'
},
{
  id: 'mattala-high-mast',
  title: 'High Mast Systems Upgrade, Mattala Rajapaksa International Airport',
  organization: 'Mattala Rajapaksa International Airport',
  industryId: 'infrastructure',
  technology: 'Airport high mast systems',
  overview: 'A contract to upgrade the high mast systems at Mattala Rajapaksa International Airport.',
  role: 'Contract secured for the high mast systems upgrade.',
  partnerIds: [],
  verified: true,
  recent: true,
  image: media.mattalaHighMast,
  imageAlt: 'Announcement: Cybertec secures contract to upgrade high mast systems at Mattala Rajapaksa International Airport',
  imageNote: 'Illustrative announcement image.'
},
{
  id: 'load-bank-testers',
  title: 'Mobile 624 kVA Load Bank Testers',
  organization: 'Government sector',
  industryId: 'energy-agriculture',
  technology: 'Power testing systems',
  overview: 'An agreement to supply mobile 624 kVA load bank testers for on-site power testing in the government sector.',
  role: 'Supply, installation and commissioning.',
  partnerIds: [],
  verified: true,
  recent: true,
  image: media.loadBankTesters,
  imageAlt: 'Announcement: Cybertec signs agreement to supply, install and commission mobile 624 kVA load bank testers'
},
{
  id: 'aasl-fibre-odf',
  title: 'Optical Distribution Frame & Fibre Cabling',
  organization: 'Airport & Aviation Services (Sri Lanka) (Private) Limited',
  industryId: 'infrastructure',
  technology: 'Optical distribution frame and fibre cable',
  overview: 'On-site optical distribution frame installation and fibre optic cable laying for AASL.',
  role: 'Optical distribution frame and fibre cabling works.',
  partnerIds: [],
  verified: true,
  recent: true,
  image: media.aaslFibreSite,
  imageAlt: 'Optical distribution frame and fibre optic cable drum on site at AASL',
  verificationNote: 'Description based on project site photographs; scope to be confirmed.'
},
{
  id: 'kia-mdf',
  title: 'Turnkey MDF Solution, Katunayake International Airport',
  organization: 'Airport & Aviation Services Sri Lanka',
  industryId: 'infrastructure',
  technology: 'Main distribution frame (MDF)',
  date: 'December 2008',
  overview:
  'A turnkey main distribution frame solution for the Katunayake International Airport (KIA) expansion project at the airport’s communications complex.',
  role: 'Design, supply and installation. Completed using KRONE equipment.',
  partnerIds: ['krone'],
  verified: true
},
{
  id: 'slt-ngn',
  title: 'NGN Network Phase III B & III C',
  organization: 'Sri Lanka Telecom',
  industryId: 'telecommunications',
  technology: 'MDF solutions for next-generation network',
  date: 'January 2011',
  overview:
  'Sri Lanka Telecom awarded Cybertec the supply of MDF solutions for its flagship Next Generation Network project, Phase III B and III C.',
  role: 'Supply of MDF solutions.',
  partnerIds: [],
  verified: true
},
{
  id: 'lanka-bell-bts',
  title: 'Turnkey Base Station Sites',
  organization: 'Lanka Bell',
  industryId: 'telecommunications',
  technology: 'Base station site infrastructure',
  overview:
  'Standalone base station sites at 70 m and 50 m, alongside a turnkey contract for equipment shelters, delivered by Cybertec’s Tele-Infrastructure Division.',
  role:
  '28 sites including design, manufacture, supply, excavation, tower foundation, tower erection and site development; supply and installation of 20 equipment shelters.',
  partnerIds: [],
  verified: true
},
{
  id: 'lanka-bell-dsx',
  title: 'Digital Signal Cross-Connect',
  organization: 'Lanka Bell',
  industryId: 'telecommunications',
  technology: 'DSX-1 digital signal cross-connect',
  overview:
  'Cross-connect and interconnect arrangements for testing, jumpering and real-time monitoring of the transmission network at Lanka Bell’s radio transmission backhaul hub.',
  role: 'Set up ADC DSX-1 digital signal cross-connect and interconnect arrangements.',
  partnerIds: ['krone'],
  verified: true
},
{
  id: 'mbc-fibre',
  title: 'Digital Video/Audio Transport Network over Fibre Optics',
  organization: 'Sri Lanka Telecom / MBC Networks',
  industryId: 'broadcasting',
  technology: 'Digital audio/video transport',
  overview:
  'Broadcast-quality digital audio and video transmission over optical fibre, interconnecting MTV/MBC studios, transmission stations and head office in Colombo.',
  role: 'Recorded in Cybertec’s project experience in association with Sri Lanka Telecom.',
  partnerIds: [],
  verified: true,
  verificationNote: 'Cybertec’s specific scope to be confirmed from company records.'
},
{
  id: 'saf-sdi',
  title: 'SDI Video Network for the 10th South Asian Games',
  organization: 'Sri Lanka Telecom / Sri Lanka Rupavahini Corporation',
  industryId: 'broadcasting',
  technology: 'SDI video over optical fibre',
  overview:
  'An optical fibre based SDI video network linking the games venue to Sri Lanka Rupavahini Corporation studios for the live telecast of the 10th South Asian Games.',
  role: 'Recorded in Cybertec’s project experience in association with Sri Lanka Telecom.',
  partnerIds: [],
  verified: true,
  verificationNote: 'Cybertec’s specific scope to be confirmed from company records.'
},
{
  id: 'maldives-nic',
  title: 'National Identity Card Project, Maldives',
  organization: 'Ministry of Finance, Maldives',
  industryId: 'other',
  technology: 'Secure identity card systems',
  overview:
  'A five-year contract for the Maldives National Identity Card, featuring a smart chip and holographic overlay.',
  role: 'Implementation, maintenance and supply of all equipment and consumables.',
  partnerIds: [],
  verified: true
}];