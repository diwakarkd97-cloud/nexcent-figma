import "./SectionHeading.css";
/** Centered (default) or left-aligned heading + optional description. `highlight` is the green part. */
export default function SectionHeading({ title, highlight, text, align = "center", as: Tag = "h2", textWidth }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <Tag>
        {title}
        {highlight && <> <span>{highlight}</span></>}
      </Tag>
      {text && <p style={textWidth ? { maxWidth: textWidth } : undefined}>{text}</p>}
    </header>
  );
}
