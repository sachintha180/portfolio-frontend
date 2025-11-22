import PortfolioLayout from "@/components/layouts/PortfolioLayout";
import CSClassLayout from "@/components/layouts/CSClassLayout";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import RedirectRoute from "@/components/layouts/RedirectRoute";

import PortfolioHome from "@/pages/portfolio/Home";
import Experience from "@/pages/portfolio/Experience";
import Education from "@/pages/portfolio/Education";
import Awards from "@/pages/portfolio/Awards";
import Projects from "@/pages/portfolio/Projects";
import NotFound from "@/components/layouts/NotFound";

import CVHome from "@/pages/cv/Home";

import CSClassDashboard from "@/pages/cs-class/Dashboard";
import CSClassLogin from "@/pages/cs-class/Login";
import CSClassRegister from "@/pages/cs-class/Register";
import CSClassLogout from "@/pages/cs-class/Logout";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, UserProvider, SyllabusProvider } from "@/contexts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Index Route */}
        <Route index element={<Navigate to="/portfolio" />} />

        {/* Portfolio Routes */}
        <Route path="/portfolio/*" element={<PortfolioLayout />}>
          {/* Index Route */}
          <Route index element={<PortfolioHome />} />

          {/* Public Routes */}
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="awards" element={<Awards />} />
          <Route path="projects" element={<Projects />} />

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound linkHref="/portfolio" />} />
        </Route>

        {/* CS Class Routes */}
        <Route
          path="/cs-class/*"
          element={
            <AuthProvider>
              <UserProvider>
                <SyllabusProvider>
                  <CSClassLayout />
                </SyllabusProvider>
              </UserProvider>
            </AuthProvider>
          }
        >
          {/* Protected Routes */}
          <Route element={<ProtectedRoute redirectTo="/cs-class/login" />}>
            {/* Index Route */}
            <Route index element={<CSClassDashboard />} />
          </Route>

          {/* Public Routes */}
          <Route element={<RedirectRoute redirectTo="/cs-class" />}>
            <Route path="login" element={<CSClassLogin />} />
            <Route path="register" element={<CSClassRegister />} />
            <Route path="logout" element={<CSClassLogout />} />
          </Route>

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound linkHref="/cs-class" />} />
        </Route>

        {/* CV Routes */}
        <Route path="/cv/*">
          {/* Index Route */}
          <Route index element={<CVHome />} />

          {/* Catch-all Route */}
          <Route path="*" element={<NotFound linkHref="/cv" />} />
        </Route>

        {/* Catch-all Route */}
        {/* BUG: NotFound component is not being rendered within a suitable layout */}
        <Route path="*" element={<NotFound linkHref="/portfolio" />} />
      </Routes>
    </BrowserRouter>
  );
}
