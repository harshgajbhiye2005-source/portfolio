import { footerColumns, site } from "@/lib/content";
import RollLink from "@/components/RollLink";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-[95rem] px-5 py-20 sm:px-12">
        {/* Socials + back to top */}
        <div className="flex items-center justify-between">
          <nav className="flex flex-wrap gap-8 sm:gap-14">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm font-semibold uppercase tracking-tight transition-opacity hover:opacity-50"
              >
                {social.label}
              </a>
            ))}
          </nav>
          <a
            href="#top"
            aria-label="Back to top"
            className="flex h-14 w-14 items-center justify-center border border-line-invert text-xl transition-colors duration-300 hover:bg-white hover:text-dark"
          >
            ↑
          </a>
        </div>

        {/* Giant name */}
        <div className="mt-12 border-y border-line-invert py-10">
          <p className="display whitespace-nowrap text-center text-[clamp(2.4rem,10.5vw,10rem)]">
            {site.name}
          </p>
        </div>

        {/* Columns */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <h3 className="display max-w-sm text-3xl leading-tight sm:text-5xl">
              Thanks for visiting my creative portfolio
            </h3>
            <p className="mt-8 max-w-xs text-base leading-relaxed text-white/80">
              Thank you for exploring my work. If you have any questions or
              ideas, reach out any time.
            </p>
            <div className="mt-10">
              <RollLink label="Get in touch" href="#contact" invert />
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((col) => (
              <nav key={col.heading} className="flex flex-col gap-4">
                <span className="display text-base">{col.heading}</span>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#top"
                    className="text-sm font-semibold uppercase tracking-tight text-white/70 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            ))}
            <nav className="flex flex-col gap-4">
              <span className="display text-base">Contact</span>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="text-sm font-semibold uppercase tracking-tight text-white/70 transition-colors hover:text-white"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-semibold uppercase tracking-tight text-white/70 transition-colors hover:text-white"
              >
                {site.email}
              </a>
              <div className="mt-2 flex gap-3">
                {["in", "ig", "fb"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="flex h-10 w-10 items-center justify-center border border-line-invert text-xs font-bold uppercase transition-colors duration-300 hover:bg-white hover:text-dark"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col gap-2 border-t border-line-invert pt-8 text-xs uppercase tracking-wide text-white/50 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            {site.role} — {site.location}
          </span>
        </div>
      </div>
    </footer>
  );
}
