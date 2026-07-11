import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

const statusStyles: Record<string, string> = {
  Completed: "bg-emerald-100 text-emerald-800",
  "In progress": "bg-amber-100 text-amber-800",
};

export default function Work() {
  return (
    <section id="work" className="bg-surface px-5 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="display mt-3 max-w-2xl text-4xl sm:text-5xl">
            Work I&apos;ve shipped for real clients
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-white p-8 transition-shadow duration-300 hover:shadow-lg sm:p-10">
                <div>
                  <span
                    className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                      statusStyles[project.year] ?? "bg-surface text-muted"
                    }`}
                  >
                    {project.year}
                  </span>
                  <h3 className="display mt-5 text-2xl sm:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm font-medium text-muted">
                  {project.client}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
