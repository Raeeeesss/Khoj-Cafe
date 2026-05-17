"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { LedBanner, LedDivider } from "@/components/LedWave";

const GOLD  = "#C4892C";
const LED   = "#FFD060";
const DARK  = "#1E1A10";
const CREAM = "#F0EBD5";

const stagger: Variants = { visible: { transition: { staggerChildren: 0.11 } } };
const fadeUp: Variants  = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.7, ease: "easeOut" as const } },
};
const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" as const } },
};

const featured = [
  {
    img:   "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=85&fit=crop&auto=format",
    name:  "Khoj Crinkles",
    price: "₹320",
    tag:   "House Signature",
    desc:  "Crinkle-cut loaded fries with secret Khoj sauce, melted cheese & premium toppings.",
  },
  {
    img:   "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=85&fit=crop&auto=format",
    name:  "Jack The Ripper",
    price: "₹230",
    tag:   "Best Seller",
    desc:  "Our biggest, boldest burger — stacked double patty, signature sauce & the works.",
  },
  {
    img:   "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=800&q=85&fit=crop&auto=format",
    name:  "Khoj Spicy Shawarma",
    price: "₹110",
    tag:   "Street Favourite",
    desc:  "Juicy spiced meat, fresh veggies, tangy sauces — rolled in warm kuboos bread.",
  },
];

const stats = [
  { value: 4,    suffix: ".5",  label: "Google Rating"    },
  { value: 3000, suffix: "+",   label: "Happy Guests"     },
  { value: 60,   suffix: "+",   label: "Menu Items"       },
  { value: 5,    suffix: "+",   label: "Years in Calicut" },
];

const atmosphere = [
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&fit=crop&auto=format", label: "Warm Interiors",    sub: "LED waves, wood & terracotta"       },
  { img: "https://images.unsplash.com/photo-1554118811-1e0d0a7e1d7f?w=800&q=85&fit=crop&auto=format",   label: "Artisan Brews",     sub: "Coffee crafted with care"            },
  { img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=85&fit=crop&auto=format", label: "Bold Food",         sub: "Loaded, honest, unforgettable"      },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85&fit=crop&auto=format", label: "The Vibe",          sub: "Perfect for every occasion"         },
];

/* ── Font helpers ── */
const displayFont  = { fontFamily: "var(--font-montserrat)", fontWeight: 900 };
const scriptFont   = { fontFamily: "var(--font-dancing)", fontWeight: 700 };
const serifFont    = { fontFamily: "var(--font-playfair)", fontWeight: 700 };
const bodyFont     = { fontFamily: "var(--font-montserrat)" };

export default function HomePage() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featRef  = useRef<HTMLDivElement>(null);
  const atmoRef  = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const statsInView = useInView(statsRef, { once: true, margin: "-10% 0px" });
  const featInView  = useInView(featRef,  { once: true, margin: "-8%  0px" });
  const atmoInView  = useInView(atmoRef,  { once: true, margin: "-8%  0px" });

  return (
    <div className="overflow-x-hidden" style={{ background: DARK }}>

      {/* ══════════════════════════════════════════
          HERO — minimal
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-170 flex items-center justify-center overflow-hidden"
      >
        {/* Parallax background photo */}
        <motion.div className="absolute inset-0 scale-110" style={{ y: heroImgY }}>
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90&fit=crop&auto=format"
            alt="Khoj Calicut" fill priority className="object-cover" unoptimized
          />
        </motion.div>

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(30,26,16,0.55) 0%, rgba(30,26,16,0.72) 100%)" }}
        />

        {/* LED strip — brand identity mark at top */}
        <div className="absolute top-0 inset-x-0 z-10">
          <LedBanner color={LED} opacity={0.65} height={20} waves={14} />
        </div>

        {/* ── Minimal content — 4 elements only ── */}
        <div className="relative z-10 text-center px-4">

          {/* KHOJ wordmark */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            style={{
              ...displayFont,
              fontSize: "clamp(5rem, 20vw, 13rem)",
              lineHeight: 1,
              letterSpacing: "0.1em",
              color: CREAM,
              textShadow: `0 2px 32px rgba(0,0,0,0.5)`,
            }}
          >
            KHOJ
          </motion.h1>

          {/* Tagline in Dancing Script */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            style={{ ...scriptFont, fontSize: "clamp(1.1rem, 3vw, 1.8rem)", color: GOLD }}
            className="mt-1 mb-10"
          >
            Brewing Happiness · Calicut
          </motion.p>

          {/* Two buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/menu"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-[#1E1A10] gold-shimmer"
                style={{ ...displayFont, letterSpacing: "0.06em" }}
              >
                EXPLORE MENU <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm border transition-colors"
                style={{
                  borderColor: "rgba(240,235,213,0.3)",
                  color: CREAM,
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(8px)",
                  ...displayFont,
                  letterSpacing: "0.06em",
                }}
              >
                RESERVE
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity hover:opacity-70"
          style={{ color: "rgba(240,235,213,0.35)" }}
        >
          <ChevronDown size={20} className="animate-bounce" />
        </motion.a>
      </section>

      {/* ══════════════════════════════════════════
          STATS — charcoal strip
      ══════════════════════════════════════════ */}
      <section id="about" ref={statsRef} style={{ background: "#111008" }}>
        {/* LED wave strip top */}
        <LedBanner color={LED} opacity={0.55} height={22} waves={10} />

        <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger} initial="hidden" animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
          >
            {stats.map(({ value, suffix, label }) => (
              <motion.div key={label} variants={fadeUp}>
                <p className="text-4xl sm:text-5xl font-bold mb-2" style={{ ...displayFont, color: GOLD }}>
                  <AnimatedCounter target={value} suffix={suffix} />
                </p>
                <div className="w-8 h-px mx-auto mb-2" style={{ background: GOLD }} />
                <p className="text-xs tracking-wider uppercase" style={{ color: "rgba(240,235,213,0.4)", ...bodyFont, fontWeight: 600 }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* LED wave strip bottom */}
        <LedBanner color={LED} opacity={0.55} height={22} waves={10} />
      </section>

      {/* ══════════════════════════════════════════
          FEATURED DISHES
      ══════════════════════════════════════════ */}
      <section ref={featRef} className="py-24 lg:py-32" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={featInView ? "visible" : "hidden"} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.35em] uppercase mb-2" style={{ color: GOLD, ...bodyFont }}>
              Our Signatures
            </motion.p>
            {/* Playfair Display for section headings */}
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5" style={serifFont}>
              Can&apos;t Miss These
            </motion.h2>
            <motion.div variants={fadeIn} className="mx-auto mt-2">
              <LedDivider color={LED} />
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate={featInView ? "visible" : "hidden"} className="grid md:grid-cols-3 gap-6">
            {featured.map((item) => (
              <motion.div
                key={item.name} variants={fadeUp}
                whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group rounded-2xl overflow-hidden"
                style={{ background: "#1E1600", boxShadow: "0 4px 32px rgba(0,0,0,0.5)" }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-[#1E1A10]" style={{ background: GOLD, ...bodyFont, letterSpacing: "0.05em" }}>
                    {item.tag}
                  </span>
                  <span
                    className="absolute bottom-4 right-4 text-sm font-bold px-3 py-0.5 rounded-full text-white"
                    style={{ background: "rgba(30,26,16,0.75)", backdropFilter: "blur(6px)", border: `1px solid rgba(196,137,44,0.4)`, ...displayFont }}
                  >
                    {item.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ ...serifFont, color: CREAM }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(240,235,213,0.45)", ...bodyFont, fontWeight: 400 }}>{item.desc}</p>
                  <Link href="/menu" className="inline-flex items-center gap-1.5 text-sm font-bold group-hover:gap-3 transition-all" style={{ color: GOLD, ...bodyFont, letterSpacing: "0.05em" }}>
                    Full Menu <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={featInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm border"
                style={{ borderColor: `rgba(196,137,44,0.35)`, color: CREAM, ...displayFont, letterSpacing: "0.06em" }}
              >
                EXPLORE ALL 60+ ITEMS <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ATMOSPHERE — interior cream section
      ══════════════════════════════════════════ */}
      <section ref={atmoRef} className="py-24 lg:py-32" style={{ background: "#F0EBD5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <motion.div variants={stagger} initial="hidden" animate={atmoInView ? "visible" : "hidden"}>
              <motion.p variants={fadeUp} className="text-xs font-bold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD, ...bodyFont }}>
                The Khoj Experience
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold leading-tight mb-5" style={{ ...serifFont, color: "#1E1A10" }}>
                More Than<br /><em>Just a Café</em>
              </motion.h2>
              <motion.div variants={fadeIn} className="h-px max-w-28 mb-8" style={{ background: `linear-gradient(90deg,${GOLD},transparent)` }} />
              <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "#6A5A3A", ...bodyFont, fontWeight: 400 }}>
                From the warm glow of our LED ceiling waves to the aroma of freshly brewed coffee —
                Khoj is designed to be a place you genuinely want to be in. Every detail,
                from the terracotta seating to the wood-slat ceiling, is there to make you feel at home.
              </motion.p>
              <motion.div variants={fadeUp} className="space-y-4 mb-10">
                {[
                  { t: "Signature LED wave interiors",  d: "Wood slat ceilings & curved LED strips — Kozhikode&apos;s most photogenic café." },
                  { t: "Bold, honest food",             d: "From Khoj Crinkles to Ghost Momos — every item crafted to deliver."             },
                  { t: "Open 11 AM – 11:30 PM",         d: "Long hours because great conversations deserve more time."                      },
                ].map(({ t, d }) => (
                  <div key={t} className="flex gap-4 items-start">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: GOLD }} />
                    <div>
                      <p className="font-bold text-sm mb-0.5" style={{ color: "#1E1A10", ...serifFont }}>{t}</p>
                      <p className="text-sm" style={{ color: "#6A5A3A", ...bodyFont, fontWeight: 400 }}>{d}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-[#1E1A10] shadow-lg"
                  style={{ background: `linear-gradient(135deg,${GOLD},${LED})`, boxShadow: `0 8px 24px ${GOLD}30`, ...displayFont, letterSpacing: "0.05em" }}
                >
                  OUR STORY <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>

            {/* 2×2 photo grid */}
            <motion.div variants={stagger} initial="hidden" animate={atmoInView ? "visible" : "hidden"} className="grid grid-cols-2 gap-3">
              {atmosphere.map(({ img, label, sub }, i) => (
                <motion.div
                  key={label} variants={fadeUp}
                  whileHover={{ scale: 1.04 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className={`group relative rounded-2xl overflow-hidden ${i === 0 ? "row-span-2" : ""}`}
                  style={{ minHeight: i === 0 ? "340px" : "160px" }}
                >
                  <Image src={img} alt={label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <p className="text-white font-bold text-sm mb-0.5" style={serifFont}>{label}</p>
                    <p className="text-white/55 text-xs" style={bodyFont}>{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=85&fit=crop&auto=format"
          alt="Khoj café atmosphere" fill className="object-cover" unoptimized
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(30,26,16,0.90),rgba(42,32,16,0.82),rgba(30,26,16,0.92))" }} />

        {/* Interior LED wave pattern over the photo */}
        <div className="absolute top-1/3 inset-x-0 opacity-20">
          <LedBanner color={LED} height={60} waves={6} opacity={1} />
        </div>

        <div className="relative z-10 py-24 text-center px-4">
          <p className="text-xs font-bold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD, ...bodyFont }}>
            BREWING HAPPINESS
          </p>
          <h2
            style={{ ...scriptFont, fontSize: "clamp(2.5rem,8vw,5rem)", color: CREAM }}
            className="mb-4"
          >
            Reserve Your Table
          </h2>
          <p className="text-base mb-8 max-w-sm mx-auto" style={{ color: "rgba(240,235,213,0.6)", ...bodyFont, fontWeight: 400 }}>
            Walk-ins always welcome. For groups, a reservation is recommended.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-9 py-4 rounded-full font-bold text-sm text-[#1E1A10] gold-shimmer shadow-2xl"
              style={{ boxShadow: `0 8px 32px ${GOLD}40`, ...displayFont, letterSpacing: "0.06em" }}
            >
              BOOK NOW
            </Link>
            <a
              href="https://wa.me/918075858083"
              target="_blank" rel="noopener noreferrer"
              className="px-9 py-4 rounded-full font-bold text-sm text-white border transition-colors"
              style={{ borderColor: "rgba(240,235,213,0.22)", ...displayFont, letterSpacing: "0.06em" }}
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUICK LINKS
      ══════════════════════════════════════════ */}
      <section className="py-12" style={{ background: "#111008", borderTop: `1px solid rgba(196,137,44,0.12)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href: "/menu",    label: "Full Menu",  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=70&fit=crop&auto=format" },
              { href: "/gallery", label: "Gallery",    img: "https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=300&q=70&fit=crop&auto=format"    },
              { href: "/about",   label: "Our Story",  img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&q=70&fit=crop&auto=format" },
              { href: "/contact", label: "Find Us",    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&q=70&fit=crop&auto=format" },
            ].map(({ href, label, img }) => (
              <Link key={href} href={href}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-28 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <Image src={img} alt={label} fill className="object-cover transition-transform duration-500 group-hover:scale-110" unoptimized />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                  <p className="absolute bottom-3 inset-x-0 text-center text-white text-xs font-bold tracking-wider uppercase" style={bodyFont}>{label}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
