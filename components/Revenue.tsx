import Section from "./Section";
import Reveal from "./Reveal";
import { revenue } from "@/content/site";

export default function Revenue() {
  return (
    <Section>
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{revenue.title}</h2>
        <p className="mt-3 text-body/80">{revenue.text}</p>
      </Reveal>
      <Reveal delay={90}>
        <ul className="mt-7 flex flex-wrap gap-3">
          {revenue.items.map((r) => (
            <li key={r} className="rounded-full border border-line bg-sand/50 px-5 py-2 text-sm text-ink">
              {r}
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-card border-r-4 border-copper bg-sand/40 p-5">
          <p className="leading-relaxed text-ink">{revenue.principle}</p>
        </div>
        <p className="mt-3 text-sm text-body/65">{revenue.note}</p>
      </Reveal>
    </Section>
  );
}
