import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Blocks,
  Check,
  FileText,
  GitBranch,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import ContactSection from "../components/ContactSection";
import WorkflowDemo from "../components/WorkflowDemo";
import { whatsappUrl } from "../data/metadata";

const services = [
  {
    slug: "ai-consulting-uae",
    title: "AI consulting",
    Icon: Lightbulb,
    copy: "Choose where AI belongs in your business, what to invest in and what to leave alone.",
    tags: "Strategy · Build or buy",
  },
  {
    slug: "ai-automation-dubai",
    title: "Workflow automation",
    Icon: GitBranch,
    copy: "Connect the work between inboxes, spreadsheets and business systems. Give every exception an owner.",
    tags: "CRM · Operations · Integrations",
  },
  {
    slug: "custom-ai-app-development-dubai",
    title: "Custom AI applications",
    Icon: Blocks,
    copy: "Build a web or mobile app around the way your team works, with AI where it helps.",
    tags: "Web apps · Mobile apps · SaaS",
  },
  {
    slug: "whatsapp-automation-uae",
    title: "WhatsApp automation",
    Icon: MessageCircle,
    copy: "Answer common questions, capture enquiries and pass the conversation to the right person.",
    tags: "Enquiries · Bookings · Support",
  },
  {
    slug: "ai-voice-agents-uae",
    title: "AI voice agents",
    Icon: AudioLines,
    copy: "Handle routine calls and booking requests, with a clear route to a member of your team.",
    tags: "Calls · Scheduling · Handoff",
  },
  {
    slug: "ai-document-processing-uae",
    title: "Document processing",
    Icon: FileText,
    copy: "Turn invoices, forms and PDFs into checked records your team can review and use.",
    tags: "Invoices · Documents · Knowledge",
  },
];
const faqs = [
  [
    "Where should we start if we are unsure what to automate?",
    "Bring one recurring task and show us how it works today. An AI readiness assessment examines the process, the information available and the systems involved. You receive a recommendation on whether to improve the process, use existing software or test a custom solution.",
  ],
  [
    "Can you work with our existing software?",
    "The first step is to check how your software allows data to be read and updated. A project can connect a CRM, booking system, accounting tool or internal database where access is available. If a system has restrictions, the proposal explains them before development starts.",
  ],
  [
    "Can a workflow support Arabic and English?",
    "Arabic and English can be included in the scope. The pilot needs examples of the language your customers actually use, including mixed-language messages. Your team reviews the responses and decides which situations should always go to a person.",
  ],
  [
    "How are projects priced?",
    "Pricing follows an agreed scope. The proposal sets out the deliverables, milestones, integrations, support and any recurring software or usage costs. Start by sharing the task, the approximate volume and the tools involved so we can assess the work.",
  ],
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="small-mark" /> An AI consultancy in Dubai
            </p>
            <h1>
              AI consulting <br />& automation
              <br />
              <span>in Dubai.</span>
            </h1>
            <p className="hero-summary">
              Custom AI apps and connected workflows for the work that slows
              your team down.
            </p>
            <div className="hero-actions">
              <a
                className="button"
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
              >
                Talk about your project <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#services">
                Explore services <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-avatars">
                <span>n</span>
                <span>
                  <Check size={14} />
                </span>
              </span>
              <span>Dubai-based team. 10+ years combined experience.</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <WorkflowDemo />
          </div>
        </div>
      </section>
      <section className="systems-strip" aria-label="Integration approach">
        <div className="container">
          <p>
            Built around the tools
            <br />
            <strong>you already use</strong>
          </p>
          <div>
            <span>WhatsApp</span>
            <span>Microsoft 365</span>
            <span>Your CRM</span>
            <span>Booking systems</span>
            <span>Business data</span>
          </div>
        </div>
      </section>
      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How we can help</p>
              <h2>
                Less chasing.
                <br />
                More work moving.
              </h2>
            </div>
            <p>
              A missed enquiry. The same details typed into three systems. A
              document waiting for review. Start with the part of your day that
              needs to work better.
            </p>
          </div>
          <div className="service-grid">
            {services.map(({ slug, title, Icon, copy, tags }, i) => (
              <a className="service-card" href={`/${slug}`} key={slug}>
                <div className="card-top">
                  <span className={`service-icon tone-${i % 3}`}>
                    <Icon size={23} strokeWidth={1.6} />
                  </span>
                  <ArrowUpRight className="card-arrow" size={21} />
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <span className="card-tags">{tags}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section approach-section" id="approach">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A practical way to start</p>
              <h2>
                One workflow.
                <br />A clear next step.
              </h2>
            </div>
            <p>
              You do not need a company-wide AI plan to fix a recurring problem.
              Start with a task your team can explain and a result they can
              check.
            </p>
          </div>
          <div className="approach-grid">
            {[
              [
                "01",
                "Show us the work",
                "Walk through the task as it happens today. Identify the people, tools, delays and mistakes that matter.",
              ],
              [
                "02",
                "Test a smaller version",
                "Use representative examples to check the proposed workflow. Agree what a good result looks like before expanding.",
              ],
              [
                "03",
                "Put it into daily use",
                "Connect the approved workflow, train the people using it and agree how support and changes will be handled.",
              ],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <a className="text-link" href="/ai-readiness-assessment-uae">
            Start with an AI readiness assessment <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className="section industry-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Closer to your day-to-day</p>
              <h2>
                Different businesses.
                <br />
                Different workflows.
              </h2>
            </div>
            <p>
              A property enquiry and a group hotel booking need different
              information, decisions and follow-up. Your software should reflect
              that.
            </p>
          </div>
          <div className="industry-grid">
            <a
              className="industry-card property-card"
              href="/ai-automation-real-estate-dubai"
            >
              <div className="building-art" aria-hidden="true">
                <i />
                <i />
                <i />
                <span className="art-tag">
                  <MessageCircle size={13} /> New viewing enquiry
                </span>
              </div>
              <div className="industry-copy">
                <span className="eyebrow">Real estate</span>
                <h3>
                  From property enquiry
                  <br />
                  to the right agent.
                </h3>
                <p>
                  Lead capture, current listing information, viewing requests
                  and CRM follow-up.
                </p>
                <span className="text-link">
                  Real estate automation <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
            <a
              className="industry-card hospitality-card"
              href="/ai-automation-hospitality-uae"
            >
              <div className="booking-art" aria-hidden="true">
                <div>
                  <span>Group enquiry</span>
                  <strong>Rooms. Dates. Requirements.</strong>
                  <span className="booking-line" />
                  <span className="booking-line short" />
                  <span className="booking-check">
                    <Check size={13} /> Ready for your reservations team
                  </span>
                </div>
              </div>
              <div className="industry-copy">
                <span className="eyebrow">Hospitality</span>
                <h3>
                  Give every guest request
                  <br />a clear next step.
                </h3>
                <p>
                  Reservation enquiries, group requests and answers from
                  approved hotel information.
                </p>
                <span className="text-link">
                  Hospitality automation <ArrowUpRight size={18} />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">The team behind the work</p>
            <h2>
              A Dubai team for
              <br />
              your next AI project.
            </h2>
            <p>
              Natha Labs is a Dubai-based team of specialists with more than 10
              years of combined experience. Our work brings together consulting,
              software development and integration.
            </p>
            <p>
              Your project starts with how the business operates. The technology
              follows from what the workflow needs, the tools already in place
              and the people responsible for it.
            </p>
            <a className="text-link" href="/ai-consulting-uae">
              Explore our consulting services <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="working-principles">
            <div>
              <ShieldCheck size={23} />
              <h3>Agree where your data goes</h3>
              <p>
                Define access, storage and external services before connecting
                business information.
              </p>
            </div>
            <div>
              <GitBranch size={23} />
              <h3>Keep people in the process</h3>
              <p>
                Set review points for uncertain answers, financial decisions and
                customer commitments.
              </p>
            </div>
            <div>
              <FileText size={23} />
              <h3>Know what you are buying</h3>
              <p>
                Confirm the scope, ownership, recurring costs and support in a
                written proposal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section products-section" id="products">
        <div className="container products-grid">
          <div className="product-illustration" aria-hidden="true">
            <div className="mini-app">
              <div className="mini-app-bar">
                <img src="/logo.svg" width="22" height="22" alt="" />
                <span>A focused tool</span>
                <span>•••</span>
              </div>
              <div className="mini-app-body">
                <span className="mini-label">YOUR DAILY WORK</span>
                <div>
                  <Check size={15} />
                  <span>One recurring task</span>
                </div>
                <div>
                  <Check size={15} />
                  <span>The information you need</span>
                </div>
                <div>
                  <Check size={15} />
                  <span>A result you can use</span>
                </div>
                <span className="mini-action">
                  Built around the job <ArrowRight size={14} />
                </span>
              </div>
            </div>
            <span className="product-caption">
              An illustration of our product approach
            </span>
          </div>
          <div>
            <p className="eyebrow">The product studio</p>
            <h2>
              Small tools.
              <br />A specific job to do.
            </h2>
            <p>
              Alongside client projects, our product work focuses on recurring
              business tasks that a dedicated software tool can handle.
            </p>
            <p>
              Have a process that could become a product? Our custom development
              service covers the application, its users and the work behind it.
            </p>
            <a className="text-link" href="/custom-ai-app-development-dubai">
              Explore product development <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="container faq-layout">
          <div>
            <p className="eyebrow">Before we talk</p>
            <h2>
              A few things
              <br />
              you might ask.
            </h2>
            <p>
              Have a specific question?
              <br />
              <a href="mailto:contact@nathalabs.com">Email the team.</a>
            </p>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
