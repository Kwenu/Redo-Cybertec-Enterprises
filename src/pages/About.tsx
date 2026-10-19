import React from "react";
import { PageHero } from "../components/ui/PageHero";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TextLink } from "../components/ui/TextLink";
import { Timeline } from "../components/company/Timeline";
import { EcosystemFlow } from "../components/company/EcosystemFlow";
import {
  associatedCompanies,
  company,
  corporateValues,
  enterpriseNetworks,
  identityPillars,
} from "../data/company";
import { milestones } from "../data/milestones";
import { media } from "../data/media";
import { accentStyles } from "../utils/accent";
import { usePageMeta } from "../hooks/usePageMeta";

const facts = [
  { label: "Registered name", value: company.name },
  { label: "Established", value: company.established },
  {
    label: "Head office",
    value: "No 10, St Joseph Place, Mabola, Wattala, Sri Lanka",
  },
  { label: "Documented markets", value: "Sri Lanka, Maldives and Nepal" },
  {
    label: "Team",
    value: "18 permanent staff and over 40 contracted technical staff",
  },
  {
    label: "Activities",
    value:
      "Equipment supply, technical services and engineering services for telcos",
  },
];

const flowSteps = [
  {
    title: "Global technology manufacturers",
    description:
      "International companies developing network and broadcast technology.",
  },
  {
    title: "International partnerships",
    description: "Representation and system integration relationships.",
  },
  {
    title: "Cybertec Enterprises",
    description: "Established in Sri Lanka in 2000.",
    highlight: true,
  },
  {
    title: "Local industry knowledge and technology experience",
    description: "Operators, broadcasters and institutions.",
  },
  {
    title: "Technology infrastructure and industry applications",
    description: "Networks, broadcast systems and infrastructure.",
  },
];

const companyAccents = ["iris", "royal", "aqua", "green"] as const;

export function About() {
  usePageMeta({
    title: "About Us - Company History Since 2000",
    description:
      "Who is Cybertec Enterprises? An established Sri Lankan technology company founded in 2000, with international manufacturer relationships and experience across telecommunications, broadcasting and enterprise networking.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        breadcrumb="About Us"
        title="An Established Technology Company Since 2000."
        description="Built on industry experience, international technology relationships, and a commitment to technology-driven infrastructure."
        image={media.aboutHero}
        imageAlt="Technicians reviewing network equipment beside a fibre patch panel cabinet"
      />

      <section
        className="bg-white py-20 lg:py-28"
        aria-labelledby="overview-title"
      >
        <div className="mx-auto grid max-w-site gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2
              id="overview-title"
              className="text-3xl font-medium tracking-tight text-navy-900 sm:text-[2.5rem] sm:leading-[1.15]"
            >
              Company overview
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/80">
              <p>
                Established in 2000, Cybertec Enterprises (Pvt) Ltd has
                developed experience across telecommunications, broadcasting,
                enterprise networking, and related technology infrastructure.
                The company brings together international technology
                relationships, local industry knowledge, and technical
                capabilities developed through its work in these areas.
              </p>
              <p>
                Cybertec was founded as a telecom and broadcasting solutions
                company. Equipment is supplied through the world-class
                principals it represents in Sri Lanka, Nepal and the Maldives,
                while engineering services such as installation, commissioning
                and maintenance are offered locally. Product training is
                delivered by experts from partner manufacturers, at the factory
                or at the customer site.
              </p>
              <p>
                Its documented work spans Sri Lanka Telecom, Airport & Aviation
                Services Sri Lanka, Sri Lanka Rupavahini Corporation, the Ceylon
                Electricity Board, Kotelawala Defence University, the Road
                Development Authority, Lanka Bell and the Ministry of Finance,
                Maldives.
              </p>
            </div>
          </div>
          <dl className="self-start border-t-2 border-royal-500 lg:col-span-4 lg:col-start-9">
            {facts.map((f) => (
              <div key={f.label} className="border-b border-line py-4">
                <dt className="text-xs text-muted">{f.label}</dt>
                <dd className="mt-1 text-[15px] font-medium text-navy-900">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="bg-surface py-20 lg:py-24"
        aria-labelledby="pillars-title"
      >
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="pillars-title"
            title="Corporate identity"
            description="Three characteristics define how Cybertec has developed as an organization."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {identityPillars.map((p) => {
              const a = accentStyles[p.accent];
              return (
                <div key={p.title} className="rounded-md bg-white p-7">
                  <span
                    className={`block h-1.5 w-10 rounded-full ${a.solid}`}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-lg font-semibold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/80">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-white py-20 lg:py-24"
        aria-labelledby="division-title"
      >
        <div className="mx-auto grid max-w-site items-center gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <div className="rounded-md bg-aqua-50 p-6">
              <img
                src={enterpriseNetworks.logo}
                alt="Cybertec Enterprise Networks logo"
                loading="lazy"
                className="mx-auto aspect-square w-full max-w-[280px] rounded object-contain mix-blend-multiply"
              />
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-sm font-medium text-aqua-700">Division</p>
            <h2
              id="division-title"
              className="mt-2 text-3xl font-medium tracking-tight text-navy-900"
            >
              {enterpriseNetworks.name}
            </h2>
            <p className="mt-2 text-[15px] font-medium text-aqua-700">
              {enterpriseNetworks.tagline}
            </p>
            <p className="mt-5 text-[17px] leading-relaxed text-ink/80">
              {enterpriseNetworks.description}
            </p>
            <div className="mt-8">
              <TextLink to="/industries#enterprise-networking">
                Enterprise networking experience
              </TextLink>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-surface py-20 lg:py-28"
        aria-labelledby="context-title"
      >
        <div className="mx-auto grid max-w-site items-center gap-14 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <h2
              id="context-title"
              className="text-3xl font-medium tracking-tight text-navy-900 sm:text-[2.5rem] sm:leading-[1.15]"
            >
              Where Global Technology Meets Local Industry Experience.
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink/80">
              <p>
                International manufacturers develop the technology that modern
                networks and broadcast systems rely on. Cybertec’s relationships
                with these manufacturers connect that technology to the
                organizations and infrastructure it serves locally.
              </p>
              <p>
                The company’s experience with Sri Lankan operators, broadcasters
                and institutions, together with its technical capabilities,
                allows it to understand how international technology applies to
                local requirements.
              </p>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              This diagram explains the company’s position. It does not describe
              a specific arrangement for every manufacturer or project.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <EcosystemFlow steps={flowSteps} />
          </div>
        </div>
      </section>

      <section
        id="history"
        className="bg-white py-20 lg:py-28"
        aria-labelledby="timeline-title"
      >
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="timeline-title"
            title="Company history"
            description="Documented milestones in the development of Cybertec and its associated companies. Further milestones are added as they are verified."
          />

          <div className="mt-16">
            <Timeline milestones={milestones} />
          </div>
        </div>
      </section>

      <section
        className="bg-surface py-20 lg:py-24"
        aria-labelledby="associated-title"
      >
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="associated-title"
            title="Associated companies"
            description="Companies presented alongside Cybertec Enterprises in its company information."
          />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {associatedCompanies.map((c, i) => {
              const a = accentStyles[companyAccents[i % companyAccents.length]];
              return (
                <li
                  key={c.name}
                  className="flex flex-col rounded-md bg-white p-6"
                >
                  <span
                    className={`self-start rounded-sm px-2 py-0.5 text-xs font-semibold ${a.soft} ${a.text}`}
                  >
                    Est. {c.established}
                  </span>
                  <h3 className="mt-4 text-[17px] font-semibold text-navy-900">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {c.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        className="bg-navy-900 py-20 text-white lg:py-24"
        aria-labelledby="values-title"
      >
        <div className="mx-auto max-w-site px-6 lg:px-8">
          <SectionHeading
            id="values-title"
            tone="dark"
            title="Corporate principles"
            description="The principles that guide how Cybertec works with partners, clients and project stakeholders."
          />

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {corporateValues.map((v) => (
              <li key={v.title} className="border-t border-white/15 pt-5">
                <h3 className="text-[15px] font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {v.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-14 flex flex-wrap gap-8">
            <TextLink to="/partners" tone="dark">
              Our global partners
            </TextLink>
            <TextLink to="/project-experience" tone="dark">
              Project experience
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
