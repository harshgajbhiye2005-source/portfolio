import Reveal from "@/components/Reveal";
import { achievements } from "@/lib/content";

export default function Achievements() {
  return (
    <section className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
            On and off the field
          </h2>
        </Reveal>

        {/* Stat strip, not cards: a single hairline per entry organizes the
            grid, and the value carries the weight. */}
        <div className="mt-12 grid gap-x-12 gap-y-2 md:grid-cols-2">
          {achievements.map((item, i) => (
            <Reveal key={item.value} delay={i * 0.06}>
              <div className="border-t border-line py-7">
                <p className="font-mono text-xs text-accent">{item.label}</p>
                <p className="display-sm mt-3 text-2xl sm:text-[1.7rem]">
                  {item.value}
                </p>
                <p className="mt-2 max-w-[44ch] text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
