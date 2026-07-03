"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

/** Carousel of giant uppercase quotes, two per slide, with dot pagination. */
export default function Testimonials() {
  const perSlide = 2;
  const slides: (typeof testimonials)[] = [];
  for (let i = 0; i < testimonials.length; i += perSlide) {
    slides.push(testimonials.slice(i, i + perSlide));
  }
  const [index, setIndex] = useState(0);

  return (
    <section className="mx-auto max-w-[95rem] overflow-hidden px-5 py-32 sm:px-12">
      <Reveal>
        <h2 className="display text-[clamp(2.4rem,8.3vw,7.5rem)]">
          Testimonials
        </h2>
      </Reveal>

      <div className="mt-20 min-h-[22rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-16 md:grid-cols-2"
          >
            {slides[index].map((t) => (
              <figure key={t.quote}>
                <figcaption className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-surface text-sm font-bold">
                    {t.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="display block text-xl">{t.name}</span>
                    <span className="block text-base text-muted">{t.role}</span>
                  </span>
                </figcaption>
                <blockquote className="display mt-10 text-xl leading-snug sm:text-[2rem]">
                  “ {t.quote} ”
                </blockquote>
              </figure>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="mt-16 flex justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonials ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              i === index ? "bg-foreground" : "bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
