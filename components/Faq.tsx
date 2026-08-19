import Section from "./Section";
import Reveal from "./Reveal";
import { faq } from "@/content/site";

export default function Faq() {
  return (
    <Section>
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{faq.title}</h2>
      </Reveal>
      <Reveal delay={90}>
        <div className="mt-8 divide-y divide-line rounded-card border border-line bg-paper">
          {faq.items.map((item) => (
            <details key={item.q} className="group px-5 py-4 md:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
                {item.q}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-copper transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 leading-relaxed text-body/85">{item.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
