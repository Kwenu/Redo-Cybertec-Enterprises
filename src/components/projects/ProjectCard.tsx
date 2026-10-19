import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { VerificationNote } from '../ui/VerificationNote';
import { getIndustry, getPartners, industryName } from '../../utils/lookup';
import { accentStyles } from '../../utils/accent';
import type { Project } from '../../types/content';

interface ProjectCardProps {
  project: Project;
  linked?: boolean;
}

export function ProjectCard({ project, linked = false }: ProjectCardProps) {
  const relatedPartners = getPartners(project.partnerIds);
  const a = accentStyles[getIndustry(project.industryId)?.accent ?? 'blue'];

  const body =
  <>
      {project.image &&
    <div className="relative aspect-[5/4] overflow-hidden bg-surface">
          <img
        src={project.image}
        alt={project.imageAlt ?? project.title}
        loading="lazy"
        className="h-full w-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.02]" />
      
          {project.recent &&
      <span className="absolute left-3 top-3 rounded-sm bg-brand-600 px-2 py-0.5 text-[11px] font-semibold text-white">
              Recent
            </span>
      }
        </div>
    }
      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <p className="flex flex-wrap items-center gap-2 text-xs font-medium">
          <span className={`rounded-sm px-2 py-0.5 ${a.softer} ${a.text}`}>{industryName(project.industryId)}</span>
          {project.date && <span className="text-muted">{project.date}</span>}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-navy-900">{project.title}</h3>
        <p className="mt-1.5 text-sm font-medium text-brand-700">{project.organization}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{project.overview}</p>

        <div className="mt-auto pt-6">
          <div className="border-t border-line pt-4">
            <p className="text-xs font-semibold text-navy-900">Cybertec’s documented role</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/80">{project.role}</p>
            {(project.verificationNote || project.imageNote) &&
          <div className="mt-3 space-y-1">
                {project.verificationNote && <VerificationNote>{project.verificationNote}</VerificationNote>}
                {project.imageNote && <VerificationNote>{project.imageNote}</VerificationNote>}
              </div>
          }
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-sm bg-surface px-2 py-1 text-xs text-muted">{project.technology}</span>
            {!linked &&
          relatedPartners.map((p) =>
          <Link
            key={p.id}
            to={`/partners#${p.id}`}
            className="rounded-sm border border-line px-2 py-1 text-xs font-medium text-navy-900 transition-colors duration-150 hover:border-navy-900">
            
                  Partner: {p.name}
                </Link>
          )}
            {linked &&
          <span className={`ml-auto inline-flex items-center gap-1 text-sm font-semibold ${a.text}`}>
                Read more
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
          }
          </div>
        </div>
      </div>
    </>;


  if (linked) {
    return (
      <Link
        to={`/project-experience#${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white transition-colors duration-150 hover:border-navy-600">
        
        {body}
      </Link>);

  }

  return (
    <article id={project.id} className="flex h-full flex-col overflow-hidden rounded-md border border-line bg-white">
      {body}
    </article>);

}