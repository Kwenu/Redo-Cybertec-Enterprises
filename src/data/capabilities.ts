import {
  CompassIcon,
  WrenchIcon,
  GaugeIcon,
  ShieldCheckIcon,
  HeadsetIcon,
  NetworkIcon,
  GraduationCapIcon,
  PresentationIcon } from
'lucide-react';
import type { Capability } from '../types/content';

export const capabilities: Capability[] = [
{
  id: 'design',
  name: 'System design',
  description: 'Design of turnkey solutions such as main distribution frames for communications complexes.',
  icon: CompassIcon
},
{
  id: 'installation',
  name: 'Installation',
  description: 'Installation services offered for the equipment Cybertec supplies.',
  icon: WrenchIcon
},
{
  id: 'commissioning',
  name: 'Commissioning',
  description: 'Commissioning of installed systems for telecom operators and broadcasters.',
  icon: GaugeIcon
},
{
  id: 'maintenance',
  name: 'Maintenance',
  description: 'Ongoing maintenance of supplied and installed infrastructure.',
  icon: ShieldCheckIcon
},
{
  id: 'support',
  name: 'Technical support',
  description: 'Engineering services for telcos and broadcasters after deployment.',
  icon: HeadsetIcon
},
{
  id: 'infrastructure',
  name: 'Network & infrastructure implementation',
  description: 'Infrastructure development, from base station sites to cross-connect arrangements.',
  icon: NetworkIcon
}];


export const knowledgeTransfer: Capability[] = [
{
  id: 'training',
  name: 'Product training',
  description: 'Training delivered at the factory or customer site by experts from partner manufacturers.',
  icon: GraduationCapIcon
},
{
  id: 'seminars',
  name: 'Technology presentations',
  description: 'Presentations and seminars on technology developments across Cybertec’s sectors.',
  icon: PresentationIcon
}];


export const processSteps = [
{ title: 'Technology knowledge', description: 'Understanding of the technology domain and manufacturer portfolio.' },
{ title: 'Technical planning', description: 'Design of the solution around the site and network requirements.' },
{ title: 'Implementation', description: 'Supply, installation and infrastructure development.' },
{ title: 'Commissioning', description: 'Testing and bringing systems into service.' },
{ title: 'Ongoing support', description: 'Maintenance and technical support after deployment.' }];