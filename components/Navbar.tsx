"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-950 text-sm font-bold text-amber-400">
            RCH
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-slate-900 sm:text-base">
              Raj Copy House
            </div>
            <div className="hidden text-xs text-slate-500 sm:block">
              Total Solutions
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-900 ${
                pathname === link.href
                  ? "text-blue-900"
                  : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+919810035108"
            className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-900"
          >
            <PhoneIcon />
            +91 98100 35108
          </a>
          <a
            href="https://wa.me/919810035108"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 ${
                  pathname === link.href
                    ? "text-blue-900"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <a
              href="tel:+919810035108"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700"
              onClick={() => setMenuOpen(false)}
            >
              <PhoneIcon />
              Call: +91 98100 35108
            </a>
            <a
              href="https://wa.me/919810035108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 py-2.5 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              WhatsApp for Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}
