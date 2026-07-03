"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import RollLink from "@/components/RollLink";
import { projects } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[95rem] px-5 py-32 sm:px-12">
      <Reveal>
        <h2 className="display text-[clamp(2.6rem,8.3vw,7.5rem)]">
          Featured
          <br />
          Works
        </h2>
      </Reveal>

      <div className="mt-20">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.07}>
            <motion.a
              href="#contact"
              whileHover="hover"
              className="group grid grid-cols-2 items-baseline gap-4 border-t border-line py-9 last:border-b sm:grid-cols-[1.6fr_1fr_1fr]"
            >
              <motion.h5
                variants={{ hover: { x: 16 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="display text-xl text-muted transition-colors duration-300 group-hover:text-foreground sm:text-[2rem]"
              >
                {project.title}
              </motion.h5>
              <span className="text-right text-base text-muted sm:text-center">
                {project.year}
              </span>
              <span className="hidden text-right text-base text-muted sm:block">
                {project.client}
              </span>
            </motion.a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-16 text-center">
        <RollLink label="More works" href="#contact" />
      </Reveal>
    </section>
  );
}
