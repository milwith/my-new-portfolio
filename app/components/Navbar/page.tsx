"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle/page";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/ExperienceAndSkills", label: "Experience & Skills" },
    { href: "/Projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-5 md:px-10 border-b border-slate-200 dark:border-slate-800">
        <Link href="/" className="text-lg md:text-xl font-semibold">
          Software Engineer
        </Link>

        <ul className="hidden md:flex gap-8 text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative pb-1 transition hover:text-slate-900 dark:hover:text-white ${
                  isActive(item.href)
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-600 transition-all ${
                    isActive(item.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm text-white"
          >
            Discuss for Projects
          </Link>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-200"
            aria-label="Open menu"
          >
            <i className="fa-solid fa-bars" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/50 md:hidden"
            aria-label="Close menu overlay"
          />
          <aside className="fixed right-0 top-0 z-50 h-full w-72 border-l border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900 md:hidden">
            <div className="flex items-center justify-between">
              <p className="text-base font-semibold text-slate-900 dark:text-white">Menu</p>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-200"
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
            </div>

            <ul className="mt-8 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive(item.href)
                        ? "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 inline-block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
            >
              Discuss for Projects
            </Link>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;
