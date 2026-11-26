import "./FeatureCard.css";
export default function FeatureCard({ icon, title, text }) {
  return (
    <article className="feature-card">
      <span className="feature-card__icon"><img src={icon} alt="" width="48" height="48" /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
