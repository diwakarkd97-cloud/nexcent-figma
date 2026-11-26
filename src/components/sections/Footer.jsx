import Container from "../ui/Container";
import { Send } from "../ui/Icons";
import { footer as f } from "../../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__brand">
          <img src={f.logo} alt="Nexcent" width="191" height="30" />
          <p>{f.copyright.map((line) => <span key={line}>{line}</span>)}</p>
          <ul className="footer__social">
            {f.social.map((s) => (
              <li key={s.id}><a href="#home" aria-label={s.label}><img src={s.icon} alt="" width="32" height="32" /></a></li>
            ))}
          </ul>
        </div>
        <div className="footer__links">
          {f.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3>{col.title}</h3>
              <ul>{col.links.map((l) => <li key={l}><a href="#home">{l}</a></li>)}</ul>
            </nav>
          ))}
          <div className="footer__news">
            <h3>{f.newsletter.title}</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={f.newsletter.placeholder} aria-label="Email address" required />
              <button type="submit" aria-label="Subscribe"><Send size={18} /></button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}
