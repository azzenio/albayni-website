import Section from "./Section";
import Reveal from "./Reveal";
import { impact } from "@/content/site";

export default function Impact() {
  return (
    <Section id="impact">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{impact.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{impact.text}</p>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-10 rounded-card border border-line bg-sand/50 p-6 md:p-8">
          <h3 className="text-sm font-semibold text-copper-deep">{impact.goalsTitle}</h3>
          <dl className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impact.goals.map((g) => (
              <div key={g.label}>
                <dd className="font-heading text-2xl font-bold text-ink md:text-3xl">{g.value}</dd>
                <dt className="mt-1 text-sm text-body/80">{g.label}</dt>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-line pt-4 text-sm font-medium text-copper-deep">
            {impact.disclaimer}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
