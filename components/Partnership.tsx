import Section from "./Section";
import Reveal from "./Reveal";
import { partnership } from "@/content/site";

export default function Partnership() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="rounded-card bg-ink p-8 text-paper md:p-14">
          <h2 className="max-w-2xl text-2xl font-bold text-paper md:text-4xl">{partnership.title}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/80">{partnership.text}</p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {partnership.options.map((o) => (
              <li key={o} className="rounded-full border border-copper/50 bg-copper/10 px-6 py-2.5 font-medium text-copper">
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-paper/15 pt-5 text-sm text-paper/60">{partnership.channelNote}</p>
        </div>
      </Reveal>
    </Section>
  );
}
