import Section from "./Section";
import Reveal from "./Reveal";
import { difference } from "@/content/site";

export default function Difference() {
  return (
    <Section id="difference">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{difference.title}</h2>
      </Reveal>
      <Reveal delay={100}>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-card border border-line bg-sand/40 p-6">
            <h3 className="mb-4 text-lg font-semibold text-ink/70">{difference.general.title}</h3>
            <ul className="space-y-2.5">
              {difference.general.items.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-body/80">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/35" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card border border-copper/50 bg-paper p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-copper-deep">{difference.albayni.title}</h3>
            <ul className="space-y-2.5">
              {difference.albayni.items.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-body">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal delay={180}>
        <p className="mx-auto mt-8 max-w-3xl border-r-4 border-copper pr-5 font-heading text-lg font-semibold leading-relaxed text-ink md:text-xl">
          {difference.rule}
        </p>
      </Reveal>
    </Section>
  );
}
