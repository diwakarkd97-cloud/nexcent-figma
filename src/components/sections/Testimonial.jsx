import Container from "../ui/Container";
import LogoTile from "../cards/LogoTile";
import { ArrowRight } from "../ui/Icons";
import { testimonial as t } from "../../data/content";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <Container className="testimonial__inner">
        <img className="testimonial__photo" src={t.image} alt="" width="326" height="326" loading="lazy" />
        <figure className="testimonial__body">
          <blockquote>{t.quote}</blockquote>
          <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
          <div className="testimonial__logos">
            <ul>
              {t.logos.map((src, i) => <li key={src}><LogoTile src={src} active={i === 0} /></li>)}
            </ul>
            <a href="#community">{t.cta} <ArrowRight size={24} /></a>
          </div>
        </figure>
      </Container>
    </section>
  );
}
