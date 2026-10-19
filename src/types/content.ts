import type { LucideIcon } from 'lucide-react';
import type { Accent } from '../utils/accent';

export type IndustryId =
'telecommunications' |
'broadcasting' |
'enterprise-networking' |
'infrastructure' |
'energy-agriculture' |
'other';

export type MaturityStatus = 'established' | 'emerging';

/**
 * agreement = signed agreement recorded
 * documented = representation recorded in company information, current status to be confirmed
 * project = manufacturer whose technology Cybertec supplied in a documented project
 * listed = shown among partners on the company website
 */
export type RelationshipStatus = 'agreement' | 'documented' | 'project' | 'listed';

export interface PartnerCategory {
  id: IndustryId;
  name: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  category: IndustryId;
  country?: string;
  focus: string;
  description: string;
  relationship: string;
  status: RelationshipStatus;
  markets?: string;
  applications: string[];
  technologies: string[];
  industryIds: IndustryId[];
  projectIds: string[];
  website?: string;
  logoUrl?: string;
  featured?: boolean;
  verificationNote?: string;
}

export interface Industry {
  id: IndustryId;
  name: string;
  tagline?: string;
  summary: string;
  overview: string;
  experience: string;
  technologies: string[];
  status: MaturityStatus;
  accent: Accent;
  image?: string;
  imageAlt?: string;
  partnerIds: string[];
  projectIds: string[];
}

export interface Project {
  id: string;
  title: string;
  organization: string;
  industryId: IndustryId;
  technology: string;
  date?: string;
  overview: string;
  role: string;
  partnerIds: string[];
  verified: boolean;
  verificationNote?: string;
  featured?: boolean;
  recent?: boolean;
  image?: string;
  imageAlt?: string;
  imageNote?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  kind: 'group' | 'company' | 'project' | 'placeholder';
  projectId?: string;
}

export interface TechnologyArea {
  id: string;
  name: string;
  summary: string;
  items: string[];
  status: MaturityStatus;
  industryId: IndustryId;
  partnerIds: string[];
}

export interface Capability {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface Organization {
  id: string;
  name: string;
  type: 'client' | 'stakeholder';
  sector: string;
  description: string;
  projectIds: string[];
  logoUrl?: string;
  verificationNote?: string;
}

export interface NavChild {
  label: string;
  to: string;
  description?: string;
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavChild[];
}