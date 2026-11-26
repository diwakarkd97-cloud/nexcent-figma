import "./Button.css";
/** Primary button from the Figma set. `icon` renders after the label. Renders <a> when href is set. */
export default function Button({ href, icon, children, className = "", ...rest }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag className={`btn ${className}`} href={href} {...(href ? {} : { type: "button" })} {...rest}>
      <span>{children}</span>
      {icon}
    </Tag>
  );
}
