import React from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/ui/PageHero";
import { industries } from "../data/industries";
import { getPartners, getProjects } from "../utils/lookup";
import { accentStyles } from "../utils/accent";
import { industryIcons } from "../utils/industryIcons";
import { usePageMeta } from "../hooks/usePageMeta";

export function Industries() {
  usePageMeta({
    title:
      "Industries — Telecommunications, Broadcasting & Enterprise Networking",
    description:
      "The industry sectors in which Cybertec Enterprises has documented experience: telecommunications, broadcasting, enterprise networking, infrastructure and power systems in Sri Lanka.",
    path: "/industries",
  });

  return (
    <>
      <PageHero
        breadcrumb="Industries"
        title="Technology Across Critical Industry Sectors."
        description="Where Cybertec has developed its experience, and the technology domains relevant to each sector."
      >
        <nav
          aria-label="Industries on this page"
          className="mt-10 flex flex-wrap gap-2"
        >
          {industries.map((i) => {
            const a = accentStyles[i.accent];
            return (
              <a
                key={i.id}
                href={`#${i.id}`}
                className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap rounded-sm border border-white/20 px-3.5 text-sm text-white/85 transition-colors duration-150 hover:border-white hover:text-white"
              >
                <span
                  className={`h-2 w-2 rounded-full ${a.solid}`}
                  aria-hidden="true"
                />
                {i.name}
              </a>
            );
          })}
        </nav>
      </PageHero>

      {industries.map((industry, index) => {
        const relatedPartners = getPartners(industry.partnerIds);
        const relatedProjects = getProjects(industry.projectIds);
        const reversed = index % 2 === 1;
        const a = accentStyles[industry.accent];
        const Icon = industryIcons[industry.id];
        return (
          <section
            key={industry.id}
            id={industry.id}
            aria-labelledby={`${industry.id}-title`}
            className={`py-20 lg:py-24 ${index % 2 === 0 ? "bg-white" : "bg-surface"}`}
          >
            <div className="mx-auto grid max-w-site items-start gap-12 px-6 lg:grid-cols-12 lg:px-8">
              <div
                className={`lg:col-span-5 ${reversed ? "lg:order-2 lg:col-start-8" : ""}`}
              >
                <div className={`overflow-hidden rounded-md p-3 ${a.soft}`}>
                  {industry.image ? (
                    <img
                      src={industry.image}
                      alt={industry.imageAlt ?? ""}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded object-cover"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] w-full items-center justify-center rounded bg-white">
                      <Icon
                        className={`h-20 w-20 ${a.text}`}
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`lg:col-span-6 ${reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-md ${a.solid} ${a.solidText}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2
                  id={`${industry.id}-title`}
                  className="mt-5 text-3xl font-medium tracking-tight text-navy-900"
                >
                  {industry.name}
                </h2>
                {industry.tagline && (
                  <p className={`mt-2 text-[15px] font-medium ${a.text}`}>
                    {industry.tagline}
                  </p>
                )}
                <p className="mt-5 text-[17px] leading-relaxed text-ink/80">
                  {industry.overview}
                </p>

                <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
                  <div className={`rounded-md p-5 sm:col-span-2 ${a.softer}`}>
                    <dt className={`text-xs font-semibold ${a.text}`}>
                      Documented experience
                    </dt>
                    <dd className="mt-2 text-[15px] leading-relaxed text-ink/85">
                      {industry.experience}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-navy-900">
                      Relevant technology areas
                    </dt>
                    <dd className="mt-2">
                      <ul className="space-y-1.5 text-sm text-ink/80">
                        {industry.technologies.map((t) => (
                          <li key={t} className="flex items-start gap-2">
                            <span
                              className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${a.solid}`}
                              aria-hidden="true"
                            />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-navy-900">
                      Related partners
                    </dt>
                    <dd className="mt-2">
                      {relatedPartners.length ? (
                        <ul className="space-y-1.5 text-sm">
                          {relatedPartners.map((p) => (
                            <li key={p.id}>
                              <Link
                                to={`/partners#${p.id}`}
                                className="text-brand-700 underline-offset-2 hover:underline"
                              >
                                {p.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-sm text-muted">
                          To be confirmed
                        </span>
                      )}
                    </dd>
                  </div>
                  {relatedProjects.length > 0 && (
                    <div className="sm:col-span-2">
                      <dt className="text-xs font-semibold text-navy-900">
                        Related projects
                      </dt>
                      <dd className="mt-2">
                        <ul className="space-y-1.5 text-sm">
                          {relatedProjects.map((p) => (
                            <li key={p.id}>
                              <Link
                                to={`/project-experience#${p.id}`}
                                className="text-brand-700 underline-offset-2 hover:underline"
                              >
                                {p.title} — {p.organization}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
