import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = { title: "شروط الاستخدام | البيني" };

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" aria-label="العودة إلى الرئيسية">
        <Logo />
      </Link>
      <h1 className="mt-10 text-3xl font-bold">شروط الاستخدام</h1>
      <p className="mt-2 text-sm text-body/60">نسخة أولية — يوليو 2026</p>
      <div className="mt-8 space-y-5 leading-relaxed text-body">
        <p>
          محتوى هذا الموقع تعريفي بمشروع «البيني»، وهو مشروع في مرحلة التطوير الأولي وليس شركة مسجلة أو منتجًا
          تجاريًا متاحًا حاليًا.
        </p>
        <p>
          النموذج التفاعلي المعروض في الموقع نموذج توضيحي ببيانات ثابتة معدة مسبقًا، ولا يعمل خلفه النظام
          الفعلي، ولا يمثل مخرجات ذكاء اصطناعي حقيقية أو مراجع فعلية.
        </p>
        <p>
          لا يجوز إعادة استخدام الهوية البصرية أو محتوى الموقع لأغراض توحي بشراكة أو اعتماد رسمي دون موافقة
          كتابية من فريق المشروع.
        </p>
      </div>
    </main>
  );
}
