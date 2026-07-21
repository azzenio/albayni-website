import Section from "./Section";
import Reveal from "./Reveal";
import { roadmap } from "@/content/site";

export default function Roadmap() {
  return (
    <Section id="roadmap" tone="sand">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{roadmap.title}</h2>
      </Reveal>
      <ol className="relative mt-10 space-y-8 border-r-2 border-line pr-6 md:pr-8">
        {roadmap.stages.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
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
                    المرحلة الحالية
                  </span>
                )}
              </div>
              <p className="mt-1.5 leading-relaxed text-body/80">{s.text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
