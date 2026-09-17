import { ArrowUpRight } from "lucide-react";
import { servicePages } from "../data/servicePages";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a className="brand" href="/">
            <img src="/logo.svg" width="34" height="34" alt="" />
            <span>
              natha<span className="brand-light">labs</span>.
            </span>
          </a>
          <p>
            AI consulting and software development.
            <br />
            Based in Dubai. Built around your business.
          </p>
          <a className="footer-email" href="mailto:contact@nathalabs.com">
            contact@nathalabs.com <ArrowUpRight size={19} />
          </a>
        </div>
        <div className="footer-grid">
          <div>
            <p className="footer-label">Services</p>
            {servicePages.slice(0, 5).map((p) => (
              <a href={`/${p.slug}`} key={p.slug}>
                {p.shortName}
              </a>
            ))}
          </div>
          <div>
            <p className="footer-label">Explore</p>
            {servicePages.slice(5).map((p) => (
              <a href={`/${p.slug}`} key={p.slug}>
                {p.shortName}
              </a>
            ))}
            <a href="/#products">Product studio</a>
          </div>
          <div>
            <p className="footer-label">Company</p>
            <a href="/#about">About Natha Labs</a>
            <a href="/privacy">Privacy policy</a>
            <a href="/terms">Terms of service</a>
            <a href="/refunds">Refunds and cancellation</a>
            <a href="/delivery">Service delivery</a>
          </div>
          <div>
            <p className="footer-label">Find us</p>
            <address>
              Office 06, T-SH-D-16
              <br />
              Dubai Industrial City
              <br />
              Saih Shuaib 3, Dubai, UAE
            </address>
            <a href="tel:+971522628164">+971 52 262 8164</a>
            <span className="footer-licence">Commercial licence 1529656</span>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Natha Labs is operated by natha lab For Information Technology
            Consultants L.L.C S.O.C.
          </p>
          <span>© {new Date().getFullYear()} Natha Labs</span>
        </div>
      </div>
    </footer>
  );
}
