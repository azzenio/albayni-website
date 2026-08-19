import Section from "./Section";
import Reveal from "./Reveal";
import { glossary } from "@/content/site";

export default function Glossary() {
  return (
    <Section tone="sand">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{glossary.title}</h2>
        <p className="mt-3 text-body/80">{glossary.text}</p>
      </Reveal>
      <Reveal delay={90}>
        <dl className="mt-8 grid gap-x-8 gap-y-5 md:grid-cols-2">
          {glossary.items.map((g) => (
            <div key={g.term} className="border-r-2 border-copper/40 pr-4">
              <dt className="font-semibold text-ink">{g.term}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-body/80">{g.def}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
