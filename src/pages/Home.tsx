import React from 'react';
import { HomeHero } from '../components/home/HomeHero';
import { TrustStrip } from '../components/home/TrustStrip';
import { FeaturedPartnerships } from '../components/home/FeaturedPartnerships';
import { WhoWeAre } from '../components/home/WhoWeAre';
import { PartnerEcosystem } from '../components/home/PartnerEcosystem';
import { HistoryPreview } from '../components/home/HistoryPreview';
import { IndustryPresence } from '../components/home/IndustryPresence';
import { GlobalConnections } from '../components/home/GlobalConnections';
import { TechnologyAreasPreview } from '../components/home/TechnologyAreasPreview';
import { SelectedProjects } from '../components/home/SelectedProjects';
import { ClientsPreview } from '../components/home/ClientsPreview';
import { CapabilitiesPreview } from '../components/home/CapabilitiesPreview';
import { CorporateContact } from '../components/home/CorporateContact';
import { PartnerWithUs } from '../components/partners/PartnerWithUs';
import { usePageMeta, organizationSchema } from '../hooks/usePageMeta';

export function Home() {
  usePageMeta({
    title: 'Technology Company Sri Lanka - Global Technology Partnerships',
    description:
    'Cybertec Enterprises (Pvt) Ltd, established in 2000, is a Sri Lankan technology company with international manufacturer relationships and experience in telecommunications, broadcasting and enterprise networking.',
    path: '/',
    structuredData: organizationSchema
  });

  return (
    <>
      <HomeHero />
      <TrustStrip />
      <FeaturedPartnerships />
      <WhoWeAre />
      <PartnerEcosystem />
      <HistoryPreview />
      <IndustryPresence />
      <GlobalConnections />
      <TechnologyAreasPreview />
      <SelectedProjects />
      <ClientsPreview />
      <CapabilitiesPreview />
      <PartnerWithUs />
      <CorporateContact />
    </>);

}