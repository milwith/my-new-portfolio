"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../ThemeToggle/page";

const Navbar = () => {
  const pathname = usePathname();

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
    <nav className="flex items-center justify-between px-10 py-5 border-b border-slate-200 dark:border-slate-800">
      <Link href="/" className="text-xl font-semibold">
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

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full text-sm text-white"
        >
          Discuss for Projects
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
