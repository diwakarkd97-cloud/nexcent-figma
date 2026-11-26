import { useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ArrowRight } from "../ui/Icons";
import { navLinks } from "../../data/content";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Container className="header__inner">
        <a href="#home" className="header__logo"><img src="/assets/logo.svg" alt="Nexcent" width="155" height="24" /></a>
        <nav className={`header__nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
          </ul>
          <Button href="#register" icon={<ArrowRight size={16} />}>Register Now</Button>
        </nav>
        <button className="header__toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </Container>
    </header>
  );
}
