import Section from "./Section";
import Reveal from "./Reveal";
import { how } from "@/content/site";

export default function HowItWorks() {
  return (
    <Section id="how" tone="ink">
      <Reveal>
        <h2 className="text-2xl font-bold text-paper md:text-4xl">{how.title}</h2>
        <p className="mt-3 text-paper/70">{how.subtitle}</p>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-4">
        {how.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 100}>
            <div className="h-full rounded-card border border-paper/15 bg-paper/5 p-6">
              <span className="font-heading text-sm font-semibold text-copper" aria-hidden="true">
                {["الخطوة الأولى", "الخطوة الثانية", "الخطوة الثالثة", "الخطوة الرابعة"][i]}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-paper">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-paper/75">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
