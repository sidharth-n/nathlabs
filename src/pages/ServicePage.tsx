import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useEffect, useRef } from 'react';
import type { ServicePageData } from '../data/servicePages';
import { servicePageMap } from '../data/servicePages';
import { usePretextHeight } from '../hooks/usePretextHeight';

type ServicePageProps = {
  page: ServicePageData;
  navigate: (href: string) => void;
};

export default function ServicePage({ page, navigate }: ServicePageProps) {
  const title = useRef<HTMLHeadingElement>(null);
  usePretextHeight(title);

  useEffect(() => {
    document.title = page.metaTitle;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', page.metaDescription);
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute('content', page.metaTitle);
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute('content', page.metaDescription);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', `https://nathalabs.com/${page.slug}`);
  }, [page]);

  const whatsappMessage = encodeURIComponent(`Hello Natha Labs, I would like to discuss ${page.shortName}.`);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    description: page.metaDescription,
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    provider: {
      '@type': 'Organization',
      name: 'Natha Labs',
      legalName: 'natha lab For Information Technology Consultants L.L.C S.O.C.',
      url: 'https://nathalabs.com/',
    },
  };

  return (
    <article className="service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="service-hero">
        <div className="container service-hero-grid">
          <div>
            <a className="breadcrumb" href="/#services">Services / {page.shortName}</a>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 ref={title} data-pretext>{page.title}</h1>
            <p className="service-summary">{page.summary}</p>
            <div className="hero-actions">
              <a className="button" href={`https://wa.me/971522628164?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                Talk on WhatsApp <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="mailto:contact@nathalabs.com?subject=AI%20project%20enquiry">Email the team</a>
            </div>
          </div>
          <aside className="evidence-card">
            <span className="evidence-stat">{page.proofStat}</span>
            <strong>{page.proofLabel}</strong>
            <p>{page.proofText}</p>
            <a href={page.proofSource} target={page.proofSource.startsWith('http') ? '_blank' : undefined} rel={page.proofSource.startsWith('http') ? 'noreferrer' : undefined}>
              {page.proofSourceLabel} <ArrowUpRight aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>

      <section className="section service-answer">
        <div className="container split-section">
          <h2>{page.problemTitle}</h2>
          <p>{page.problemAnswer}</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading service-section-heading">
            <p className="eyebrow eyebrow-light">What we deliver</p>
            <h2>A working system, not a slide deck.</h2>
          </div>
          <div className="deliverable-grid">
            {page.deliverables.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container fit-grid">
          <div>
            <p className="eyebrow">Where it fits</p>
            <h2>Start with one measurable workflow.</h2>
          </div>
          <ul>
            {page.useCases.map((useCase) => (
              <li key={useCase}><Check aria-hidden="true" /> {useCase}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Questions</p>
            <h2>What buyers ask before they start.</h2>
          </div>
          <div className="faq-list">
            {page.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
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
              const relatedPage = servicePageMap.get(`/${slug}`);
              if (!relatedPage) return null;
              return (
                <a
                  key={slug}
                  href={`/${slug}`}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(`/${slug}`);
                  }}
                >
                  {relatedPage.shortName} <ArrowRight aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container service-cta-inner">
          <div>
            <p className="eyebrow">A practical first step</p>
            <h2>Bring one workflow. We’ll help you decide what is worth building.</h2>
          </div>
          <a className="button button-dark" href={`https://wa.me/971522628164?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
            Start on WhatsApp <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </article>
  );
}
