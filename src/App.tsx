import PortfolioLayout from "@/components/layouts/PortfolioLayout";

import PortfolioHome from "@/pages/portfolio/Home";
import Experience from "@/pages/portfolio/Experience";
import Education from "@/pages/portfolio/Education";
import Awards from "@/pages/portfolio/Awards";
import Projects from "@/pages/portfolio/Projects";
import Error from "@/components/portfolio/Error";

import CVHome from "@/pages/cv/Home";

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

        {/* CV Routes */}
        <Route path="/cv" element={<CVHome />} />

        {/* Catch-all Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
