import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

type HeaderProps = {
  currentPath: string;
  navigate: (href: string) => void;
};

const navItems = [
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/#products' },
  { label: 'How we work', href: '/#process' },
];

export default function Header({ currentPath, navigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMobileMenuOpen(false), [currentPath]);

  const goTo = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#') && currentPath === '/') {
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (href.startsWith('/#')) {
      window.location.assign(href);
      return;
    }
    navigate(href);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            goTo('/');
          }}
          aria-label="Natha Labs home"
        >
          <img src="/logo.svg" alt="" width="38" height="38" />
          <span>Natha Labs</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); goTo(item.href); }}>
              {item.label}
            </a>
          ))}
          <a className="button button-small" href="mailto:contact@nathalabs.com?subject=Project%20enquiry">
            Discuss a project
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav container" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => { event.preventDefault(); goTo(item.href); }}>
              {item.label}
            </a>
          ))}
          <a className="button" href="mailto:contact@nathalabs.com?subject=Project%20enquiry">
            Discuss a project
          </a>
        </nav>
      )}
    </header>
  );
}
