import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { company } from "../../data/company";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Company History", to: "/about#history" },
  { label: "Global Partners", to: "/partners" },
  { label: "Industries", to: "/industries" },
  { label: "Major Clients", to: "/major-clients" },
];

const expertiseLinks = [
  { label: "Technology Portfolio", to: "/technology-portfolio" },
  { label: "Telecommunications", to: "/industries#telecommunications" },
  { label: "Broadcasting", to: "/industries#broadcasting" },
  { label: "Enterprise Networking", to: "/industries#enterprise-networking" },
  { label: "Project Experience", to: "/project-experience" },
  { label: "Solutions & Capabilities", to: "/solutions-capabilities" },
];

// Developer credit shown in the footer. Replace name/url with your company details.
const developer = {
  name: "Lingo",
  url: "https://wa.me/94754841586",
};

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white text-ink">
      <div className="grid h-1.5 grid-cols-5" aria-hidden="true">
        <span className="bg-navy-800" />
        <span className="bg-brand-600" />
        <span className="bg-aqua-500" />
        <span className="bg-coral-500" />
        <span className="bg-iris-500" />
      </div>
      <div className="mx-auto grid max-w-site gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            An established technology company connecting international
            manufacturer relationships with experience in telecommunications,
            broadcasting and enterprise networking.
          </p>
          <p className="mt-6 inline-flex rounded-sm bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700">
            Established {company.established}
          </p>
        </div>

        <FooterColumn
          title="Company"
          links={companyLinks}
          className="lg:col-span-2"
        />
        <FooterColumn
          title="Expertise"
          links={expertiseLinks}
          className="lg:col-span-3"
        />

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold text-navy-900">Contact</h2>
          <address className="mt-4 text-sm not-italic leading-relaxed text-muted">
            <span className="block font-medium text-navy-900">
              {company.name}
            </span>
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <ul className="mt-4 space-y-1.5 text-sm">
            {company.phones.map((p) => (
              <li key={p}>
                <a
                  href={`tel:${p.replace(/-/g, "")}`}
                  className="text-muted transition-colors duration-150 hover:text-brand-700"
                >
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${company.email}`}
                className="font-medium text-brand-700 transition-colors duration-150 hover:text-navy-900"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line bg-surface">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-6 py-6 text-xs text-muted lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>
            Partner and client names are shown for identification of documented
            relationships.
          </p>
          <p className="lg:whitespace-nowrap">
            Designed &amp; developed by{" "}
            {developer.url ? (
              <a
                href={developer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy-900 transition-colors duration-150 hover:text-brand-700"
              >
                {developer.name}
              </a>
            ) : (
              <span className="font-medium text-navy-900">
                {developer.name}
              </span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: { label: string; to: string }[];
  className?: string;
}

function FooterColumn({ title, links, className = "" }: FooterColumnProps) {
  return (
    <div className={className}>
      <h2 className="text-sm font-semibold text-navy-900">{title}</h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-muted transition-colors duration-150 hover:text-brand-700"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
