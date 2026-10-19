import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { GlobalPartners } from "./pages/GlobalPartners";
import { Industries } from "./pages/Industries";
import { TechnologyPortfolio } from "./pages/TechnologyPortfolio";
import { SolutionsCapabilities } from "./pages/SolutionsCapabilities";
import { ProjectExperience } from "./pages/ProjectExperience";
import { MajorClients } from "./pages/MajorClients";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<GlobalPartners />} />
            <Route path="/industries" element={<Industries />} />
            <Route
              path="/technology-portfolio"
              element={<TechnologyPortfolio />}
            />
            <Route
              path="/solutions-capabilities"
              element={<SolutionsCapabilities />}
            />
            <Route path="/project-experience" element={<ProjectExperience />} />
            <Route path="/major-clients" element={<MajorClients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}
