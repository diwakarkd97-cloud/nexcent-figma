import "./LogoTile.css";
export default function LogoTile({ src, active = false }) {
  return <span className={`logo-tile ${active ? "is-active" : ""}`}><img src={src} alt="" /></span>;
}
