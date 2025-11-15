import Home from "@/pages/portfolio/Home";
import Experience from "@/pages/portfolio/Experience";
import Education from "@/pages/portfolio/Education";
import Awards from "@/pages/portfolio/Awards";
import Projects from "@/pages/portfolio/Projects";
import CV from "@/pages/portfolio/CV";
import Error from "@/components/portfolio/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
