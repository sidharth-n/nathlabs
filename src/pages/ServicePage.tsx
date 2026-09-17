import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CornerDownRight,
} from "lucide-react";
import type { ServicePageData } from "../data/servicePages";
import { servicePageMap } from "../data/servicePages";
import { whatsappUrl } from "../data/metadata";
import ContactSection from "../components/ContactSection";

export default function ServicePage({ page }: { page: ServicePageData }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.metaDescription,
      url: `https://nathalabs.com/${page.slug}`,
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
      provider: { "@id": "https://nathalabs.com/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://nathalabs.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.shortName,
          item: `https://nathalabs.com/${page.slug}`,
        },
      ],
    },
  ];
  return (
    <article className="service-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="service-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/#services">Services</a>
            <span>/</span>
            <span>{page.shortName}</span>
          </nav>
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p className="hero-summary">{page.summary}</p>
              <div className="hero-actions">
                <a
                  className="button"
                  href={whatsappUrl(page.shortName)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Discuss your project <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#deliverables">
                  What you get <ArrowDown size={17} />
                </a>
              </div>
              <p className="service-location">
                Based in Dubai · Working with businesses across the UAE
              </p>
            </div>
            <aside className="service-example">
              <div className="example-heading">
                <span className="status-dot" />
                <span>How it could work</span>
                <span>Example</span>
              </div>
              <h2>{page.example.title}</h2>
              <ol>
                {[
                  ["The input", page.example.input],
                  ["The work", page.example.action],
                  ["The result", page.example.output],
                ].map(([label, text], i) => (
                  <li key={label}>
                    <span className="example-number">0{i + 1}</span>
                    <div>
                      <strong>{label}</strong>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>
      <nav className="page-nav" aria-label="On this page">
        <div className="container">
          <span>On this page</span>
          <a href="#overview">Overview</a>
          <a href="#deliverables">Deliverables</a>
          <a href="#workflow">How it works</a>
          <a href="#scope">Project scope</a>
          <a href="#questions">Questions</a>
        </div>
      </nav>
      <section className="section" id="overview">
        <div className="container">
          <div className="service-intro">
            <p className="eyebrow">The problem to solve</p>
            <div>
              <h2>{page.problemTitle}</h2>
              <p className="intro-answer">{page.problemAnswer}</p>
              <p>{page.intro}</p>
            </div>
          </div>
          <div className="situation-grid">
            {page.situations.map((s, i) => (
              <article key={s.title}>
                <span>0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section deliverables-section" id="deliverables">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What your project includes</p>
              <h2>
                A clear scope.
                <br />A usable result.
              </h2>
            </div>
            <p>
              The proposal sets out the deliverables and how your team will
              check them. The following areas shape the work.
            </p>
          </div>
          <div className="deliverable-grid">
            {page.deliverables.map((d, i) => (
              <article key={d.title}>
                <span className="deliverable-number">0{i + 1}</span>
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="workflow">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From input to outcome</p>
              <h2>
                How the workflow
                <br />
                comes together
              </h2>
            </div>
            <p>
              These steps show a typical starting point. Your tools, business
              rules and review requirements determine the final design.
            </p>
          </div>
          <div className="workflow-steps">
            {page.workflow.map((w, i) => (
              <article key={w.title}>
                <div>
                  <span>0{i + 1}</span>
                  {i < 2 ? <ArrowRight size={20} /> : <Check size={20} />}
                </div>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </article>
            ))}
          </div>
          <div className="use-case-row">
            <span>Typical uses</span>
            {page.useCases.map((u) => (
              <span key={u}>{u}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section scope-section" id="scope">
        <div className="container scope-grid">
          <div>
            <p className="eyebrow">Before development starts</p>
            <h2>
              Know what the
              <br />
              project depends on.
            </h2>
            <p>{page.fitNote}</p>
          </div>
          <div className="scope-list">
            {page.scope.map((s) => (
              <article key={s.title}>
                <CornerDownRight size={20} />
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-section" id="questions">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Your questions</p>
            <h2>
              Before you
              <br />
              make a decision
            </h2>
            <p>Talk through your specific requirements with the team.</p>
          </div>
          <div className="faq-list">
            {page.faq.map((f) => (
              <details key={f.question}>
                <summary>
                  {f.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section related-section">
        <div className="container">
          <p className="eyebrow">Related services</p>
          <div className="related-links">
            {page.related.map((slug) => {
              const p = servicePageMap.get(`/${slug}`);
              return p ? (
                <a key={slug} href={`/${slug}`}>
                  <span>{p.shortName}</span>
                  <ArrowUpRight size={20} />
                </a>
              ) : null;
            })}
          </div>
        </div>
      </section>
      <ContactSection subject={page.shortName} />
    </article>
  );
}
