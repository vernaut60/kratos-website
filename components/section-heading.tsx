type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  lowercase?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  className = "",
  align = "left",
  lowercase = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {label}
      </p>
      <h2
        className={`font-display mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-balance md:text-5xl ${
          lowercase ? "normal-case" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
