import Section from "./Section";
import Reveal from "./Reveal";
import { definition } from "@/content/site";

export default function Definition() {
  return (
    <Section>
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{definition.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{definition.text}</p>
      </Reveal>
      <Reveal delay={100}>
        <ul className="mt-8 flex flex-wrap gap-3">
          {definition.examples.map((combo) => (
            <li
              key={combo.join("-")}
              className="rounded-full border border-line bg-sand/60 px-5 py-2 text-sm text-ink"
            >
              {combo.join(" × ")}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
