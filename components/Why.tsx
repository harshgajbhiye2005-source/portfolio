import Reveal from "@/components/Reveal";
import { whyCards } from "@/lib/content";

export default function Why() {
  return (
    <section id="about" className="px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">About me</p>
          <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
            Why work with me?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {whyCards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.08}>
              <article className="h-full rounded-2xl border border-line bg-white p-8">
                <span className="display text-lg text-accent">{card.tag}</span>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
