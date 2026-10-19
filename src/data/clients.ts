import type { Organization } from '../types/content';

export const organizations: Organization[] = [
{
  id: 'slt',
  name: 'Sri Lanka Telecom (SLT-Mobitel)',
  type: 'client',
  sector: 'Telecommunications',
  description: 'National telecommunications provider of Sri Lanka.',
  projectIds: ['slt-fibre-accessories', 'slt-ngn', 'mbc-fibre', 'saf-sdi']
},
{
  id: 'aasl',
  name: 'Airport & Aviation Services Sri Lanka',
  type: 'client',
  sector: 'Aviation',
  description: 'Operator of Sri Lanka’s international airports.',
  projectIds: ['aasl-ip-upgrade', 'aasl-fibre-odf', 'kia-mdf']
},
{
  id: 'slrc',
  name: 'Sri Lanka Rupavahini Corporation',
  type: 'client',
  sector: 'Broadcasting',
  description: 'Sri Lanka’s national television broadcaster.',
  projectIds: ['slrc-vhf-transmitters', 'slrc-compression']
},
{
  id: 'ceb',
  name: 'Ceylon Electricity Board',
  type: 'client',
  sector: 'Energy',
  description: 'National electricity utility; Colombo City network project.',
  projectIds: ['ceb-colombo-city']
},
{
  id: 'kdu',
  name: 'General Sir John Kotelawala Defence University',
  type: 'client',
  sector: 'Education',
  description: 'Defence university in Sri Lanka; network core upgrade.',
  projectIds: ['kdu-core-upgrade']
},
{
  id: 'rda',
  name: 'Road Development Authority',
  type: 'client',
  sector: 'Government',
  description: 'National authority for road development in Sri Lanka.',
  projectIds: ['rda-commscope']
},
{
  id: 'mattala',
  name: 'Mattala Rajapaksa International Airport',
  type: 'client',
  sector: 'Aviation',
  description: 'International airport in southern Sri Lanka.',
  projectIds: ['mattala-high-mast']
},
{
  id: 'lanka-bell',
  name: 'Lanka Bell',
  type: 'client',
  sector: 'Telecommunications',
  description: 'Fixed wireless telecom operator.',
  projectIds: ['lanka-bell-bts', 'lanka-bell-dsx']
},
{
  id: 'maldives-finance',
  name: 'Ministry of Finance, Maldives',
  type: 'client',
  sector: 'Government',
  description: 'Awarding authority for the Maldives National Identity Card contract.',
  projectIds: ['maldives-nic']
},
{
  id: 'mbc',
  name: 'MBC Networks',
  type: 'stakeholder',
  sector: 'Broadcasting',
  description: 'Broadcaster served by the fibre-based digital video/audio transport network.',
  projectIds: ['mbc-fibre']
}];