import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { HackathonProvider } from "./utils/HackathonContext";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <HackathonProvider>
        <App />
      </HackathonProvider>
    </StrictMode>
  </BrowserRouter>
);
