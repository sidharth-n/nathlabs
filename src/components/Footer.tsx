type FooterProps = {
  navigate: (href: string) => void;
};

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Refunds & cancellation', href: '/refunds' },
  { label: 'Delivery', href: '/delivery' },
];

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand brand-inverse">
            <img src="/logo.svg" alt="" width="38" height="38" />
            <span>Natha Labs</span>
          </div>
          <p>Custom apps, SaaS engineering and practical technology consulting.</p>
        </div>

        <div>
          <p className="footer-label">Contact</p>
          <a href="mailto:contact@nathalabs.com">contact@nathalabs.com</a>
          <a href="tel:+971522628164">+971 52 262 8164</a>
          <p>Dubai, United Arab Emirates</p>
        </div>

        <div>
          <p className="footer-label">Legal</p>
          {legalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault();
                navigate(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container legal-identity">
        <p>
          Natha Labs is operated by natha lab For Information Technology Consultants L.L.C S.O.C.,
          a company registered in Dubai, United Arab Emirates. Commercial licence 1529656.
        </p>
        <p>© {new Date().getFullYear()} Natha Labs</p>
      </div>
    </footer>
  );
}
