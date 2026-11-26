import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { clients } from "../../data/content";
import "./Clients.css";

export default function Clients() {
  return (
    <section className="clients">
      <Container>
        <SectionHeading title={clients.title} text={clients.text} />
        <ul className="clients__logos">
          {clients.logos.map((src) => <li key={src}><img src={src} alt="" height="48" /></li>)}
        </ul>
      </Container>
    </section>
  );
}
