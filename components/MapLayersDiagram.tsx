/**
 * طبقات خريطة المعرفة: ركيزة → حقل → حقل فرعي → موضوع.
 * مسار واحد فقط مضاء كمثال، ولا تُعرض الركائز التسع عشرة.
 * تُظهر الروابط الجانبية أن البنية شبكة متعددة العلاقات لا شجرة جامدة.
 *
 * الهندسة: كل الطبقات متمركزة على المحور نفسه (CENTER).
 */

type Layer = { name: string; count: string; dots: number; active: number; width: number };

const layers: Layer[] = [
  { name: "الركائز المعرفية", count: "19", dots: 9, active: 4, width: 250 },
  { name: "الحقول المعرفية", count: "213", dots: 13, active: 6, width: 340 },
  { name: "الحقول الفرعية", count: "1,967", dots: 17, active: 8, width: 430 },
  { name: "الموضوعات", count: "آلاف", dots: 21, active: 10, width: 510 },
];

const CENTER = 300;
const TOP = 30;
const GAP = 60;

const dotX = (l: Layer, i: number) => CENTER - l.width / 2 + (i * l.width) / (l.dots - 1);

export default function MapLayersDiagram() {
  return (
    <svg
      viewBox="0 0 700 296"
      className="w-full"
      role="img"
      aria-label="أربع طبقات: 19 ركيزة معرفية ثم 213 حقلًا معرفيًا ثم 1967 حقلًا فرعيًا ثم الموضوعات، ومسار واحد مضاء يمر عبرها كمثال"
    >
      {/* روابط جانبية خافتة: البنية شبكة لا شجرة */}
      <g stroke="#1C2430" strokeOpacity="0.14" strokeWidth="1">
        {layers.slice(0, -1).map((l, li) => {
          const n = layers[li + 1];
          return (
            <g key={`web-${li}`}>
              <line x1={dotX(l, l.active)} y1={TOP + li * GAP} x2={dotX(n, n.active - 3)} y2={TOP + (li + 1) * GAP} />
              <line x1={dotX(l, l.active)} y1={TOP + li * GAP} x2={dotX(n, n.active + 3)} y2={TOP + (li + 1) * GAP} />
              <line x1={dotX(l, l.active - 2)} y1={TOP + li * GAP} x2={dotX(n, n.active)} y2={TOP + (li + 1) * GAP} />
            </g>
          );
        })}
      </g>

      {/* المسار المضاء */}
      <g stroke="#B0662C" strokeWidth="1.8" strokeOpacity="0.85">
        {layers.slice(0, -1).map((l, li) => {
          const n = layers[li + 1];
          return (
            <line
              key={`p-${li}`}
              x1={dotX(l, l.active)}
              y1={TOP + li * GAP}
              x2={dotX(n, n.active)}
              y2={TOP + (li + 1) * GAP}
            />
          );
        })}
      </g>

      {layers.map((l, li) => {
        const y = TOP + li * GAP;
        return (
          <g key={l.name}>
            <rect x={CENTER - l.width / 2 - 14} y={y - 15} width={l.width + 28} height="30" rx="15" fill="#EDE4D3" opacity="0.55" />
            {Array.from({ length: l.dots }).map((_, i) => {
              const on = i === l.active;
              return (
                <circle key={i} cx={dotX(l, i)} cy={y} r={on ? 5.5 : 3} fill={on ? "#B0662C" : "#1C2430"} opacity={on ? 1 : 0.26} />
              );
            })}
            <text x={CENTER + l.width / 2 + 26} y={y - 2} textAnchor="start" fontSize="12.5" fill="#1C2430" fontFamily="var(--font-body)" fontWeight="600">
              {l.count}
            </text>
            <text x={CENTER + l.width / 2 + 26} y={y + 13} textAnchor="start" fontSize="11" fill="#3A3F47" fontFamily="var(--font-body)" opacity="0.8">
              {l.name}
            </text>
          </g>
        );
      })}

      <text x={CENTER} y={TOP + 3 * GAP + 44} textAnchor="middle" fontSize="11.5" fill="#8F4F1D" fontFamily="var(--font-body)" fontWeight="600">
        مسار معرفي واحد كمثال — والبنية الداخلية شبكة متعددة العلاقات لا شجرة جامدة
      </text>
    </svg>
  );
}
