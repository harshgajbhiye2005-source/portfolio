import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">What I do</p>
          <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
            Skills I bring to the table
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-lg sm:p-10">
                <span className="display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-4 text-2xl sm:text-[1.7rem]">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-muted">
                  {service.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-muted"
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
