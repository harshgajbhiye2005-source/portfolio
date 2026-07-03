"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { nav, site } from "@/lib/content";
import RollLink from "@/components/RollLink";

export default function Nav() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 160 && !open);
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: hidden ? "-100%" : "0%", opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[95rem] items-center justify-between px-5 py-5 sm:px-12">
        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-xl font-bold uppercase tracking-tight"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-foreground text-sm"
          >
            ✦
          </span>
          {site.brand}
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-tight text-foreground transition-opacity hover:opacity-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <RollLink label="Let’s talk" href="#contact" />
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col border-t border-line px-5 pb-6 md:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-lg font-semibold uppercase tracking-tight"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-4 text-lg font-semibold uppercase tracking-tight"
          >
            [ Let’s talk ]
          </a>
        </motion.nav>
      )}
    </motion.header>
  );
}
