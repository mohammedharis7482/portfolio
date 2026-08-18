"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Button from "./Button";
import { nav, site } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-[76px]">
          <Link
            href="#"
            className="flex items-center gap-2 font-semibold text-[var(--color-text-primary)]"
          >
            <span className="hidden sm:inline">{site.name}</span>
            <span className="sm:hidden">{site.initials}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <span className="flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              {site.availability}
            </span>
            <Button href="#contact" variant="dark">
              Let&apos;s Talk →
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className="h-[1.5px] w-full bg-[var(--color-text-primary)]" />
              <span className="h-[1.5px] w-full bg-[var(--color-text-primary)]" />
              <span className="h-[1.5px] w-full bg-[var(--color-text-primary)]" />
            </div>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-border)]">
          <Container>
            <div className="flex flex-col py-5 gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[16px] text-[var(--color-text-primary)]"
                >
                  {item.label}
                </a>
              ))}
              <span className="flex items-center gap-2 text-[13px] text-[var(--color-text-secondary)] mt-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                {site.availability}
              </span>
              <Button href="#contact" variant="dark" className="w-full mt-1">
                Let&apos;s Talk →
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
