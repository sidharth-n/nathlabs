import { renderToString } from "react-dom/server";
import App from "./App";
import { servicePages } from "./data/servicePages";
import { getMetadata } from "./data/metadata";

export const routes = [
  "/",
  ...servicePages.map((page) => `/${page.slug}`),
  "/privacy",
  "/terms",
  "/refunds",
  "/delivery",
];
export function render(path: string) {
  return {
    html: renderToString(<App initialPath={path} />),
    metadata: getMetadata(path),
  };
}
