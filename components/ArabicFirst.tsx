import Section from "./Section";
import Reveal from "./Reveal";
import { arabicFirst } from "@/content/site";

export default function ArabicFirst() {
  return (
    <Section>
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-2xl font-bold md:text-4xl">{arabicFirst.title}</h2>
          <p className="mt-4 text-lg leading-relaxed">{arabicFirst.text}</p>
          <p className="mt-6 border-r-4 border-copper pr-4 font-heading text-xl font-semibold text-ink">
            {arabicFirst.message}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <svg viewBox="0 0 320 220" className="mx-auto w-full max-w-sm" role="img" aria-label="طبقات معرفية عربية تتصل ببعضها">
            <rect x="40" y="30" width="240" height="44" rx="10" fill="#EDE4D3" />
            <rect x="60" y="88" width="200" height="44" rx="10" fill="#E0D4BD" />
            <rect x="80" y="146" width="160" height="44" rx="10" fill="#B0662C" opacity="0.85" />
            <text x="160" y="58" textAnchor="middle" fontSize="15" fill="#1C2430" fontFamily="var(--font-body)">الأبحاث والرسائل المفتوحة</text>
            <text x="160" y="116" textAnchor="middle" fontSize="15" fill="#1C2430" fontFamily="var(--font-body)">التقارير والمجلات العربية</text>
            <text x="160" y="174" textAnchor="middle" fontSize="15" fill="#FAF6EE" fontFamily="var(--font-body)">المحتوى الثقافي والتراثي المرخص</text>
          </svg>
        </Reveal>
      </div>
    </Section>
  );
}
