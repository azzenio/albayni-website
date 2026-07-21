/** شعار البيني — الرمز مضمّن SVG والكلمة نص حي للوضوح بكل المقاسات */
export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M 44 12 C 82 36, 82 70, 44 94" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      <path d="M 76 12 C 38 36, 38 70, 76 94" fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" />
      <path d="M 60 31 C 70.5 44, 70.5 60, 60 73 C 49.5 60, 49.5 44, 60 31 Z" fill="#B0662C" />
      <circle cx="60" cy="107" r="6.5" fill="#B0662C" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-2.5 ${light ? "text-paper" : "text-ink"}`}>
      <Mark />
      <span className="font-heading text-2xl font-bold leading-none">البيني</span>
    </span>
  );
}
