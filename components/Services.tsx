import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

// Bento cells: exactly one per service, with wide/narrow rhythm so the grid
// fills without an empty tile. Backgrounds vary cell to cell.
const cellTone = [
  "bg-accent-soft",
  "bg-surface",
  "bg-background",
  "bg-surface tone-dots",
];

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
            What I bring to the table
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.07}
              className={service.span === "wide" ? "md:col-span-2" : ""}
            >
              <article
                className={`flex h-full flex-col rounded-panel border border-line p-7 sm:p-9 ${cellTone[i]}`}
              >
                <h3 className="display-sm text-xl sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] tracking-tight text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
