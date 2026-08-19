import Section from "./Section";
import Reveal from "./Reveal";
import RegionsDiagram from "./RegionsDiagram";
import { regions } from "@/content/site";

export default function Regions() {
  return (
    <Section id="how" tone="ink">
      <Reveal>
        <h2 className="text-2xl font-bold text-paper md:text-4xl">{regions.title}</h2>
        <p className="mt-3 text-paper/70">{regions.subtitle}</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-9 hidden rounded-card bg-paper p-5 md:block">
          <RegionsDiagram />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {regions.items.map((r, i) => (
          <Reveal key={r.title} delay={i * 110}>
            <div className="h-full rounded-card border border-paper/15 bg-paper/5 p-6">
              <span className="font-heading text-sm font-semibold text-copper">{r.no}</span>
              <h3 className="mt-2 text-lg font-semibold text-paper">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-paper/75">{r.text}</p>
              <ul className="mt-4 space-y-1.5 border-t border-paper/15 pt-4">
                {r.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-paper/70">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={180}>
        <p className="mt-8 rounded-card border border-copper/40 bg-copper/10 p-5 leading-relaxed text-paper/85">
          {regions.chatNote}
        </p>
      </Reveal>
    </Section>
  );
}
