import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-paper px-6 text-center">
      <Logo />
      <h1 className="text-3xl font-bold md:text-4xl">هذه الصفحة تقع خارج الخريطة.</h1>
      <p className="max-w-md text-body/80">
        الرابط الذي وصلت إليه غير موجود. يمكنك العودة إلى الصفحة الرئيسية ومتابعة الاستكشاف من هناك.
      </p>
      <Link
        href="/"
        className="rounded-full bg-copper px-7 py-3 font-medium text-paper transition-colors hover:bg-copper-deep"
      >
        العودة إلى الرئيسية
      </Link>
    </main>
  );
}
