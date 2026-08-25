import Reveal from "@/components/Reveal";
import {
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
} from "@phosphor-icons/react/ssr";
import { site } from "@/lib/content";

const socialIcons = {
  LinkedIn: LinkedinLogoIcon,
  GitHub: GithubLogoIcon,
} as const;

const outlined =
  "inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-semibold whitespace-nowrap transition-colors duration-200 hover:border-accent hover:text-accent";

export default function Contact() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          {/* The one centered moment on the page: a closing CTA. Stays in the
              page theme rather than inverting to a dark block. */}
          <div className="rounded-panel border border-line bg-accent-soft px-6 py-16 text-center sm:px-16 sm:py-24">
            <h2 className="display mx-auto max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
              Let&apos;s build something together
            </h2>
            <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-muted">
              Whether it&apos;s a marketing role, an internship, or a website
              you need built, I&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <EnvelopeSimpleIcon size={16} weight="bold" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className={outlined}
              >
                <PhoneIcon size={16} weight="bold" />
                {site.phone}
              </a>
              <a
                href={`${basePath}${site.resume}`}
                target="_blank"
                rel="noopener noreferrer"
                className={outlined}
              >
                Resume
                <ArrowUpRightIcon size={15} weight="bold" />
              </a>
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={outlined}
                  >
                    {Icon && <Icon size={16} weight="bold" />}
                    {social.label}
                  </a>
                );
              })}
            </div>

            <p className="mt-10 font-mono text-xs text-muted">
              Based in {site.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
