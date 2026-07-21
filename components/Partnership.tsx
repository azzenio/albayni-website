import Section from "./Section";
import Reveal from "./Reveal";
import { partnership, site } from "@/content/site";

export default function Partnership() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="rounded-card bg-ink p-8 text-paper md:p-14">
          <h2 className="max-w-2xl text-2xl font-bold text-paper md:text-4xl">{partnership.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/80">{partnership.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {partnership.options.map((o) => (
              <a
                key={o.label}
                href={`mailto:${site.email}?subject=${encodeURIComponent(o.subject)}`}
                className="rounded-full bg-copper px-6 py-3 font-medium text-paper transition-colors hover:bg-copper-deep"
              >
                {o.label}
              </a>
            ))}
          </div>
          <p className="mt-6 text-sm text-paper/60">
            البريد الحالي عنوان مؤقت لأغراض العرض، ويُستبدل بالقناة الرسمية عند اعتمادها.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
