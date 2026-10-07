import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CornerDownRight,
  FileText,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { productPage as p } from "../data/productPage";
import { whatsappUrl } from "../data/metadata";
import ContactSection from "../components/ContactSection";

const principleIcons = [FileText, UserCheck, ShieldCheck];

export default function ProductPage() {
  const url = `https://www.nathalabs.com/${p.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: p.shortName,
      alternateName: "Document Desk by Natha Labs",
      description: p.metaDescription,
      url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      creator: { "@id": "https://www.nathalabs.com/#organization" },
      publisher: { "@id": "https://www.nathalabs.com/#organization" },
      areaServed: { "@type": "Country", name: "United Arab Emirates" },
      featureList: p.documents.map((d) => d.title),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.nathalabs.com/",
        },
        { "@type": "ListItem", position: 2, name: p.shortName, item: url },
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
            <a href="/#products">Products</a>
            <span>/</span>
            <span>{p.shortName}</span>
          </nav>
          <div className="service-hero-grid">
            <div>
              <p className="eyebrow">{p.eyebrow}</p>
              <h1>{p.title}</h1>
              <p className="hero-summary">{p.summary}</p>
              <div className="hero-actions">
                <a
                  className="button"
                  href={whatsappUrl("early access to Document Desk")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Request early access <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#workflow">
                  How it works <ArrowDown size={17} />
                </a>
              </div>
              <p className="service-location">
                Built on Claude by Anthropic · Made in Dubai by Natha Labs
              </p>
            </div>
            <aside className="service-example">
              <div className="example-heading">
                <span className="status-dot" />
                <span>A record in review</span>
                <span>Example</span>
              </div>
              <h2>Supplier invoice, 2 pages</h2>
              <ol>
                {[
                  [
                    "Extracted",
                    "Supplier, TRN, invoice number, date, 6 line items, VAT, total. Each value linked to its page.",
                  ],
                  [
                    "Checked",
                    "Line items add up to the subtotal. VAT equals 5 percent. TRN has 15 digits.",
                  ],
                  [
                    "Flagged",
                    "Due date not found in the document. Marked missing and sent to the reviewer, not guessed.",
                  ],
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
          <a href="#documents">Documents</a>
          <a href="#workflow">How it works</a>
          <a href="#principles">How we build it</a>
          <a href="#questions">Questions</a>
        </div>
      </nav>
      <section className="section" id="overview">
        <div className="container">
          <div className="service-intro">
            <p className="eyebrow">What Document Desk is</p>
            <div>
              <h2>Paperwork into records your team can trust</h2>
              <p className="intro-answer">
                Document Desk is a web product from Natha Labs for UAE
                businesses that still type invoices, contracts and forms into
                their systems by hand. It reads the document, fills the fields,
                shows where each value came from and waits for approval.
              </p>
              <p>{p.status}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section deliverables-section" id="documents">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Documents it handles</p>
              <h2>
                The paperwork
                <br />
                UAE businesses deal with daily.
              </h2>
            </div>
            <p>
              Each document type has its own field set and checks. Your own
              fields and rules are added during onboarding.
            </p>
          </div>
          <div className="deliverable-grid">
            {p.documents.map((d, i) => (
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
              <p className="eyebrow">From document to approved record</p>
              <h2>
                How Document Desk
                <br />
                works
              </h2>
            </div>
            <p>{p.builtOn}</p>
          </div>
          <div className="workflow-steps">
            {p.workflow.map((w, i) => (
              <article key={w.title}>
                <div>
                  <span>0{i + 1}</span>
                  {i < p.workflow.length - 1 ? (
                    <ArrowRight size={20} />
                  ) : (
                    <Check size={20} />
                  )}
                </div>
                <h3>{w.title}</h3>
                <p>{w.description}</p>
              </article>
            ))}
          </div>
          <div className="use-case-row">
            <span>Typical uses</span>
            {[
              "Accounts payable",
              "Tenant onboarding",
              "Supplier onboarding",
              "KYC document packs",
              "Property management",
            ].map((u) => (
              <span key={u}>{u}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section scope-section" id="principles">
        <div className="container scope-grid">
          <div>
            <p className="eyebrow">How we build it</p>
            <h2>
              Accuracy you can
              <br />
              check, not take on trust.
            </h2>
            <p>
              Document Desk follows the same rules as every Natha Labs project:
              agree where data goes, keep people in the process, and show the
              evidence behind every result.
            </p>
          </div>
          <div className="scope-list">
            {p.principles.map((s, i) => {
              const Icon = principleIcons[i] ?? CornerDownRight;
              return (
                <article key={s.title}>
                  <Icon size={20} />
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                </article>
              );
            })}
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
              request access
            </h2>
            <p>Send us a sample of your real files and we will show you the result.</p>
          </div>
          <div className="faq-list">
            {p.faq.map((f) => (
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
            {[
              ["ai-document-processing-uae", "Document processing"],
              ["ai-automation-dubai", "Workflow automation"],
              ["custom-ai-app-development-dubai", "Custom AI applications"],
            ].map(([slug, name]) => (
              <a key={slug} href={`/${slug}`}>
                <span>{name}</span>
                <ArrowUpRight size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactSection subject="early access to Document Desk" />
    </article>
  );
}
