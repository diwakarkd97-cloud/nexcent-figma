import "./StatItem.css";
export default function StatItem({ icon, value, label }) {
  return (
    <div className="stat">
      <img src={icon} alt="" width="48" height="48" />
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}
