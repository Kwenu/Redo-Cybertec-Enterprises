import { partners } from '../data/partners';
import { projects } from '../data/projects';
import { industries } from '../data/industries';
import type { IndustryId, Partner, Project, Industry } from '../types/content';

export function getPartners(ids: string[]): Partner[] {
  return ids.map((id) => partners.find((p) => p.id === id)).filter((p): p is Partner => Boolean(p));
}

export function getProjects(ids: string[]): Project[] {
  return ids.map((id) => projects.find((p) => p.id === id)).filter((p): p is Project => Boolean(p));
}

export function getIndustry(id: IndustryId): Industry | undefined {
  return industries.find((i) => i.id === id);
}

export function industryName(id: IndustryId): string {
  return getIndustry(id)?.name ?? 'Technology';
}