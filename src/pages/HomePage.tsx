import { ArrowDownRight, ArrowRight, ArrowUpRight, Bot, Boxes, FileSearch, Lightbulb, MessageSquareText, Workflow } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { servicePageMap } from '../data/servicePages';
import { usePretextHeight } from '../hooks/usePretextHeight';

type HomePageProps = { navigate: (href: string) => void };

const featuredServices = [
  { slug: 'ai-automation-dubai', icon: Workflow },
  { slug: 'custom-ai-app-development-dubai', icon: Boxes },
  { slug: 'whatsapp-automation-uae', icon: MessageSquareText },
  { slug: 'ai-voice-agents-uae', icon: Bot },
  { slug: 'ai-document-processing-uae', icon: FileSearch },
  { slug: 'ai-consulting-uae', icon: Lightbulb },
];

const process = [
  ['Find the workflow', 'We observe the current work, its cost, the systems involved and the failure that matters.'],
  ['Prove the change', 'A contained pilot uses representative data and explicit success and failure criteria.'],
  ['Build and operate', 'We integrate, launch, monitor and improve the system with a clear human escalation path.'],
];

export default function HomePage({ navigate }: HomePageProps) {
  const heroTitle = useRef<HTMLHeadingElement>(null);
  usePretextHeight(heroTitle);

  useEffect(() => {
    document.title = 'AI Consulting and Automation Dubai | Natha Labs';
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', 'Natha Labs builds custom AI apps, workflow automation, WhatsApp agents and document systems for businesses in Dubai and across the UAE.');
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', 'https://nathalabs.com/');
  }, []);

  const openService = (slug: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    navigate(`/${slug}`);
  };

  const whatsappMessage = encodeURIComponent('Hello Natha Labs, I would like to discuss an AI project.');

  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">AI consultancy · Dubai, UAE</p>
            <h1 ref={heroTitle} data-pretext>AI consulting and automation for UAE businesses.</h1>
            <p className="hero-summary">
              We design custom AI apps, automate operational workflows and connect AI to the systems your team already uses.
            </p>
            <div className="hero-actions">
              <a className="button" href={`https://wa.me/971522628164?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
                Talk on WhatsApp <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#services">
                Explore AI services <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="How Natha Labs works">
            <p className="proof-kicker">No theatre. One useful workflow.</p>
            <p className="proof-main">Start small, prove the result, then scale what works.</p>
            <div className="proof-list">
              <span>UAE-focused</span>
              <span>Arabic and English</span>
              <span>Human review built in</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div className="container trust-inner">
          <span>Dubai-based</span>
          <span>10+ years combined experience</span>
          <span>Private business data respected</span>
          <span>Web, mobile and cloud</span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">AI services</p>
            <h2>AI connected to the work, not another disconnected demo.</h2>
            <p>Every engagement begins with a real process and ends with a measurable operating result.</p>
          </div>

          <div className="service-list">
            {featuredServices.map(({ slug, icon: Icon }, index) => {
              const page = servicePageMap.get(`/${slug}`);
              if (!page) return null;
              return (
                <a className="service-row service-link" href={`/${slug}`} onClick={openService(slug)} key={slug}>
                  <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
                  <Icon className="service-icon" aria-hidden="true" />
                  <h3>{page.shortName}</h3>
                  <p>{page.summary} <ArrowRight aria-hidden="true" /></p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="products">
        <div className="container product-studio">
          <div>
            <p className="eyebrow eyebrow-light">Product studio</p>
            <h2>We also turn repeated business problems into focused SaaS products.</h2>
          </div>
          <div className="product-flow" aria-label="How Natha Labs develops products">
            <div><span>01</span><strong>Repeated problem</strong><p>Observed across real users and paid work.</p></div>
            <ArrowRight aria-hidden="true" />
            <div><span>02</span><strong>Narrow product</strong><p>One job, one clear promise, one fast path.</p></div>
            <ArrowRight aria-hidden="true" />
            <div><span>03</span><strong>Measured release</strong><p>Usage and payment decide what grows.</p></div>
          </div>
          <p className="product-note">Each product receives its own page, terms, support path and billing details when it is available to customers.</p>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-heading compact-heading">
            <p className="eyebrow">How we work</p>
            <h2>From a messy process to working AI.</h2>
          </div>
          <ol className="process-list">
            {process.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section research-section" id="research">
        <div className="container research-panel">
          <div>
            <p className="eyebrow">Built from UAE demand</p>
            <h2>We studied the work before defining the offer.</h2>
          </div>
          <div>
            <p>In September 2026, we reviewed 23 customer conversations, 19 paid project and hiring signals, and 22 UAE market and case-study sources.</p>
            <p>The repeated needs were WhatsApp and CRM workflows, document processing, internal knowledge, bilingual customer service and secure human handoff.</p>
          </div>
        </div>
      </section>

      <section className="section industries-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">UAE workflows</p>
            <h2>Built around how local teams actually operate.</h2>
            <p>Two sectors produced especially clear buyer-language evidence in our first research pass.</p>
          </div>
          <div className="industry-links">
            {['ai-automation-real-estate-dubai', 'ai-automation-hospitality-uae', 'ai-readiness-assessment-uae'].map((slug) => {
              const page = servicePageMap.get(`/${slug}`)!;
              return (
                <a href={`/${slug}`} onClick={openService(slug)} key={slug}>
                  <span>{page.eyebrow}</span>
                  <strong>{page.title}</strong>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-panel">
          <div>
            <p className="eyebrow">Start with one workflow</p>
            <h2>Tell us what is slow, repetitive or easy to get wrong.</h2>
            <p>We’ll help you decide whether AI is useful, what to prove first and what a sensible implementation looks like.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-dark" href={`https://wa.me/971522628164?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
              Talk on WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="phone-link" href="mailto:contact@nathalabs.com">contact@nathalabs.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
