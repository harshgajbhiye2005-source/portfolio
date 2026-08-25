"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { site } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Motivation: hierarchy. Content arrives in reading order so the eye lands
  // on the headline first and the CTA last.
  const rise = (delay: number) => ({
    "data-reveal": true,
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: reduceMotion ? 0 : delay, ease },
  });

  return (
    <section
      id="top"
      className="flex min-h-[100dvh] items-center px-5 pt-24 pb-16 sm:px-8"
    >
      {/* Asymmetric split: the message takes the wider column. */}
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.p
            {...rise(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-xs text-muted"
          >
            {/* Real semantic state: currently open to work. */}
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.availability} · {site.location}
          </motion.p>

          <motion.h1
            {...rise(0.15)}
            className="display mt-6 text-[2.6rem] sm:text-6xl lg:text-[4rem]"
          >
            Marketing graduate who{" "}
            <span className="text-accent">ships websites</span>.
          </motion.h1>

          <motion.p
            {...rise(0.27)}
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted"
          >
            {site.intro}
          </motion.p>

          <motion.div
            {...rise(0.38)}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              {site.contactCta}
            </a>
            <a
              href={`${basePath}${site.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-200 hover:border-accent hover:text-accent"
            >
              Resume
              <ArrowUpRightIcon size={15} weight="bold" />
            </a>
          </motion.div>
        </div>

        {/* Portrait, offset against a thin accent frame for asymmetry. */}
        <motion.div
          data-reveal
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.2, ease }}
          className="relative mx-auto w-full max-w-[19rem] lg:mx-0 lg:ml-auto lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-panel border border-accent/45 sm:translate-x-4 sm:translate-y-4"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-panel bg-surface">
            <Image
              src={`${basePath}/portrait.jpg`}
              alt={`${site.name}, ${site.role}`}
              fill
              priority
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 19rem, 80vw"
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
