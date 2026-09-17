import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import LegalPage from "./pages/LegalPage";
import { servicePageMap } from "./data/servicePages";
import { getMetadata, applyMetadata } from "./data/metadata";

const legalRoutes = new Set(["/privacy", "/terms", "/refunds", "/delivery"]);

export default function App({ initialPath }: { initialPath?: string }) {
  const path =
    (
      initialPath ??
      (typeof window === "undefined" ? "/" : window.location.pathname)
    ).replace(/\/+$/, "") || "/";
  const page = servicePageMap.get(path);
  useEffect(() => {
    applyMetadata(getMetadata(path));
  }, [path]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPath={path} />
      <main id="main">
        {path === "/" ? (
          <HomePage />
        ) : page ? (
          <ServicePage page={page} />
        ) : legalRoutes.has(path) ? (
          <LegalPage path={path} />
        ) : (
          <section className="container not-found">
            <p className="eyebrow">Page not found</p>
            <h1>Let’s get you to the right place</h1>
            <p>This address does not match a page on our website.</p>
            <a className="button" href="/">
              Visit homepage
            </a>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
