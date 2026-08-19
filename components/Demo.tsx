"use client";

import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { demoDisclaimer, demoExamples, type DemoExample } from "@/content/demo";

type Phase = "idle" | "running" | "understand" | "frame" | "blind" | "study";

const phaseOrder: Phase[] = ["understand", "frame", "blind", "study"];

/**
 * نموذج توضيحي محاكي بالكامل ببيانات ثابتة — لا يعمل خلفه النظام الفعلي.
 * الاختيار من الأمثلة المعتمدة فقط؛ لا إدخال حر حتى لا يوهم بخدمة عاملة.
 * طبقة الموضوعات لم تُربط بعد، لذا لا يُعرض موضوع داخل بطاقات الإطار البيني.
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

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const run = () => {
    clear();
    setPhase("running");
    const delays = reduced.current ? [0, 0, 0, 0] : [900, 1900, 3000, 4200];
    phaseOrder.forEach((p, i) => {
      timers.current.push(setTimeout(() => setPhase(p), delays[i]));
    });
  };

  const pick = (ex: DemoExample) => {
    clear();
    setExample(ex);
    setPhase("idle");
  };

  const reached = (p: Phase) => {
    if (phase === "idle" || phase === "running") return false;
    return phaseOrder.indexOf(phase) >= phaseOrder.indexOf(p);
  };

  return (
    <Section id="demo" tone="sand">
      <div className="mb-3 inline-block rounded-full bg-ink px-4 py-1.5 text-sm text-paper">
        نموذج توضيحي لتجربة «البيني»
      </div>
      <h2 className="text-2xl font-bold md:text-4xl">ثلاثة أمثلة تشرح الفكرة</h2>
      <p className="mt-3 max-w-3xl text-body/80">{demoDisclaimer}</p>

      <div className="mt-8 rounded-card border border-line bg-paper p-5 shadow-sm md:p-8">
        <fieldset>
          <legend className="mb-3 text-sm font-semibold text-ink">اختر مسألة من الأمثلة المعتمدة</legend>
          <div className="grid gap-2 md:grid-cols-3">
            {demoExamples.map((ex) => (
              <label
                key={ex.id}
                className={`flex cursor-pointer flex-col gap-1 rounded-xl border p-4 transition-colors ${
                  example.id === ex.id ? "border-copper bg-copper/5" : "border-line hover:border-ink/30"
                }`}
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="demo-example"
                    className="accent-[#B0662C]"
                    checked={example.id === ex.id}
                    onChange={() => pick(ex)}
                  />
                  <span className="text-xs font-medium text-copper-deep">{ex.label}</span>
                </span>
                <span className="font-semibold text-ink">{ex.title}</span>
                <span className="text-sm leading-relaxed text-body/70">{ex.question}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <button
            onClick={run}
            disabled={phase === "running"}
            className="rounded-full bg-copper px-8 py-3 font-medium text-paper transition-colors hover:bg-copper-deep disabled:opacity-60"
          >
            {phase === "running" ? "جارٍ العرض التوضيحي…" : "اعرض الإطار البيني"}
          </button>
          <span className="text-sm text-body/70">
            المنطلق الظاهر للمسألة: <span className="font-medium text-ink">{example.origin}</span>
          </span>
        </div>

        <div aria-live="polite">
          {phase === "running" && (
            <div className="mt-6 flex items-center gap-3 text-body/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper" aria-hidden="true" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper [animation-delay:150ms]" aria-hidden="true" />
              <span className="h-2 w-2 animate-pulse rounded-full bg-copper [animation-delay:300ms]" aria-hidden="true" />
              <span>يُقرأ نص المسألة…</span>
            </div>
          )}

          {/* ١ — مفاهيم أولية */}
          {reached("understand") && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-copper-deep">١ — مفاهيم أولية مستخرجة من المسألة</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {example.concepts.map((c) => (
                  <li key={c} className="rounded-full bg-sand px-4 py-1.5 text-sm text-ink">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ٢ — الإطار البيني: المسارات المعرفية */}
          {reached("frame") && (
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-copper-deep">٢ — الإطار البيني: المسارات المعرفية المنتقاة</h3>
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                {example.paths.map((p) => (
                  <div key={`${p.pillar}-${p.subfield}`} className="rounded-xl border border-line bg-paper p-4">
                    <dl className="space-y-1.5 text-sm">
                      <div className="flex gap-2">
                        <dt className="w-24 shrink-0 text-body/55">الركيزة المعرفية</dt>
                        <dd className="font-semibold text-ink">{p.pillar}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="w-24 shrink-0 text-body/55">الحقل المعرفي</dt>
                        <dd className="text-ink">{p.field}</dd>
                      </div>
                      <div className="flex gap-2">
                        <dt className="w-24 shrink-0 text-body/55">الحقل الفرعي</dt>
                        <dd className="text-copper-deep">{p.subfield}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 border-t border-line pt-2.5 text-sm leading-relaxed text-body/80">
                      {p.reason}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-body/65">
                تتوقف المسارات عند مستوى الحقل الفرعي في هذا النموذج، لأن طبقة الموضوعات لم تُربط بعد بالمصدر
                الأكاديمي.
              </p>
            </div>
          )}

          {/* ٣ — النقاط العمياء */}
          {reached("blind") && (
            <div className="mt-8 rounded-xl border-r-4 border-copper bg-ink p-5 md:p-6">
              <h3 className="font-heading text-lg font-bold text-paper">٣ — النقاط العمياء</h3>
              <p className="mt-1 text-sm text-paper/65">
                زوايا مهمة غابت عن نطاق السؤال الأصلي — وليست بالضرورة أسماء عقد في الخريطة.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {example.blindSpots.map((b) => (
                  <div key={b.title} className="rounded-lg border border-paper/15 bg-paper/5 p-4">
                    <p className="font-semibold text-copper">{b.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper/75">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ٤ — الدراسة البينية */}
          {reached("study") && (
            <div className="mt-8 rounded-xl border border-copper/40 bg-copper/5 p-5 md:p-6">
              <h3 className="font-heading text-lg font-bold text-ink">٤ — من الدراسة البينية</h3>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">السؤال بعد التأطير</dt>
                  <dd className="mt-1 leading-relaxed">{example.frameQuestion}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">المنهجية المقترحة</dt>
                  <dd className="mt-1 leading-relaxed">{example.methodology}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">أنواع التحليل</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {example.analyses.map((a) => (
                      <span key={a} className="rounded-full border border-copper/35 px-3 py-1 text-sm text-copper-deep">
                        {a}
                      </span>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">البيانات التي يجب جمعها</dt>
                  <dd className="mt-1 leading-relaxed">{example.dataNeeded}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">التقاطعات البينية</dt>
                  <dd className="mt-1">
                    <ul className="space-y-1.5">
                      {example.crossings.map((c) => (
                        <li key={c} className="flex items-start gap-2.5">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                          <span className="leading-relaxed">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <dt className="text-sm font-semibold text-copper-deep">فجوة الأدلة</dt>
                    <dd className="mt-1 leading-relaxed">{example.gaps}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold text-copper-deep">درجة الثقة — توضيحية</dt>
                    <dd className="mt-1 leading-relaxed">{example.confidence}</dd>
                    <dd className="mt-1 text-xs text-body/60">
                      قيمة توضيحية في هذا النموذج الثابت، وليست نتيجة حساب فعلي.
                    </dd>
                  </div>
                </div>
                <div className="border-t border-copper/30 pt-4">
                  <dt className="text-sm font-semibold text-copper-deep">خلاصة بينية توضيحية</dt>
                  <dd className="mt-1 font-medium leading-relaxed text-ink">{example.synthesis}</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-copper-deep">مصادر توضيحية</dt>
                  <dd className="mt-1">
                    <ul className="list-inside list-disc space-y-1 text-body/80">
                      {example.sources.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <p className="mt-5 border-t border-copper/30 pt-4 text-sm text-body/70">
                هذه المخرجات معدة مسبقًا لأغراض العرض. في المنصة المستقبلية تُبنى من مصادر حقيقية قابلة للتتبع،
                وتبقى خاضعة لمراجعة الباحث وقراره.
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
