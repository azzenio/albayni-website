"use client";

import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 md:px-8">
        <a href="#top" aria-label="البيني — الصفحة الرئيسية">
          <Logo />
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-body transition-colors hover:text-copper-deep">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#demo"
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-ink-soft"
          >
            شاهد النموذج
          </a>
          <a
            href="#contact"
            className="rounded-full border border-ink/25 px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-copper hover:text-copper-deep"
          >
            شارك اهتمامك
          </a>
        </div>

        <button
          className="rounded p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="التنقل" className="border-t border-line/70 bg-paper px-5 pb-5 pt-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2.5 text-body hover:bg-sand"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2">
            <a href="#demo" onClick={() => setOpen(false)} className="rounded-full bg-ink px-5 py-2.5 text-center text-sm font-medium text-paper">
              شاهد النموذج
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full border border-ink/25 px-5 py-2.5 text-center text-sm font-medium text-ink">
              شارك اهتمامك
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
