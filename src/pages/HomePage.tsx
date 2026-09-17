import {
  ArrowDownRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Code2,
  MessagesSquare,
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { usePretextHeight } from '../hooks/usePretextHeight';

const services = [
  {
    number: '01',
    icon: Code2,
    title: 'Custom apps',
    description:
      'Web and mobile applications shaped around a real workflow, from the first usable release through ongoing improvement.',
  },
  {
    number: '02',
    icon: Blocks,
    title: 'SaaS engineering',
    description:
      'Focused software products with subscriptions, billing, dashboards and the infrastructure needed to run reliably.',
  },
  {
    number: '03',
    icon: Bot,
    title: 'Automation and AI',
    description:
      'Practical systems that remove repetitive work, connect existing tools and put useful AI into daily operations.',
  },
  {
    number: '04',
    icon: MessagesSquare,
    title: 'Technology consulting',
    description:
      'Clear product and technical decisions for teams choosing architecture, improving an existing system or planning a build.',
  },
];

const process = [
  ['Understand', 'We define the user, the job, the constraints and the smallest valuable outcome.'],
  ['Build', 'A working version ships in short, visible stages with direct feedback throughout.'],
  ['Operate', 'We launch, measure, maintain and improve the software after it reaches real users.'],
];

export default function HomePage() {
  const heroTitle = useRef<HTMLHeadingElement>(null);
  usePretextHeight(heroTitle);

  useEffect(() => {
    document.title = 'Natha Labs | Custom App Development and SaaS Engineering';
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Dubai software studio building custom web apps, mobile apps, SaaS products, automation and reliable business software.',
      );
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Software studio · Dubai</p>
            <h1 ref={heroTitle} data-pretext>
              Custom app development and SaaS engineering.
            </h1>
            <p className="hero-summary">
              We design, build and maintain web apps, mobile apps and internal software for startups and growing businesses.
            </p>
            <div className="hero-actions">
              <a className="button" href="mailto:contact@nathalabs.com?subject=Project%20enquiry">
                Discuss a project <ArrowUpRight aria-hidden="true" />
              </a>
              <a className="text-link" href="#services">
                See our services <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="hero-proof" aria-label="What clients can expect">
            <p className="proof-kicker">Built for useful outcomes</p>
            <p className="proof-main">One team from product thinking to production software.</p>
            <div className="proof-list">
              <span>Clear scope</span>
              <span>Working releases</span>
              <span>Direct communication</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div className="container trust-inner">
          <span>Dubai-based</span>
          <span>10+ years combined experience</span>
          <span>Project and ongoing engagements</span>
          <span>Web, mobile and cloud</span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">What we do</p>
            <h2>Software work with a clear business purpose.</h2>
            <p>Use Natha Labs as a product team, an engineering partner or a technical sounding board.</p>
          </div>

          <div className="service-list">
            {services.map(({ number, icon: Icon, title, description }) => (
              <article className="service-row" key={title}>
                <span className="service-number">{number}</span>
                <Icon className="service-icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="about">
        <div className="container split-section">
          <div>
            <p className="eyebrow eyebrow-light">How we think</p>
            <h2>We build for clients, and we build products of our own.</h2>
          </div>
          <div className="large-body">
            <p>
              Natha Labs is a specialist product and engineering team. Client work keeps us close to real operating problems. Our own SaaS work turns repeated problems into focused products.
            </p>
            <p>
              That mix keeps the work practical: fewer decks, shorter feedback loops and software that has to perform outside a demo.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-heading compact-heading">
            <p className="eyebrow">How we work</p>
            <h2>From a messy problem to working software.</h2>
          </div>
          <ol className="process-list">
            {process.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-panel">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Tell us what needs to work better.</h2>
            <p>Share the problem, the people affected and what success would look like. We’ll reply with the clearest next step.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-dark" href="mailto:contact@nathalabs.com?subject=Project%20enquiry">
              contact@nathalabs.com <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="phone-link" href="tel:+971522628164">+971 52 262 8164</a>
          </div>
        </div>
      </section>
    </>
  );
}
