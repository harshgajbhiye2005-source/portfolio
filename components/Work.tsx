import Reveal from "@/components/Reveal";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { projects } from "@/lib/content";

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

        {/* Lead project: one wide feature panel. */}
        {lead && (
          <Reveal delay={0.05}>
            {/* TODO: add a screenshot of the live PS Group site at
                1440x900 and place it in the right-hand column. */}
            <article className="mt-12 grid gap-8 rounded-panel border border-line bg-background p-8 sm:p-12 md:grid-cols-[1.25fr_0.75fr] md:items-end">
              <div>
                <p className="font-mono text-xs text-muted">
                  {lead.status} · {lead.client}
                </p>
                <h3 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">
                  {lead.title}
                </h3>
                <p className="mt-4 max-w-[48ch] leading-relaxed text-muted">
                  {lead.summary}
                </p>
              </div>

              {lead.href && (
                <div className="md:text-right">
                  <a
                    href={lead.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-semibold whitespace-nowrap text-accent-fg transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Visit site
                    <ArrowUpRightIcon size={15} weight="bold" />
                  </a>
                </div>
              )}
            </article>
          </Reveal>
        )}

        {/* Supporting projects. */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.title} delay={0.1 + i * 0.07}>
              <article className="h-full rounded-panel border border-line bg-background p-8 sm:p-9">
                <p className="font-mono text-xs text-muted">
                  {project.status} · {project.client}
                </p>
                <h3 className="display-sm mt-3 text-2xl">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {project.summary}
                </p>

                {project.links && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.links.map((link) => (
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
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
