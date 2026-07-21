import Section from "./Section";
import Reveal from "./Reveal";
import { outputs } from "@/content/site";

const icons = [
  <path key="0" d="M12 3v6m0 0l4-3m-4 3L8 6m4 9v6m-6-3h12" />,
  <path key="1" d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.6.6 1 1.5 1 2.5h6c0-1 .4-1.9 1-2.5A6 6 0 0012 3z" />,
  <path key="2" d="M4 6h16M4 12h10M4 18h7" />,
  <path key="3" d="M5 4h11l3 3v13H5zM15 4v4h4" />,
  <path key="4" d="M12 8v5m0 3.5v.5M10.3 3.9L2.6 17a2 2 0 001.7 3h15.4a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />,
  <path key="5" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10" />,
];

export default function Outputs() {
  return (
    <Section>
      <Reveal>
        <h2 className="text-2xl font-bold md:text-4xl">{outputs.title}</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {outputs.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 70}>
            <div className="h-full rounded-card border border-line bg-paper p-6 transition-shadow hover:shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 text-copper"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[i]}
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-body/80">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
