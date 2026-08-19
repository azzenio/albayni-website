import Section from "./Section";
import Reveal from "./Reveal";
import { roadmap } from "@/content/site";

export default function Roadmap() {
  return (
    <Section id="roadmap" tone="sand">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{roadmap.title}</h2>
      </Reveal>
      <ol className="relative mt-9 space-y-7 border-r-2 border-line pr-6 md:pr-8">
        {roadmap.stages.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <li className="relative">
              <span
                className={`absolute -right-[31px] top-1.5 h-4 w-4 rounded-full border-2 md:-right-[41px] ${
                  s.current ? "border-copper bg-copper" : "border-ink/30 bg-paper"
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                {s.current && (
                  <span className="rounded-full bg-copper/15 px-3 py-0.5 text-xs font-medium text-copper-deep">
                    نحن هنا
                  </span>
                )}
              </div>
              <p className="mt-1.5 leading-relaxed text-body/80">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={160}>
        <div className="mt-10 rounded-card border border-line bg-paper p-6">
          <h3 className="text-sm font-semibold text-copper-deep">{roadmap.targetsTitle}</h3>
          <dl className="mt-4 grid gap-6 sm:grid-cols-3">
            {roadmap.targets.map((t) => (
              <div key={t.label}>
                <dd className="font-heading text-2xl font-bold text-ink md:text-3xl">{t.value}</dd>
                <dt className="mt-1 text-sm text-body/80">{t.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-5 border-t border-line pt-4 text-sm font-medium text-copper-deep">
            {roadmap.targetsNote}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
