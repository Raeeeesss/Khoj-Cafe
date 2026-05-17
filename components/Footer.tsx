import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

/* Khoj SVG logo mark */
const KhojMark = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
    <rect width="32" height="32" rx="6" fill="#C4892C" />
    <path d="M16 6v4M16 6c0 0-4 2-4 6s4 4 4 8v6" stroke="#1E1A10" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M20 6v4M20 6c0 0 4 2 4 6s-4 4-4 8v6" stroke="#1E1A10" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M12 12c0 0 2-1 4-1s4 1 4 1" stroke="#1E1A10" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const quickLinks = [
  { href: "/",        label: "Home"      },
  { href: "/menu",    label: "Our Menu"  },
  { href: "/gallery", label: "Gallery"   },
  { href: "/about",   label: "Our Story" },
  { href: "/contact", label: "Reserve"   },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "linear-gradient(180deg,#1E1A10 0%,#0E0900 100%)" }}>

      {/* Gold LED top border */}
      <div
        className="h-0.5 w-full"
        style={{ background: "linear-gradient(90deg,transparent,#C4892C,#FFD080,#C4892C,transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <KhojMark />
              <div className="flex flex-col leading-none">
                <span
                  className="leading-none khoj-wordmark"
                  style={{ fontSize: "1.55rem", letterSpacing: "0.08em" }}
                >
                  KHOJ
                </span>
                <span
                  className="text-white/40 leading-none mt-0.5"
                  style={{ fontSize: "0.6rem", letterSpacing: "0.22em", fontWeight: 600, textTransform: "uppercase" }}
                >
                  Brewing Happiness
                </span>
              </div>
            </div>

            <p className="text-white/42 text-sm leading-relaxed max-w-xs mb-6">
              Kozhikode&apos;s beloved café on S Beach Road — great food,
              warm interiors and the taste of happiness in every bite.
            </p>

            {/* Neon echo tags */}
            <div className="flex items-center gap-4 mb-7">
              <span
                className="text-sm italic"
                style={{ fontFamily: "var(--font-dancing)", fontSize: "1.15rem", color: "#C4892C", textShadow: "0 0 12px rgba(212,168,67,0.5)" }}
              >
                Brewing Happiness
              </span>
              <span className="text-white/18 text-xs">·</span>
              <span
                className="text-sm italic"
                style={{ fontFamily: "var(--font-dancing)", fontSize: "1.15rem", color: "#FFD080", textShadow: "0 0 10px rgba(255,208,128,0.4)" }}
              >
                Calicut
              </span>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="tel:+918075858083"
                className="flex items-center gap-2.5 text-sm transition-colors group"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                <Phone size={14} className="shrink-0 group-hover:scale-110 transition-transform" style={{ color: "#C4892C" }} />
                +91 80758 58083
              </a>
              <div className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.48)" }}>
                <MapPin size={14} className="shrink-0 mt-0.5" style={{ color: "#C4892C" }} />
                S Beach Rd, Kuttichira, Kozhikode, Kerala 673001
              </div>
              <div className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.48)" }}>
                <Clock size={14} className="shrink-0" style={{ color: "#C4892C" }} />
                Daily · 11:00 AM – 11:30 PM
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm flex items-center gap-1.5 transition-colors group"
                    style={{ color: "rgba(255,255,255,0.42)" }}
                  >
                    <span
                      className="w-0 group-hover:w-3 h-px transition-all duration-300"
                      style={{ background: "#C4892C" }}
                    />
                    <span className="group-hover:text-[#C4892C] transition-colors">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h3
              className="text-white font-semibold text-sm mb-5 tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Connect
            </h3>

            <div className="flex gap-3 mb-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/khojcalicut/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 transition-all hover:text-white"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <InstagramIcon />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918075858083"
                target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/50 transition-all hover:text-[#25D366]"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.118 1.512 5.855L.046 23.45A.5.5 0 00.55 24l5.748-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.507 16.785c-.232.651-1.346 1.243-1.853 1.319-.476.07-.87.083-1.291-.098-.241-.105-.553-.228-.951-.4-1.667-.72-2.757-2.414-2.841-2.526-.083-.112-.677-.899-.677-1.716s.427-1.215.579-1.381c.152-.166.331-.207.441-.207s.22.002.316.007c.101.005.237-.038.37.282.138.331.467 1.144.509 1.226.041.082.069.178.014.286-.055.107-.083.174-.166.268-.082.094-.173.21-.248.282-.082.082-.167.17-.072.334.095.165.424.698.91 1.131.625.559 1.152.732 1.316.814.165.082.261.069.358-.041.096-.11.41-.478.52-.642.111-.165.221-.138.372-.083.152.055.965.455 1.13.538.165.082.275.124.316.193.041.069.041.399-.191 1.049z"/>
                </svg>
              </a>
            </div>

            <Link
              href="/contact"
              className="block text-center py-3.5 rounded-2xl font-bold text-black text-sm gold-shimmer mb-3"
              style={{ boxShadow: "0 4px 16px rgba(212,168,67,0.25)" }}
            >
              Reserve a Table
            </Link>
            <p className="text-white/25 text-xs text-center">Walk-ins always welcome!</p>

            {/* Rating badge */}
            <div
              className="mt-5 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl"
              style={{ background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.15)" }}
            >
              <span style={{ color: "#C4892C" }}>★★★★★</span>
              <span className="text-white/55 text-xs font-medium">4.5 · 3,000+ Reviews</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            © {year} Khoj Calicut · S Beach Rd, Kozhikode · All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
            Brewing Happiness · Open Daily 11 AM – 11:30 PM
          </p>
        </div>
      </div>
    </footer>
  );
}
