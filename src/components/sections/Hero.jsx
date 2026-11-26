import Container from "../ui/Container";
import Button from "../ui/Button";
import CarouselDots from "../ui/CarouselDots";
import { hero } from "../../data/content";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Container className="hero__inner">
        <div className="hero__copy">
          <h1>{hero.title} <span>{hero.highlight}</span></h1>
          <p>{hero.text}</p>
          <Button href="#register">{hero.cta}</Button>
        </div>
        <img className="hero__image" src={hero.image} alt="" width="391" height="407" />
      </Container>
      <CarouselDots count={3} active={0} />
    </section>
  );
}
