import Button from "../ui/Button";
import { ArrowRight } from "../ui/Icons";
import { cta } from "../../data/content";
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section id="register" className="cta">
      <h2>{cta.title}</h2>
      <Button href="#register" icon={<ArrowRight size={16} />}>{cta.button}</Button>
    </section>
  );
}
