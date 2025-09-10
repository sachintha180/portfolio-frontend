import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TailwindHome from "./pages/TailwindHome";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TailwindHome />
  </StrictMode>
);
