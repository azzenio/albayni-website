import Section from "./Section";
import Reveal from "./Reveal";
import MapLayersDiagram from "./MapLayersDiagram";
import { knowledgeMap } from "@/content/site";

export default function KnowledgeMap() {
  return (
    <Section id="map">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{knowledgeMap.title}</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed">{knowledgeMap.text}</p>
      </Reveal>

      <Reveal delay={90}>
        <dl className="mt-8 grid grid-cols-2 gap-5 rounded-card border border-line bg-sand/50 p-6 md:grid-cols-4">
          {knowledgeMap.stats.map((s) => (
            <div key={s.label}>
              <dd className="font-heading text-2xl font-bold text-ink md:text-3xl">{s.value}</dd>
              <dt className="mt-1 text-sm text-body/80">{s.label}</dt>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={130}>
        <div className="mt-8 hidden md:block">
          <MapLayersDiagram />
        </div>
      </Reveal>

      <Reveal delay={160}>
        <h3 className="mt-8 text-sm font-semibold text-copper-deep">{knowledgeMap.levelsTitle}</h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-4">
          {knowledgeMap.levels.map((l, i) => (
            <li key={l.name} className="rounded-card border border-line bg-paper p-4">
              <span className="text-xs text-body/60">{`المستوى ${["الأول", "الثاني", "الثالث", "الرابع"][i]}`}</span>
              <p className="mt-1 font-semibold text-ink">{l.name}</p>
              <p className="mt-1 text-sm text-body/75">{l.desc}</p>
              <p className="mt-3 border-t border-line pt-2 text-sm text-copper-deep">{l.example}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-6 text-sm leading-relaxed text-body/75">{knowledgeMap.networkNote}</p>
        <div className="mt-6 rounded-card border border-line bg-sand/40 p-6">
          <h3 className="text-lg font-semibold text-ink">{knowledgeMap.sourcesTitle}</h3>
          <p className="mt-2 leading-relaxed text-body/85">{knowledgeMap.sourcesText}</p>
          <p className="mt-3 border-t border-line pt-3 text-sm text-body/70">{knowledgeMap.sourcesNote}</p>
        </div>
      </Reveal>
    </Section>
  );
}
