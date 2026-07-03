import Reveal from "@/components/Reveal";
import { clientLogos } from "@/lib/content";

/** Offset grid of bordered logo cells (3 / 4 / 2 layout like the reference). */
export default function LogoGrid() {
  const rows: { logos: string[]; cols: string; offset: string }[] = [
    { logos: clientLogos.slice(0, 3), cols: "sm:grid-cols-4", offset: "" },
    { logos: clientLogos.slice(3, 7), cols: "sm:grid-cols-4", offset: "" },
    { logos: clientLogos.slice(7, 9), cols: "sm:grid-cols-4", offset: "sm:[&>*:first-child]:col-start-2" },
  ];

  return (
    <section className="mx-auto max-w-[95rem] px-5 pb-32 sm:px-12">
      <div className="space-y-5">
        {rows.map((row, r) => (
          <div key={r} className={`grid grid-cols-2 gap-5 ${row.cols} ${row.offset}`}>
            {row.logos.map((logo, i) => (
              <Reveal key={logo} delay={(r * 3 + i) * 0.05}>
                <div className="flex aspect-[16/9] items-center justify-center border border-line transition-colors duration-300 hover:bg-surface">
                  <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    ◈ {logo}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
