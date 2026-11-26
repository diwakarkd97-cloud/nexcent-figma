import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../cards/FeatureCard";
import { community } from "../../data/content";
import "./Features.css";

export default function Features() {
  return (
    <section id="features" className="features">
      <SectionHeading title={community.title} text={community.text} textWidth="none" />
      <Container className="features__grid">
        {community.cards.map((c) => <FeatureCard key={c.id} {...c} />)}
      </Container>
    </section>
  );
}
