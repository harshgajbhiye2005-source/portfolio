import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { projects } from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Work() {
  const lead = projects.find((p) => p.lead);
  const rest = projects.filter((p) => !p.lead);

  return (
    <section id="work" className="bg-surface px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
            Work I&apos;ve shipped for real clients
          </h2>
        </Reveal>

        {/* Lead project: copy on one side, the live site on the other. */}
        {lead && (
          <Reveal delay={0.05}>
            <article className="mt-12 grid items-center gap-8 rounded-panel border border-line bg-background p-8 sm:p-10 md:grid-cols-2 md:gap-12 lg:p-12">
              <div>
                <p className="font-mono text-xs text-muted">
                  {lead.status} · {lead.client}
                </p>
                <h3 className="display mt-4 text-3xl sm:text-4xl">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-[46ch] leading-relaxed text-muted">
                  {lead.summary}
                </p>
                {lead.href && (
                  <a
                    href={lead.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Visit site
                    <ArrowUpRightIcon size={15} weight="bold" />
                  </a>
                )}
              </div>

              {lead.image && (
                <div className="overflow-hidden rounded-panel border border-line">
                  <Image
                    src={`${basePath}${lead.image.src}`}
                    alt={lead.image.alt}
                    width={lead.image.width}
                    height={lead.image.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              )}
            </article>
          </Reveal>
        )}

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={0.1 + i * 0.07}>
              <article
                className={`flex h-full flex-col overflow-hidden rounded-panel border border-line ${
                  project.image ? "bg-background" : "bg-accent-soft"
                }`}
              >
                {project.image && (
                  <Image
                    src={`${basePath}${project.image.src}`}
                    alt={project.image.alt}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full border-b border-line"
                  />
                )}

                {/* Without an image the card would stretch to match its
                    taller neighbour and open a void, so centre it instead. */}
                <div
                  className={`flex flex-1 flex-col p-8 sm:p-9 ${
                    project.image ? "" : "justify-center"
                  }`}
                >
                  <p className="font-mono text-xs text-muted">
                    {project.status} · {project.client}
                  </p>
                  <h3 className="display-sm mt-3 text-2xl">{project.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-200 hover:border-accent hover:text-accent"
                      >
                        Visit site
                        <ArrowUpRightIcon size={13} weight="bold" />
                      </a>
                    )}
                    {project.links?.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-line-strong px-4 py-2 text-xs font-semibold whitespace-nowrap transition-colors duration-200 hover:border-accent hover:text-accent"
                      >
                        {link.label}
                        <ArrowUpRightIcon size={13} weight="bold" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
