"use client";

/**
 * Bracketed link with the signature text-roll hover: the label slides up
 * and an identical copy rolls in from below.
 */
export default function RollLink({
  label,
  href,
  className = "",
  invert = false,
}: {
  label: string;
  href: string;
  className?: string;
  invert?: boolean;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-baseline gap-1.5 text-sm font-semibold uppercase tracking-tight ${
        invert ? "text-white" : "text-foreground"
      } ${className}`}
    >
      <span aria-hidden>[</span>
      <span className="relative inline-block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden
          className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full"
        >
          {label}
        </span>
      </span>
      <span aria-hidden>]</span>
    </a>
  );
}
