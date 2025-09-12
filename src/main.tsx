// main.tsx

import { lazy, StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import "@/main.css";

const TailwindHome = lazy(() => import("@/pages/TailwindHome"));
const PaperHome = lazy(() => import("@/pages/PaperHome"));

function DarkModeController() {
  const location = useLocation();
  useEffect(() => {
    const isTailwindHome = location.pathname === "/";
    document.documentElement.classList.toggle("dark", isTailwindHome);
  }, [location.pathname]);
  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeController />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <TailwindHome />
            </Suspense>
          }
        />
        <Route
          path="/paper"
          element={
            <Suspense fallback={null}>
              <PaperHome />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
