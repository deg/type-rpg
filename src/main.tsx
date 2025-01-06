import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "antd/dist/reset.css"; // Modern, less conflicting reset styles

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
