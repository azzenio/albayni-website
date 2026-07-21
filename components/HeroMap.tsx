"use client";

import { useEffect, useState } from "react";

/**
 * رسم متحرك: سؤال مركزي تتفرع منه تخصصات ثم تتصل لتكوّن خريطة.
 * SVG أصلي بلا مكتبات خارجية، يحترم prefers-reduced-motion عبر CSS.
 */
const nodes = [
  { label: "التاريخ", x: 235, y: 60 },
  { label: "علم النفس", x: 65, y: 95 },
  { label: "السياسة", x: 250, y: 175 },
  { label: "الاجتماع", x: 55, y: 205 },
  { label: "اللغة والخطاب", x: 155, y: 250 },
];

const cx = 155;
const cy = 140;

export default function HeroMap() {
  const [go, setGo] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGo(true), 350);
    return () => clearTimeout(t);
  }, []);

  return (
    <svg viewBox="0 0 310 300" role="img" aria-label="سؤال مركزي تتفرع منه تخصصات وتتصل لتكوّن خريطة معرفية" className="w-full max-w-md">
      {go &&
        nodes.map((n, i) => (
          <line
            key={`l-${n.label}`}
            x1={cx}
            y1={cy}
            x2={n.x}
            y2={n.y}
            stroke="#B0662C"
            strokeWidth="1.6"
            strokeOpacity="0.7"
            className="map-line"
            style={{ animationDelay: `${0.25 + i * 0.22}s` }}
          />
        ))}

      {/* السؤال المركزي */}
      <g>
        <circle cx={cx} cy={cy} r="34" fill="#1C2430" />
        <text x={cx} y={cy + 9} textAnchor="middle" fontSize="26" fill="#FAF6EE" fontFamily="var(--font-heading)">
          ؟
        </text>
      </g>

      {go &&
        nodes.map((n, i) => (
          <g key={n.label} className="map-node" style={{ animationDelay: `${0.55 + i * 0.22}s` }}>
            <circle cx={n.x} cy={n.y} r="5" fill="#B0662C" />
            <text
              x={n.x}
              y={n.y - 12}
              textAnchor="middle"
              fontSize="13"
              fill="#1C2430"
              fontFamily="var(--font-body)"
              fontWeight="500"
            >
              {n.label}
            </text>
          </g>
        ))}
    </svg>
  );
}
