import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import CSClassLayout from "@/components/layouts/CSClassLayout";

import PortfolioHome from "@/pages/portfolio/Home";
import Experience from "@/pages/portfolio/Experience";
import Education from "@/pages/portfolio/Education";
import Awards from "@/pages/portfolio/Awards";
import Projects from "@/pages/portfolio/Projects";
import Error from "@/components/portfolio/Error";

import CVHome from "@/pages/cv/Home";

import CSClassHome from "@/pages/cs-class/Home";
import CSClassLogin from "@/pages/cs-class/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio Routes (with shared layout) */}
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

        {/* CS Class Routes (with Auth and User contexts) */}
        <Route element={<CSClassLayout />}>
          <Route path="/cs-class" element={<CSClassHome />} />
          <Route path="/cs-class/login" element={<CSClassLogin />} />
        </Route>

        {/* CV Routes */}
        <Route path="/cv" element={<CVHome />} />

        {/* Catch-all Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
