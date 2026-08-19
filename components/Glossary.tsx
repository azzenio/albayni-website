import Section from "./Section";
import Reveal from "./Reveal";
import { glossary } from "@/content/site";

export default function Glossary() {
  return (
    <Section tone="sand">
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{glossary.title}</h2>
        <p className="mt-3 text-body/80">{glossary.text}</p>
      </Reveal>
      <Reveal delay={90}>
        <div className="mt-8 overflow-hidden rounded-card border border-line bg-paper">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-ink text-paper">
                <th scope="col" className="w-1/3 px-4 py-3 text-sm font-semibold md:px-6">
                  المصطلح
                </th>
                <th scope="col" className="px-4 py-3 text-sm font-semibold md:px-6">
                  التعريف
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {glossary.items.map((g) => (
                <tr key={g.term} className="align-top">
                  <th scope="row" className="px-4 py-3.5 font-semibold text-ink md:px-6">
                    {g.term}
                  </th>
                  <td className="px-4 py-3.5 leading-relaxed text-body/85 md:px-6">{g.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
