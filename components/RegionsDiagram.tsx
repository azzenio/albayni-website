/**
 * رسم المناطق الثلاث: خريطة المعرفة → المحرك البيني → الدراسة البينية،
 * مع شريط المحادثة الملازم أسفلها ممتدًا عبر الثلاث.
 * RTL: التسلسل من اليمين إلى اليسار.
 */
export default function RegionsDiagram() {
  return (
    <svg
      viewBox="0 0 720 260"
      className="w-full"
      role="img"
      aria-label="ثلاث مناطق متتابعة من اليمين إلى اليسار: خريطة المعرفة ثم المحرك البيني ثم الدراسة البينية، والمحادثة ملازمة لها جميعًا"
    >
      {/* المنطقة الأولى — أقصى اليمين */}
      <g>
        <rect x="490" y="20" width="210" height="140" rx="14" fill="#EDE4D3" />
        <text x="595" y="48" textAnchor="middle" fontSize="12" fill="#8F4F1D" fontFamily="var(--font-body)" fontWeight="600">
          المنطقة الأولى
        </text>
        <text x="595" y="70" textAnchor="middle" fontSize="15" fill="#1C2430" fontFamily="var(--font-heading)" fontWeight="700">
          خريطة المعرفة
        </text>
        {/* طبقات متدرجة */}
        <rect x="530" y="86" width="130" height="9" rx="4.5" fill="#1C2430" opacity="0.75" />
        <rect x="520" y="101" width="150" height="9" rx="4.5" fill="#1C2430" opacity="0.55" />
        <rect x="512" y="116" width="166" height="9" rx="4.5" fill="#1C2430" opacity="0.38" />
        <rect x="506" y="131" width="178" height="9" rx="4.5" fill="#1C2430" opacity="0.22" />
      </g>

      {/* سهم 1 */}
      <g stroke="#B0662C" strokeWidth="2" fill="none">
        <line x1="486" y1="90" x2="446" y2="90" />
        <polyline points="456,83 446,90 456,97" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* المنطقة الثانية — الوسط */}
      <g>
        <rect x="255" y="20" width="185" height="140" rx="14" fill="#1C2430" />
        <text x="347" y="48" textAnchor="middle" fontSize="12" fill="#B0662C" fontFamily="var(--font-body)" fontWeight="600">
          المنطقة الثانية
        </text>
        <text x="347" y="70" textAnchor="middle" fontSize="15" fill="#FAF6EE" fontFamily="var(--font-heading)" fontWeight="700">
          المحرك البيني
        </text>
        {/* انتقاء: نقاط تتجمع في المساحة البينية */}
        <circle cx="300" cy="95" r="3.5" fill="#FAF6EE" opacity="0.5" />
        <circle cx="300" cy="120" r="3.5" fill="#FAF6EE" opacity="0.5" />
        <circle cx="300" cy="143" r="3.5" fill="#FAF6EE" opacity="0.5" />
        <line x1="300" y1="95" x2="347" y2="120" stroke="#B0662C" strokeWidth="1.2" opacity="0.7" />
        <line x1="300" y1="120" x2="347" y2="120" stroke="#B0662C" strokeWidth="1.2" opacity="0.7" />
        <line x1="300" y1="143" x2="347" y2="120" stroke="#B0662C" strokeWidth="1.2" opacity="0.7" />
        <path d="M 361 100 C 373 110, 373 130, 361 140 C 349 130, 349 110, 361 100 Z" fill="#B0662C" />
        <text x="405" y="124" textAnchor="middle" fontSize="11" fill="#FAF6EE" fontFamily="var(--font-body)" opacity="0.8">
          الإطار
        </text>
      </g>

      {/* سهم 2 */}
      <g stroke="#B0662C" strokeWidth="2" fill="none">
        <line x1="251" y1="90" x2="211" y2="90" />
        <polyline points="221,83 211,90 221,97" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* المنطقة الثالثة — أقصى اليسار */}
      <g>
        <rect x="20" y="20" width="185" height="140" rx="14" fill="#EDE4D3" />
        <text x="112" y="48" textAnchor="middle" fontSize="12" fill="#8F4F1D" fontFamily="var(--font-body)" fontWeight="600">
          المنطقة الثالثة
        </text>
        <text x="112" y="70" textAnchor="middle" fontSize="15" fill="#1C2430" fontFamily="var(--font-heading)" fontWeight="700">
          الدراسة البينية
        </text>
        {/* أسطر التقرير */}
        <rect x="46" y="88" width="132" height="7" rx="3.5" fill="#1C2430" opacity="0.7" />
        <rect x="66" y="102" width="112" height="7" rx="3.5" fill="#1C2430" opacity="0.4" />
        <rect x="46" y="116" width="132" height="7" rx="3.5" fill="#1C2430" opacity="0.4" />
        <rect x="96" y="130" width="82" height="7" rx="3.5" fill="#B0662C" opacity="0.85" />
        <text x="60" y="137" textAnchor="middle" fontSize="9.5" fill="#8F4F1D" fontFamily="var(--font-body)">
          الخلاصة
        </text>
      </g>

      {/* شريط المحادثة الملازم */}
      <g>
        <rect x="20" y="186" width="680" height="52" rx="14" fill="none" stroke="#B0662C" strokeWidth="1.5" strokeDasharray="7 5" />
        <text x="360" y="209" textAnchor="middle" fontSize="13" fill="#8F4F1D" fontFamily="var(--font-body)" fontWeight="600">
          المحادثة التفاعلية
        </text>
        <text x="360" y="228" textAnchor="middle" fontSize="11.5" fill="#3A3F47" fontFamily="var(--font-body)">
          ملازمة للمناطق الثلاث — تسأل، تعدّل، توسّع، والقرار للباحث
        </text>
      </g>
    </svg>
  );
}
