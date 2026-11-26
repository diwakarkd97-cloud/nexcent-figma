import Container from "../ui/Container";
import Button from "../ui/Button";
import "./Spotlight.css";

/** Illustration on the left, copy + button on the right. Reused for the two feature rows. */
export default function Spotlight({ id, image, title, text, cta }) {
  return (
    <section id={id} className="spotlight">
      <Container className="spotlight__inner">
        <img className="spotlight__image" src={image} alt="" width="442" height="433" loading="lazy" />
        <div className="spotlight__copy">
          <h2>{title}</h2>
          <p>{text}</p>
          <Button href="#features">{cta}</Button>
        </div>
      </Container>
    </section>
  );
}
