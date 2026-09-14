export function SectionHeading({ kicker, title, description, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
