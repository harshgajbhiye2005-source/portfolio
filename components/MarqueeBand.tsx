/**
 * Full-bleed marquee band with giant uppercase words separated by circular
 * image chips — used once dark and once light.
 */
export default function MarqueeBand({
  words,
  dark = false,
  reverse = false,
}: {
  words: string[];
  dark?: boolean;
  reverse?: boolean;
}) {
  const items = [...words, ...words];

  return (
    <div
      aria-hidden
      className={`overflow-hidden py-16 ${dark ? "bg-dark text-white" : "bg-background text-foreground"}`}
    >
      <div
        className={`marquee-track items-center ${reverse ? "marquee-reverse" : ""}`}
        style={{ "--marquee-duration": "40s" } as React.CSSProperties}
      >
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="display whitespace-nowrap px-8 text-[clamp(4rem,12vw,11rem)]">
              {word}
            </span>
            {/* Circular image chip placeholder */}
            <span
              className={`block h-[clamp(3.5rem,9vw,8.5rem)] w-[clamp(3.5rem,9vw,8.5rem)] shrink-0 rounded-full bg-gradient-to-br ${
                dark
                  ? "from-neutral-500 to-neutral-800"
                  : "from-neutral-300 to-neutral-500"
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
