import "./CarouselDots.css";
export default function CarouselDots({ count = 3, active = 0 }) {
  return (
    <div className="dots" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => <span key={i} className={i === active ? "is-active" : ""} />)}
    </div>
  );
}
