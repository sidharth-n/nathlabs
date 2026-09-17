import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { servicePages } from "../data/servicePages";
import { whatsappUrl } from "../data/metadata";

export default function Header({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (open) {
          setOpen(false);
          menuButton.current?.focus();
        }
        const details = header.current?.querySelector("details[open]");
        if (details) {
          details.removeAttribute("open");
          details.querySelector("summary")?.focus();
        }
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) {
        setOpen(false);
        header.current?.querySelector("details")?.removeAttribute("open");
      }
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Natha Labs home">
          <img src="/logo.svg" width="34" height="34" alt="" />
          <span>
            natha<span className="brand-light">labs</span>
            <span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <details className="services-menu">
            <summary>
              Services <ChevronDown size={14} />
            </summary>
            <div className="services-dropdown">
              <p>What can we help with?</p>
              {servicePages.map((page) => (
                <a
                  key={page.slug}
                  href={`/${page.slug}`}
                  aria-current={
                    currentPath === `/${page.slug}` ? "page" : undefined
                  }
                >
                  {page.shortName}
                  <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </details>
          <a href="/#approach">Our approach</a>
          <a href="/#products">Products</a>
          <a href="/#about">About</a>
        </nav>
        <a
          className="button button-small header-cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
        >
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          ref={menuButton}
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="mobile-menu"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) setOpen(false);
        }}
      >
        <div className="container">
          <p className="eyebrow">Services</p>
          {servicePages.map((page) => (
            <a href={`/${page.slug}`} key={page.slug}>
              {page.shortName}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <div className="mobile-secondary">
            <a href="/#approach">Our approach</a>
            <a href="/#products">Products</a>
            <a href="/#about">About</a>
          </div>
          <a
            className="button"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
          >
            Talk on WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>
    </header>
  );
}
