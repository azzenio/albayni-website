import { hero, site } from "@/content/site";
import FrameVisual from "./FrameVisual";

export default function Hero() {
  return (
    <section id="top" className="border-b border-line/60 bg-paper">
      <div className="mx-auto grid max-w-content items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
        <div>
          <p className="mb-4 inline-block rounded-full border border-copper/40 bg-copper/10 px-4 py-1.5 text-sm text-copper-deep">
            {site.stageNotice}
          </p>
          <h1 className="text-3xl font-bold leading-snug md:text-5xl md:leading-tight">{hero.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-body">{hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#how" className="rounded-full bg-copper px-7 py-3 font-medium text-paper transition-colors hover:bg-copper-deep">
              {hero.primaryCta}
            </a>
            <a href="#demo" className="rounded-full border border-ink/25 px-7 py-3 font-medium text-ink transition-colors hover:border-copper hover:text-copper-deep">
              {hero.secondaryCta}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <FrameVisual />
        </div>
      </div>
    </section>
  );
}
