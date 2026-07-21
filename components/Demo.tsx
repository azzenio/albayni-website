"use client";

import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { demoDisclaimer, demoExamples, type DemoExample } from "@/content/demo";

type Phase = "idle" | "analyzing" | "keywords" | "map" | "report";

/**
 * نموذج تصوري محاكي بالكامل ببيانات ثابتة — لا ذكاء اصطناعي فعليًا.
 * الاختيار من أمثلة جاهزة فقط؛ لا إدخال حر حتى لا يوهم بخدمة حقيقية.
 */
export default function Demo() {
  const [example, setExample] = useState<DemoExample>(demoExamples[0]);
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => timers.current.forEach(clearTimeout);
  }, []);

  const later = (fn: () => void, ms: number) => {
    timers.current.push(setTimeout(fn, reduced.current ? 0 : ms));
  };

  const analyze = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase("analyzing");
    later(() => setPhase("keywords"), 1100);
    later(() => setPhase("map"), 2100);
    later(() => setPhase("report"), 3600);
  };

  const pick = (ex: DemoExample) => {
    timers.current.forEach(clearTimeout);
    setExample(ex);
    setPhase("idle");
  };

  const showKeywords = phase === "keywords" || phase === "map" || phase === "report";
  const showMap = phase === "map" || phase === "report";
  const showReport = phase === "report";

  return (
    <Section id="demo" tone="sand">
      <div className="mb-2 inline-block rounded-full bg-ink px-4 py-1.5 text-sm text-paper">
        نموذج تصوري لتجربة «البيني»
      </div>
      <h2 className="text-2xl font-bold md:text-4xl">جرّب الفكرة قبل أن تُبنى</h2>
      <p className="mt-3 max-w-2xl text-body/80">{demoDisclaimer}</p>

      <div className="mt-8 rounded-card border border-line bg-paper p-5 shadow-sm md:p-8">
        {/* اختيار المثال */}
        <fieldset>
          <legend className="mb-3 text-sm font-semibold text-ink">اختر موضوعًا من الأمثلة الجاهزة</legend>
          <div className="flex flex-col gap-2">
            {demoExamples.map((ex) => (
              <label
                key={ex.id}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                  example.id === ex.id ? "border-copper bg-copper/5" : "border-line hover:border-ink/30"
                }`}
              >
                <input
                  type="radio"
                  name="demo-example"
                  className="mt-1.5 accent-[#B0662C]"
                  checked={example.id === ex.id}
                  onChange={() => pick(ex)}
                />
                <span>
                  <span className="block font-medium text-ink">{ex.title}</span>
                  <span className="mt-0.5 block text-sm text-body/70">التخصص الأساسي: {ex.primary}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <button
          onClick={analyze}
          disabled={phase === "analyzing"}
          className="mt-6 rounded-full bg-copper px-8 py-3 font-medium text-paper transition-colors hover:bg-copper-deep disabled:opacity-60"
        >
          {phase === "analyzing" ? "جارٍ التحليل التوضيحي…" : "حلّل الموضوع"}
        </button>

        {/* حالة التحليل */}
        <div aria-live="polite">
          {phase === "analyzing" && (
            <div className="mt-6 flex items-center gap-3 text-body/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper" aria-hidden="true" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper [animation-delay:150ms]" aria-hidden="true" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper [animation-delay:300ms]" aria-hidden="true" />
              <span>يُقرأ الموضوع وتُستخرج المفاهيم…</span>
            </div>
          )}

          {/* المرحلة 1: المفاهيم */}
          {showKeywords && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-copper-deep">المفاهيم المستخرجة</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {example.keywords.map((k) => (
                  <li key={k} className="rounded-full bg-sand px-4 py-1.5 text-sm text-ink">
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* المرحلة 2: خريطة التخصصات */}
          {showMap && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-copper-deep">خريطة التخصصات المقترحة</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-ink/40 bg-ink p-4 text-paper">
                  <span className="text-xs text-paper/60">التخصص الأساسي</span>
                  <p className="mt-1 font-semibold">{example.primary}</p>
                </div>
                {example.disciplines.map((d) => (
                  <div key={d.name} className="rounded-xl border border-line bg-paper p-4">
                    <p className="font-semibold text-ink">{d.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-body/80">{d.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* المرحلة 3: عينة التقرير */}
          {showReport && (
            <div className="mt-8 rounded-xl border border-copper/40 bg-copper/5 p-5 md:p-6">
              <h3 className="font-heading text-lg font-bold text-ink">عينة من الإطار البيني</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">سؤال محسّن</dt>
                  <dd className="mt-1 leading-relaxed">{example.refinedQuestion}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">منهجية مقترحة</dt>
                  <dd className="mt-1 leading-relaxed">{example.methodology}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">فجوة معرفية</dt>
                  <dd className="mt-1 leading-relaxed">{example.gap}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">تحذير منهجي</dt>
                  <dd className="mt-1 leading-relaxed">{example.warning}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">مصادر (نماذج توضيحية)</dt>
                  <dd className="mt-1">
                    <ul className="list-inside list-disc space-y-1 text-body/80">
                      {example.sources.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">مستوى الثقة</dt>
                  <dd className="mt-1 leading-relaxed">{example.confidence}</dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-copper/30 pt-4 text-sm text-body/70">
                هذه العينة معدة مسبقًا لأغراض العرض. في المنصة المستقبلية تُبنى المخرجات من مصادر حقيقية قابلة
                للتتبع، وتبقى خاضعة لمراجعة الباحث وحكمه.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
