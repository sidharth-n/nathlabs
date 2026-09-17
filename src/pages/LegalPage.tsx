type LegalPageProps = { path: string };
type PolicySection = { title: string; paragraphs?: string[]; items?: string[] };
type Policy = { title: string; intro: string; sections: PolicySection[] };

const policies: Record<string, Policy> = {
  "/privacy": {
    title: "Privacy Policy",
    intro:
      "This policy explains how Natha Labs handles personal information when you visit our website, contact us or buy our services.",
    sections: [
      {
        title: "Information we collect",
        items: [
          "Contact and business information you send to us, including your name, email address, phone number and company details.",
          "Project information, files and communications needed to assess or deliver requested work.",
          "Payment and transaction information. Card details are processed by Stripe and are not stored by Natha Labs.",
          "Basic technical and usage information generated when you visit this website.",
        ],
      },
      {
        title: "How we use information",
        items: [
          "To respond to enquiries, prepare proposals and deliver contracted services.",
          "To process payments, maintain business records and meet legal obligations.",
          "To operate, secure and improve our website and services.",
          "To send service communications. We do not sell personal information.",
        ],
      },
      {
        title: "Service providers and international processing",
        paragraphs: [
          "We use service providers for hosting, analytics, communications and payment processing, including Vercel and Stripe. They process information under their own contractual and privacy obligations. Information may be processed outside your country where those providers operate.",
        ],
      },
      {
        title: "Retention and your choices",
        paragraphs: [
          "We keep information only as long as needed for the purpose collected, contractual obligations, dispute handling and applicable law. You may ask to access, correct or delete your personal information, subject to legal record-keeping requirements.",
        ],
      },
      {
        title: "Contact",
        paragraphs: [
          "For privacy questions or requests, email contact@nathalabs.com.",
        ],
      },
    ],
  },
  "/terms": {
    title: "Terms of Service",
    intro:
      "These terms govern use of the Natha Labs website and services. A signed proposal, statement of work or product-specific agreement may add to or replace parts of these terms.",
    sections: [
      {
        title: "Services",
        paragraphs: [
          "Natha Labs provides custom application development, SaaS engineering, automation and technology consulting. The scope, deliverables, schedule, fees and acceptance process for client work are confirmed in writing before work begins.",
        ],
      },
      {
        title: "Fees and payment",
        paragraphs: [
          "Prices and currency are stated in the applicable proposal, order form or invoice. Payments may be collected by card through Stripe or by another agreed method. Customers are responsible for applicable taxes unless the agreement states otherwise.",
          "Card charges from us may appear on statements as NATHA LAB.",
        ],
      },
      {
        title: "Customer responsibilities",
        items: [
          "Provide accurate information, timely feedback and access reasonably needed for delivery.",
          "Use our services lawfully and not to infringe intellectual property, privacy or security rights.",
          "Keep account credentials secure where a service includes an account.",
        ],
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "Ownership of custom deliverables is defined in the written project agreement. Each party retains ownership of material, tools and intellectual property it owned before the engagement. Natha Labs retains reusable know-how and general-purpose components unless agreed otherwise.",
        ],
      },
      {
        title: "Availability and liability",
        paragraphs: [
          "We provide services with reasonable care and skill. To the extent permitted by law, neither party is liable for indirect or consequential loss. Any liability limits or warranties specific to a project are stated in its written agreement.",
        ],
      },
      {
        title: "Governing law and contact",
        paragraphs: [
          "These terms are governed by the laws applicable in Dubai and the United Arab Emirates. Questions can be sent to contact@nathalabs.com.",
        ],
      },
    ],
  },
  "/refunds": {
    title: "Refund and Cancellation Policy",
    intro:
      "We want payment terms to be clear before work starts. Project-specific terms in an accepted proposal or order form take priority over this general policy.",
    sections: [
      {
        title: "Custom development and consulting",
        items: [
          "Before work starts, a customer may cancel and request a refund of amounts paid, less any third-party cost that the customer approved and that cannot be recovered.",
          "After work starts, completed work, accepted milestones and committed third-party costs are not refundable. Any unused prepaid balance for work not yet performed will be returned.",
          "Cancellation requests must be sent to contact@nathalabs.com and identify the project and invoice.",
        ],
      },
      {
        title: "SaaS subscriptions",
        paragraphs: [
          "Where a Natha Labs software product offers a subscription, customers may cancel before the next renewal to prevent future charges. Access normally continues until the end of the paid billing period. A product-specific order page may state different refund terms before purchase.",
        ],
      },
      {
        title: "Refund timing",
        paragraphs: [
          "Approved refunds are returned to the original payment method. We normally initiate them within 10 business days. Your bank or card issuer may need additional time to make the funds available.",
        ],
      },
      {
        title: "No physical returns",
        paragraphs: [
          "Natha Labs currently provides digital services and software. We do not ship physical goods, so no physical return process applies.",
        ],
      },
    ],
  },
  "/delivery": {
    title: "Service Delivery Policy",
    intro:
      "Natha Labs delivers software and professional services digitally. The exact delivery plan is agreed with each customer before payment.",
    sections: [
      {
        title: "Custom projects and consulting",
        paragraphs: [
          "Deliverables, milestones and target dates are documented in the proposal or statement of work. Delivery may include access to a hosted application, source code repository, design files, documentation, reports or remote consulting sessions.",
        ],
      },
      {
        title: "Software access",
        paragraphs: [
          "For a Natha Labs SaaS product, access instructions are sent electronically after successful payment or account approval. Product-specific delivery details are shown before purchase.",
        ],
      },
      {
        title: "Customer dependencies",
        paragraphs: [
          "Delivery dates can change when required information, access, approvals or feedback are delayed. We will communicate material changes and agree a revised schedule where needed.",
        ],
      },
      {
        title: "Support",
        paragraphs: [
          "For delivery questions, email contact@nathalabs.com or call +971 52 262 8164.",
        ],
      },
    ],
  },
};

export default function LegalPage({ path }: LegalPageProps) {
  const policy = policies[path] ?? policies["/terms"];

  return (
    <article className="legal-page">
      <div className="container legal-layout">
        <header className="legal-header">
          <p className="eyebrow">Natha Labs</p>
          <h1>{policy.title}</h1>
          <p>{policy.intro}</p>
          <span>Effective 17 September 2026</span>
        </header>

        <div className="legal-content">
          {policy.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="legal-company">
            <h2>Business details</h2>
            <p>
              <strong>Legal name:</strong> natha lab For Information Technology
              Consultants L.L.C S.O.C.
            </p>
            <p>
              <strong>Commercial licence:</strong> 1529656
            </p>
            <p>
              <strong>Registered location:</strong> Office 06, T-SH-D-16, Dubai
              Industrial City, Saih Shuaib 3, Dubai, United Arab Emirates
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@nathalabs.com">contact@nathalabs.com</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+971522628164">+971 52 262 8164</a>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
