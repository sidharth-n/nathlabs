import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);

if (
  window.location.hostname === "nathalabs.com" ||
  window.location.hostname === "www.nathalabs.com" ||
  window.location.hostname.endsWith(".vercel.app")
) {
  const analyticsRoot = document.createElement("div");
  document.body.append(analyticsRoot);
  createRoot(analyticsRoot).render(<Analytics />);
}
