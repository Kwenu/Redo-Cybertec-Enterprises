import type { Milestone } from '../types/content';

export const milestones: Milestone[] = [
{
  year: '1995',
  title: 'Cybertec Computers Ltd established',
  description: 'An associated company importing and assembling desktop computers under the “Cybertec” brand.',
  kind: 'group'
},
{
  year: '2000',
  title: 'Cybertec Enterprises (Pvt) Ltd established',
  description:
  'Founded as a telecom and broadcasting solutions company, supplying equipment through represented manufacturers and offering engineering services locally.',
  kind: 'company'
},
{
  year: '2008',
  title: 'Katunayake International Airport MDF',
  description: 'Turnkey MDF solution for Airport & Aviation Services Sri Lanka, completed in December 2008.',
  kind: 'project',
  projectId: 'kia-mdf'
},
{
  year: '2011',
  title: 'Sri Lanka Telecom NGN Phase III',
  description: 'Awarded the supply of MDF solutions for NGN Phase III B & III C in January 2011.',
  kind: 'project',
  projectId: 'slt-ngn'
},
{
  year: 'Recent',
  title: 'Cybertec Enterprise Networks',
  description:
  'Enterprise network projects for AASL, CEB Colombo City and Kotelawala Defence University, alongside broadcast projects for Rupavahini.',
  kind: 'project',
  projectId: 'kdu-core-upgrade'
}];