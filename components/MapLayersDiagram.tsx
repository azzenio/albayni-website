/**
 * رسم بنية خريطة المعرفة: أربع طبقات تتسع تدريجيًا (ركيزة → حقل → حقل فرعي → موضوع)
 * مع «مسار معرفي» واحد مضاء بالنحاس يوضح كيف يُنتقى العنصر من كل طبقة.
 * لا تُعرض الركائز التسع عشرة كصناديق؛ الطبقة تُمثَّل بشريط ونقاط وعدد.
 */

type Layer = {
  name: string;
  count: string;
  dots: number;
  /** موقع النقطة المضاءة ضمن الطبقة (0-based) */
  active: number;
  width: number;
};

const layers: Layer[] = [
  { name: "الركائز المعرفية", count: "19", dots: 9, active: 5, width: 260 },
  { name: "الحقول المعرفية", count: "213", dots: 13, active: 7, width: 350 },
  { name: "الحقول الفرعية", count: "1,967", dots: 17, active: 9, width: 440 },
  { name: "الموضوعات", count: "آلاف", dots: 21, active: 11, width: 520 },
];

const CENTER = 300;
const TOP = 34;
const GAP = 62;

function dotX(layer: Layer, i: number) {
  const start = CENTER - layer.width / 2;
  const step = layer.width / (layer.dots - 1);
  return start + i * step;
}

export default function MapLayersDiagram() {
  return (
    <svg
      viewBox="0 0 700 300"
      className="w-full"
      role="img"
      aria-label="أربع طبقات معرفية تتسع تدريجيًا: 19 ركيزة ثم 213 حقلًا ثم 1967 حقلًا فرعيًا ثم آلاف الموضوعات، ومسار واحد مضاء يمر عبرها"
    >
      {/* خطوط المسار المعرفي */}
      {layers.slice(0, -1).map((layer, li) => {
        const next = layers[li + 1];
        return (
          <line
            key={`path-${li}`}
            x1={dotX(layer, layer.active)}
            y1={TOP + li * GAP}
            x2={dotX(next, next.active)}
            y2={TOP + (li + 1) * GAP}
            stroke="#B0662C"
            strokeWidth="1.6"
            strokeOpacity="0.75"
          />
        );
      })}

      {layers.map((layer, li) => {
        const y = TOP + li * GAP;
        return (
          <g key={layer.name}>
            {/* شريط الطبقة */}
            <rect
              x={CENTER - layer.width / 2 - 14}
              y={y - 15}
              width={layer.width + 28}
              height="30"
              rx="15"
              fill="#EDE4D3"
              opacity="0.6"
            />
            {/* النقاط */}
            {Array.from({ length: layer.dots }).map((_, i) => {
              const on = i === layer.active;
              return (
                <circle
                  key={i}
                  cx={dotX(layer, i)}
                  cy={y}
                  r={on ? 5.5 : 3}
                  fill={on ? "#B0662C" : "#1C2430"}
                  opacity={on ? 1 : 0.28}
                />
              );
            })}
            {/* التسمية والعدد */}
            <text
              x={CENTER + layer.width / 2 + 26}
              y={y - 2}
              textAnchor="start"
              fontSize="12.5"
              fill="#1C2430"
              fontFamily="var(--font-body)"
              fontWeight="600"
            >
              {layer.count}
            </text>
            <text
              x={CENTER + layer.width / 2 + 26}
              y={y + 13}
              textAnchor="start"
              fontSize="11"
              fill="#3A3F47"
              fontFamily="var(--font-body)"
              opacity="0.8"
            >
              {layer.name}
            </text>
          </g>
        );
      })}

      {/* وسم المسار */}
      <text
        x={CENTER}
        y={TOP + 3 * GAP + 42}
        textAnchor="middle"
        fontSize="11.5"
        fill="#8F4F1D"
        fontFamily="var(--font-body)"
        fontWeight="600"
      >
        ● المسار المعرفي المنتقى لمسألة واحدة
      </text>
    </svg>
  );
}
