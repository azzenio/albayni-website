/**
 * المناطق الثلاث بالاتجاه العربي (يمين ← يسار):
 * خريطة البيني للمعرفة → المحرك البيني → الدراسة البينية.
 * المحادثة طبقة واحدة ممتدة تحتها جميعًا، وليست منطقة رابعة.
 *
 * الهندسة: ثلاثة صناديق متساوية العرض (200) بفواصل متساوية (36)،
 * ومحور رأسي موحد لكل الأسهم والعناوين.
 */

const W = 200;   // عرض الصندوق
const H = 150;   // ارتفاع الصندوق
const GAP = 36;  // الفاصل بين الصناديق
const TOP = 16;
const MID = TOP + H / 2; // محور الأسهم الأفقي

// من اليمين إلى اليسار
const X1 = 748 - W;              // المنطقة الأولى (أقصى اليمين) = 548
const X2 = X1 - GAP - W;         // المنطقة الثانية = 312
const X3 = X2 - GAP - W;         // المنطقة الثالثة = 76

const cx = (x: number) => x + W / 2;

function Arrow({ from, to }: { from: number; to: number }) {
  return (
    <g stroke="#B0662C" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1={from} y1={MID} x2={to} y2={MID} />
      <polyline points={`${to + 9},${MID - 6} ${to},${MID} ${to + 9},${MID + 6}`} />
    </g>
  );
}

export default function RegionsDiagram() {
  return (
    <svg
      viewBox="0 0 824 268"
      className="w-full"
      role="img"
      aria-label="ثلاث مناطق متتابعة من اليمين إلى اليسار: خريطة البيني للمعرفة ثم المحرك البيني ثم الدراسة البينية، وتحتها طبقة المحادثة الملازمة لها جميعًا"
    >
      {/* المنطقة الأولى — خريطة البيني للمعرفة */}
      <g>
        <rect x={X1} y={TOP} width={W} height={H} rx="14" fill="#EDE4D3" />
        <text x={cx(X1)} y={TOP + 28} textAnchor="middle" fontSize="11.5" fill="#8F4F1D" fontFamily="var(--font-body)" fontWeight="600">
          المنطقة الأولى
        </text>
        <text x={cx(X1)} y={TOP + 51} textAnchor="middle" fontSize="15" fill="#1C2430" fontFamily="var(--font-heading)" fontWeight="700">
          خريطة البيني للمعرفة
        </text>
        {[0, 1, 2, 3].map((i) => {
          const w = 108 + i * 20;
          return (
            <rect
              key={i}
              x={cx(X1) - w / 2}
              y={TOP + 72 + i * 16}
              width={w}
              height="9"
              rx="4.5"
              fill="#1C2430"
              opacity={0.72 - i * 0.16}
            />
          );
        })}
      </g>

      <Arrow from={X1 - 4} to={X1 - GAP + 4} />

      {/* المنطقة الثانية — المحرك البيني */}
      <g>
        <rect x={X2} y={TOP} width={W} height={H} rx="14" fill="#1C2430" />
        <text x={cx(X2)} y={TOP + 28} textAnchor="middle" fontSize="11.5" fill="#B0662C" fontFamily="var(--font-body)" fontWeight="600">
          المنطقة الثانية
        </text>
        <text x={cx(X2)} y={TOP + 51} textAnchor="middle" fontSize="15" fill="#FAF6EE" fontFamily="var(--font-heading)" fontWeight="700">
          المحرك البيني
        </text>
        {/* انتقاء يتجمع في المساحة البينية — متمركز أفقيًا */}
        {[-24, 0, 24].map((dy) => (
          <g key={dy}>
            <circle cx={cx(X2) + 46} cy={TOP + 106 + dy} r="3.4" fill="#FAF6EE" opacity="0.5" />
            <line
              x1={cx(X2) + 42}
              y1={TOP + 106 + dy}
              x2={cx(X2) + 12}
              y2={TOP + 106}
              stroke="#B0662C"
              strokeWidth="1.2"
              opacity="0.7"
            />
          </g>
        ))}
        <path
          d={`M ${cx(X2)} ${TOP + 88} C ${cx(X2) + 12} ${TOP + 100}, ${cx(X2) + 12} ${TOP + 112}, ${cx(X2)} ${TOP + 124} C ${cx(X2) - 12} ${TOP + 112}, ${cx(X2) - 12} ${TOP + 100}, ${cx(X2)} ${TOP + 88} Z`}
          fill="#B0662C"
        />
        <text x={cx(X2) - 44} y={TOP + 110} textAnchor="middle" fontSize="11" fill="#FAF6EE" fontFamily="var(--font-body)" opacity="0.8">
          الإطار البيني
        </text>
      </g>

      <Arrow from={X2 - 4} to={X2 - GAP + 4} />

      {/* المنطقة الثالثة — الدراسة البينية */}
      <g>
        <rect x={X3} y={TOP} width={W} height={H} rx="14" fill="#EDE4D3" />
        <text x={cx(X3)} y={TOP + 28} textAnchor="middle" fontSize="11.5" fill="#8F4F1D" fontFamily="var(--font-body)" fontWeight="600">
          المنطقة الثالثة
        </text>
        <text x={cx(X3)} y={TOP + 51} textAnchor="middle" fontSize="15" fill="#1C2430" fontFamily="var(--font-heading)" fontWeight="700">
          الدراسة البينية
        </text>
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x={cx(X3) - 66}
            y={TOP + 74 + i * 15}
            width={132}
            height="8"
            rx="4"
            fill="#1C2430"
            opacity={i === 0 ? 0.62 : 0.34}
          />
        ))}
        <rect x={cx(X3) - 46} y={TOP + 122} width={92} height="9" rx="4.5" fill="#B0662C" opacity="0.9" />
        <text x={cx(X3)} y={TOP + 145} textAnchor="middle" fontSize="10.5" fill="#8F4F1D" fontFamily="var(--font-body)">
          خلاصة بينية
        </text>
      </g>

      {/* طبقة المحادثة الملازمة — ممتدة تحت الثلاث */}
      <g>
        <rect
          x={X3}
          y={TOP + H + 24}
          width={X1 + W - X3}
          height="52"
          rx="14"
          fill="none"
          stroke="#B0662C"
          strokeWidth="1.5"
          strokeDasharray="7 5"
        />
        <text x={(X3 + X1 + W) / 2} y={TOP + H + 47} textAnchor="middle" fontSize="13" fill="#8F4F1D" fontFamily="var(--font-body)" fontWeight="600">
          المحادثة التفاعلية
        </text>
        <text x={(X3 + X1 + W) / 2} y={TOP + H + 66} textAnchor="middle" fontSize="11.5" fill="#3A3F47" fontFamily="var(--font-body)">
          طبقة ملازمة للمناطق الثلاث — تسأل، تعدّل، توسّع، والقرار للباحث
        </text>
      </g>
    </svg>
  );
}
