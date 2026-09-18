export function SectionHeading({ id, kicker, title, description, align = 'left' }) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="section-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
