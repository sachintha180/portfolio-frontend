import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Education from "@/pages/Education";
import Awards from "@/pages/Awards";
import Projects from "@/pages/Projects";
import Error from "@/components/Error";
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
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
