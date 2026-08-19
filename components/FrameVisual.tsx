"use client";

import { useEffect, useState } from "react";

/**
 * الرسم الرئيسي: سحابة معرفية واسعة (خريطة البيني) → انتقاء عدد محدود من الركائز
 * → تكوّن «الإطار البيني» في المركز على هيئة المساحة البينية من الشعار.
 *
 * لا تُعرض الركائز التسع عشرة كلها؛ يُعرض عدد محدود منها كمثال،
 * وتشير السحابة الخافتة والأرقام إلى اتساع الخريطة.
 */

// سحابة نقاط خافتة تمثل اتساع الخريطة (مواقع ثابتة لتفادي اختلاف الخادم/العميل)
const cloud = [
  [30, 26], [78, 18], [126, 30], [188, 20], [246, 28], [300, 22], [352, 34],
  [22, 74], [70, 62], [340, 66], [386, 78],
  [18, 122], [58, 112], [352, 116], [392, 126],
  [16, 170], [60, 182], [350, 176], [390, 168],
  [26, 218], [74, 232], [338, 226], [382, 216],
  [40, 268], [92, 280], [148, 272], [206, 284], [262, 274], [316, 282], [364, 266],
  [110, 46], [286, 44], [104, 250], [292, 248],
];

// ركائز مختارة كمثال فقط — من الركائز التسع عشرة
const picked = [
  { label: "التقنية والحوسبة", x: 96, y: 74 },
  { label: "الاقتصاد", x: 316, y: 96 },
  { label: "علم النفس والسلوك", x: 66, y: 168 },
  { label: "القانون والحوكمة", x: 330, y: 194 },
  { label: "المجتمع والثقافة", x: 152, y: 246 },
];

const CX = 204;
const CY = 150;

export default function FrameVisual() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStage(3);
      return;
    }
    const t1 = setTimeout(() => setStage(1), 400);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => setStage(3), 2000);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 408 310"
        className="w-full"
        role="img"
        aria-label="خريطة معرفة واسعة يُنتقى منها عدد من الركائز لتكوين الإطار البيني للمسألة"
      >
        {/* السحابة: اتساع الخريطة */}
        <g>
          {cloud.map(([x, y], i) => (
            <circle
              key={`c-${i}`}
              cx={x}
              cy={y}
              r="2.6"
              fill="#1C2430"
              opacity={stage >= 1 ? 0.16 : 0.3}
              style={{ transition: "opacity .8s ease" }}
            />
          ))}
        </g>

        {/* خطوط الانتقاء */}
        {stage >= 2 &&
          picked.map((p, i) => (
            <line
              key={`l-${p.label}`}
              x1={p.x}
              y1={p.y}
              x2={CX}
              y2={CY}
              stroke="#B0662C"
              strokeWidth="1.4"
              strokeOpacity="0.6"
              className="map-line"
              style={{ animationDelay: `${i * 0.14}s` }}
            />
          ))}

        {/* الركائز المنتقاة */}
        {stage >= 1 &&
          picked.map((p, i) => (
            <g key={p.label} className="map-node" style={{ animationDelay: `${i * 0.12}s` }}>
              <circle cx={p.x} cy={p.y} r="5" fill="#B0662C" />
              <text
                x={p.x}
                y={p.y - 12}
                textAnchor="middle"
                fontSize="11.5"
                fontWeight="500"
                fill="#1C2430"
                fontFamily="var(--font-body)"
              >
                {p.label}
              </text>
            </g>
          ))}

        {/* الإطار البيني: المساحة البينية من الشعار */}
        {stage >= 3 && (
          <g className="map-node">
            <path
              d="M 204 104 C 226 128, 226 172, 204 196 C 182 172, 182 128, 204 104 Z"
              fill="#B0662C"
            />
            <text
              x={CX}
              y={CY + 5}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="#FAF6EE"
              fontFamily="var(--font-body)"
            >
              الإطار
            </text>
            <text
              x={CX}
              y={CY + 20}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="#FAF6EE"
              fontFamily="var(--font-body)"
            >
              البيني
            </text>
          </g>
        )}
      </svg>
      <figcaption className="mt-2 text-center text-sm text-body/60">
        من خريطة تضم 19 ركيزة و213 حقلًا و1,967 حقلًا فرعيًا — يُنتقى ما يخصّ مسألتك وحدها.
      </figcaption>
    </figure>
  );
}
