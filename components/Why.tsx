import Reveal from "@/components/Reveal";
import { whyCards } from "@/lib/content";

export default function Why() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      {/* Sticky heading column beside a flowing list. No cards: the spacing
          and a single hairline between entries carry the grouping. */}
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl lg:sticky lg:top-28">
              Why work with me?
            </h2>
          </Reveal>
        </div>

        <div>
          {whyCards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.07}>
              <div
                className={`py-8 ${i > 0 ? "border-t border-line" : "lg:pt-0"}`}
              >
                <h3 className="display-sm text-accent">{card.tag}</h3>
                <p className="mt-2 max-w-[52ch] text-lg leading-relaxed">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
