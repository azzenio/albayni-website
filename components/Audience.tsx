import Section from "./Section";
import Reveal from "./Reveal";
import { audience } from "@/content/site";

export default function Audience() {
  return (
    <Section id="audience" tone="sand">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{audience.title}</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {audience.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <div className="h-full rounded-card border-r-4 border-copper bg-paper p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-body/80">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
