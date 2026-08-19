import Section from "./Section";
import Reveal from "./Reveal";
import { arabicFirst } from "@/content/site";

export default function ArabicFirst() {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-4xl">{arabicFirst.title}</h2>
          <p className="mt-4 text-lg leading-relaxed">{arabicFirst.text}</p>
          <p className="mt-6 border-r-4 border-copper pr-4 font-heading text-xl font-semibold text-ink">
            {arabicFirst.message}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="space-y-3">
            {arabicFirst.layers.map((l, i) => (
              <li
                key={l}
                className="rounded-card p-4 text-ink"
                style={{ background: ["#EDE4D3", "#E7DCC8", "#E0D4BD", "#D8CDB8"][i] }}
              >
                {l}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
