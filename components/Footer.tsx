import Logo from "./Logo";
import { footer, nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sand/50">
      <div className="mx-auto grid max-w-content gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-body/80">{footer.line}</p>
          <p className="mt-2 text-sm text-body/60">{site.stageNotice}</p>
        </div>
        <nav aria-label="روابط الأقسام">
          <h3 className="text-sm font-semibold text-ink">الأقسام</h3>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-body/80 hover:text-copper-deep">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold text-ink">تواصل</h3>
          <p className="mt-3 text-sm text-body/80">{site.email}</p>
          <ul className="mt-4 space-y-2">
            <li><a href="/privacy" className="text-sm text-body/80 hover:text-copper-deep">سياسة الخصوصية</a></li>
            <li><a href="/terms" className="text-sm text-body/80 hover:text-copper-deep">شروط الاستخدام</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line/70 py-4 text-center text-sm text-body/60">{footer.rights}</div>
    </footer>
  );
}
