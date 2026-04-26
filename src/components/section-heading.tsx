type SectionHeadingProps = {
  tag: string;
  title: string;
  intro?: string;
  dark?: boolean;
};

export function SectionHeading({ tag, title, intro, dark = false }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <span className={`section-tag ${dark ? "section-tag-dark" : ""}`}>{tag}</span>
      <div className={`section-title ${dark ? "section-title-dark" : ""} max-w-[14ch]`}>{title}</div>
      {intro ? <p className={`section-copy ${dark ? "section-copy-dark" : ""}`}>{intro}</p> : null}
    </div>
  );
}
