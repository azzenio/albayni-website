import Section from "./Section";
import Reveal from "./Reveal";
import { problem } from "@/content/site";

function Column({ title, items, highlighted }: { title: string; items: readonly string[]; highlighted?: boolean }) {
  return (
    <div
      className={`rounded-card border p-6 ${
        highlighted ? "border-copper/50 bg-paper shadow-sm" : "border-line bg-sand/50"
      }`}
    >
      <h3 className={`mb-4 text-lg font-semibold ${highlighted ? "text-copper-deep" : "text-ink"}`}>{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-body">
            <span className={`h-1.5 w-1.5 rounded-full ${highlighted ? "bg-copper" : "bg-ink/40"}`} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Problem() {
  return (
    <Section id="idea" tone="sand">
      <Reveal>
        <h2 className="max-w-2xl text-2xl font-bold md:text-4xl">{problem.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{problem.text}</p>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Column title={problem.before.title} items={problem.before.items} />
          <Column title={problem.after.title} items={problem.after.items} highlighted />
        </div>
        <p className="mt-4 text-sm text-body/70">{problem.note}</p>
      </Reveal>
    </Section>
  );
}
