"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/* ── Khoj logo SVG — matches the actual wheat/plant icon on the sign ── */
function KhojLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-label="Khoj logo">
      {/* Rounded square background — dark cream like signage box */}
      <rect width="40" height="40" rx="8" fill="#F0EBD5" />
      {/* Coffee cup base */}
      <path d="M12 26h16l-2 4H14l-2-4z" fill="#C4892C" />
      {/* Cup body */}
      <path d="M13 18h14l-1.5 8h-11L13 18z" fill="#C4892C" />
      {/* Cup handle */}
      <path d="M27 20h3a2 2 0 010 4h-3" stroke="#C4892C" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Steam / wheat sprouts */}
      <path d="M16 16c0-3 2-5 2-5s0 2-1 4" stroke="#C4892C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M20 14c0-3 2-5 2-5s0 2-1 4" stroke="#C4892C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M24 16c0-3 2-5 2-5s0 2-1 4" stroke="#C4892C" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const navLinks = [
  { href: "/",        label: "Home"      },
  { href: "/menu",    label: "Menu"      },
  { href: "/gallery", label: "Gallery"   },
  { href: "/about",   label: "Our Story" },
  { href: "/contact", label: "Contact"   },
];

const GOLD   = "#C4892C";
const DARK   = "rgba(30,26,16,0.97)";
const BORDER = "rgba(196,137,44,0.15)";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome ? "shadow-[0_4px_32px_rgba(0,0,0,0.5)]" : "bg-transparent"
        }`}
        style={scrolled || !isHome ? { background: DARK, backdropFilter: "blur(16px)" } : {}}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 md:h-18 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.06, rotate: 4 }} transition={{ type: "spring", stiffness: 280 }}>
              <KhojLogo size={38} />
            </motion.div>
            <div className="flex flex-col leading-none gap-0.5">
              {/* KHOJ in Montserrat Black — matches exact signage font */}
              <span
                className="khoj-wordmark leading-none"
                style={{ fontSize: "1.45rem" }}
              >
                KHOJ
              </span>
              {/* Sub-label in Dancing Script — matches menu decorative style */}
              <span
                className="leading-none"
                style={{
                  fontFamily: "var(--font-dancing)",
                  fontSize: "0.7rem",
                  color: "rgba(196,137,44,0.65)",
                  fontStyle: "italic",
                }}
              >
                Brewing Happiness
              </span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className="relative px-4 py-2 text-sm font-semibold rounded-full block transition-colors"
                    style={{
                      fontFamily: "var(--font-montserrat)",
                      letterSpacing: "0.04em",
                      color: active ? GOLD : "rgba(240,235,213,0.65)",
                    }}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "rgba(196,137,44,0.1)", border: `1px solid ${BORDER}` }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA + hamburger ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-bold gold-shimmer text-[#1E1A10] shadow-md transition-transform hover:scale-105 active:scale-95"
              style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "0.04em" }}
            >
              Reserve
            </Link>

            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-full transition-colors hover:bg-white/10"
              style={{ color: "#F0EBD5" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={menuOpen ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
              style={{ background: "rgba(30,26,16,0.98)", backdropFilter: "blur(16px)" }}
            >
              <ul className="px-4 pt-3 pb-6 space-y-1">
                {navLinks.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      href={href}
                      className="block px-4 py-3 rounded-xl text-base font-semibold transition-colors"
                      style={{
                        fontFamily: "var(--font-montserrat)",
                        letterSpacing: "0.04em",
                        color: pathname === href ? GOLD : "rgba(240,235,213,0.65)",
                        background: pathname === href ? "rgba(196,137,44,0.1)" : "transparent",
                      }}
                    >
                      {label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="pt-3"
                >
                  <Link
                    href="/contact"
                    className="block text-center px-4 py-3.5 rounded-xl font-bold text-[#1E1A10] gold-shimmer"
                    style={{ fontFamily: "var(--font-montserrat)", letterSpacing: "0.05em" }}
                  >
                    Reserve a Table
                  </Link>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
