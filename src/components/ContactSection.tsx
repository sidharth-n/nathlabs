import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "../data/metadata";

export default function ContactSection({ subject }: { subject?: string }) {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-layout">
        <div>
          <p className="eyebrow">Let’s look at your workflow</p>
          <h2>
            What’s taking more
            <br />
            time than it should?
          </h2>
          <p>
            Tell us what your team does, where work gets stuck and which tools
            you use. That’s enough to start the conversation.
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="button"
            href={whatsappUrl(subject)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Talk on WhatsApp{" "}
            <ArrowUpRight size={18} />
          </a>
          <a
            className="contact-email"
            href="mailto:contact@nathalabs.com?subject=Project%20enquiry"
          >
            Or email your brief <ArrowUpRight size={16} />
          </a>
          <span>+971 52 262 8164 · Dubai, UAE</span>
        </div>
      </div>
    </section>
  );
}
