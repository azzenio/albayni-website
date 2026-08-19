"use client";

import { useEffect, useState } from "react";

/**
 * الرسم الرئيسي — ستة مسارات معرفية على هيئة أقواس رشيقة تعبر المركز،
 * فتتقاطع فيما بينها قبل النواة وبعدها، وتلتقي جميعًا في نواة «البيني».
 *
 * الهندسة: مربع 440×440 والمركز (220,220) — متمركز هندسيًا وبصريًا.
 * الأقواس أقطار منحنية: تبدأ عند زاوية وتنتهي عند مقابلها مع انحناء متبادل.
 * مستلهم من هندسة الأقواس في الشعار دون نسخه.
 */

const VB = 440;
const C = VB / 2;
const R_CORE = 34;
const R_EDGE = 186; // نصف قطر نقاط البداية/النهاية

/** نقطة على محيط دائرة نصف قطرها r عند زاوية بالدرجات */
function pt(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return [C + r * Math.cos(a), C + r * Math.sin(a)];
}

/**
 * قوس يعبر المركز: من الزاوية θ إلى θ+180،
 * مع نقطة تحكم مزاحة عموديًا لإعطاء انحناء لطيف يجعل الأقواس تتقاطع.
 */
function arc(angleDeg: number, bow: number) {
  const [x1, y1] = pt(angleDeg, R_EDGE);
  const [x2, y2] = pt(angleDeg + 180, R_EDGE);
  // اتجاه عمودي على القطر
  const a = (angleDeg * Math.PI) / 180;
  const nx = -Math.sin(a);
  const ny = Math.cos(a);
  const cx = C + nx * bow;
  const cy = C + ny * bow;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

// ستة مسارات بانحناءات متبادلة لتتقاطع قبل المركز وبعده
const arcs = [
  { d: arc(0, 54), delay: 0 },
  { d: arc(30, -78), delay: 0.1 },
  { d: arc(60, 66), delay: 0.2 },
  { d: arc(90, -54), delay: 0.3 },
  { d: arc(120, 78), delay: 0.4 },
  { d: arc(150, -66), delay: 0.5 },
];

export default function CoreVisual() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const t = setTimeout(() => setOn(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <figure className="mx-auto w-full max-w-[400px] px-2">
      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        className="w-full"
        role="img"
        aria-label="ستة مسارات معرفية تتقاطع فيما بينها وتلتقي في نواة «البيني» في مركز الرسم"
      >
        <defs>
          <radialGradient id="edgeFade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="62%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="fadeMask">
            <rect width={VB} height={VB} fill="url(#edgeFade)" />
          </mask>
        </defs>

        <g fill="none" strokeLinecap="round" mask="url(#fadeMask)">
          {arcs.map((a, i) => (
            <path
              key={i}
              d={a.d}
              stroke="#1C2430"
              strokeWidth="1.7"
              strokeOpacity="0.5"
              className={on ? "arc-draw" : undefined}
              style={on ? { animationDelay: `${a.delay}s` } : { opacity: 0 }}
            />
          ))}
        </g>

        {/* فراغ حول النواة ليبرز الالتقاء */}
        <circle
          cx={C}
          cy={C}
          r={R_CORE + 15}
          fill="#FAF6EE"
          className={on ? "core-in" : undefined}
          style={on ? { animationDelay: "0.85s" } : { opacity: 0 }}
        />

        {/* النواة: المساحة البينية */}
        <g className={on ? "core-in" : undefined} style={on ? { animationDelay: "1s" } : { opacity: 0 }}>
          <circle cx={C} cy={C} r={R_CORE} fill="#1C2430" />
          <path
            d={`M ${C} ${C - 18} C ${C + 12} ${C - 6}, ${C + 12} ${C + 6}, ${C} ${C + 18} C ${C - 12} ${C + 6}, ${C - 12} ${C - 6}, ${C} ${C - 18} Z`}
            fill="#B0662C"
          />
        </g>
      </svg>
      <figcaption className="mt-3 text-center text-sm leading-relaxed text-body/70">
        تتقاطع المعارف، ويكشف «البيني» ما بينها.
      </figcaption>
    </figure>
  );
}
