import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = { title: "سياسة الخصوصية | البيني" };

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/" aria-label="العودة إلى الرئيسية">
        <Logo />
      </Link>
      <h1 className="mt-10 text-3xl font-bold">سياسة الخصوصية</h1>
      <p className="mt-2 text-sm text-body/60">نسخة أولية — يوليو 2026</p>
      <div className="mt-8 space-y-5 leading-relaxed text-body">
        <p>
          هذا الموقع موقع تعريفي لمشروع «البيني» في مرحلته الأولى. لا يجمع الموقع بيانات شخصية عبر نماذج أو
          حسابات، ولا يستخدم ملفات تعريف ارتباط تتبعية.
        </p>
        <p>
          عند تواصلك معنا عبر البريد الإلكتروني، تُستخدم رسالتك وبياناتها للرد عليك ومتابعة اهتمامك فقط، ولا
          تُشارك مع أي طرف ثالث.
        </p>
        <p>
          عند تطوير المنصة الفعلية مستقبلًا، ستُنشر سياسة خصوصية تفصيلية تشمل التعامل مع الملفات والبيانات
          البحثية، بما يتوافق مع نظام حماية البيانات الشخصية في المملكة العربية السعودية.
        </p>
      </div>
    </main>
  );
}
