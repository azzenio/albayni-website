import Section from "./Section";
import Reveal from "./Reveal";
import { responsibleAI } from "@/content/site";

export default function ResponsibleAI() {
  return (
    <Section tone="ink">
      <Reveal>
        <h2 className="text-2xl font-bold text-paper md:text-4xl">{responsibleAI.title}</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {responsibleAI.principles.map((p, i) => (
          <Reveal key={p} delay={i * 80}>
            <div className="h-full rounded-card border border-paper/15 bg-paper/5 p-5 text-center">
              <span className="mx-auto block h-2 w-2 rounded-full bg-copper" aria-hidden="true" />
              <p className="mt-3 font-medium text-paper">{p}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={150}>
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-paper/80">
          {responsibleAI.text}
        </p>
      </Reveal>
    </Section>
  );
}
