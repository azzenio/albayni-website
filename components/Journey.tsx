import Section from "./Section";
import Reveal from "./Reveal";
import { journey } from "@/content/site";

export default function Journey() {
  return (
    <Section id="journey" tone="sand">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{journey.title}</h2>
        <p className="mt-3 text-body/80">{journey.subtitle}</p>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
        <Reveal delay={80}>
          <ol className="space-y-3">
            {journey.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3.5">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink font-heading text-xs font-semibold text-paper"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span className="leading-relaxed text-body">{s}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-card border border-copper/40 bg-paper p-6">
            <h3 className="text-lg font-semibold text-ink">{journey.chatTitle}</h3>
            <ul className="mt-4 space-y-2.5">
              {journey.chatExamples.map((c) => (
                <li key={c} className="rounded-xl bg-sand/70 px-4 py-2.5 text-sm text-ink">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-body/80">
              {journey.chatRule}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
