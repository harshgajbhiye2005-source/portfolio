import Reveal from "@/components/Reveal";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <section className="bg-surface px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">Highlights</p>
          <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
            Achievements on and off the field
          </h2>
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-2xl border border-line bg-white">
          {achievements.map((item, i) => (
            <Reveal key={`${item.year}-${item.title}`} delay={i * 0.06}>
              <div className="grid items-center gap-3 border-b border-line p-6 last:border-b-0 sm:grid-cols-[140px_1fr_auto] sm:gap-6 sm:px-10">
                <span className="inline-flex w-fit rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold text-accent">
                  {item.year}
                </span>
                <h3 className="display text-xl sm:text-2xl">{item.title}</h3>
                <span className="text-sm font-medium text-muted">
                  {item.award}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
