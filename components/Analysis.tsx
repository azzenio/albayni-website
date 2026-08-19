import Section from "./Section";
import Reveal from "./Reveal";
import { analysis } from "@/content/site";

export default function Analysis() {
  return (
    <Section>
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{analysis.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{analysis.text}</p>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {analysis.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="h-full rounded-card border border-line bg-paper p-5">
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-body/80">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={140}>
        <div className="mt-6 rounded-card border-r-4 border-copper bg-sand/50 p-5">
          <p className="leading-relaxed text-ink">{analysis.dataRule}</p>
        </div>
        <p className="mt-5 max-w-3xl font-heading text-lg font-semibold leading-relaxed text-ink">
          {analysis.strength}
        </p>
      </Reveal>
    </Section>
  );
}
