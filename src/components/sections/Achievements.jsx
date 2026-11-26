import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import StatItem from "../cards/StatItem";
import { achievements as d } from "../../data/content";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section className="achievements">
      <Container className="achievements__inner">
        <div className="achievements__heading">
          <SectionHeading align="left" title={d.title} highlight={d.highlight} />
          <p>{d.text}</p>
        </div>
        <div className="achievements__stats">
          {d.stats.map((s) => <StatItem key={s.id} {...s} />)}
        </div>
      </Container>
    </section>
  );
}
