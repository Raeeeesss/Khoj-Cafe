"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const GOLD = "#C4892C";

const fadeUp: Variants  = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } } };
const stagger: Variants = { visible: { transition: { staggerChildren: 0.12 } } };
const fadeIn: Variants  = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" as const } } };

const timeline = [
  {
    year: "The Idea", img: "https://images.unsplash.com/photo-1554118811-1e0d0a7e1d7f?w=600&q=80&fit=crop&auto=format",
    title: "Brewing Something Big",
    desc:  "It began with a simple conviction: Kozhikode deserved a café that felt like a warm hug — great food, beautiful interiors, and genuine hospitality. Khoj was born from that dream.",
    color: GOLD,
  },
  {
    year: "Opening", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80&fit=crop&auto=format",
    title: "Doors Open, Hearts Follow",
    desc:  "From day one the charcoal exterior, the LED wave ceiling and the terracotta seating made Khoj unforgettable. Kozhikode walked in curious and left in love.",
    color: "#8B4020",
  },
  {
    year: "Rise", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&fit=crop&auto=format",
    title: "The City's Favourite",
    desc:  "The Khoj Crinkles, Jack The Ripper, Ghost Momos and Khoj Spicy Shawarma became legends in Kozhikode's food scene. 3,000+ reviews and a 4.5-star rating followed.",
    color: GOLD,
  },
  {
    year: "Today", img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80&fit=crop&auto=format",
    title: "Still Brewing Happiness",
    desc:  "Open every day from 11 AM to 11:30 PM, Khoj remains Kozhikode's go-to café — for dates, friend gatherings, family lunches and late-night hunger strikes alike.",
    color: "#A07840",
  },
];

const values = [
  { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop&auto=format", title: "Designed to Feel Good",    desc: "LED wave ceilings, terracotta seating and warm wood — every detail is intentional." },
  { img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&fit=crop&auto=format", title: "Bold, Honest Food",         desc: "No shortcuts. From crinkle fries to shawarma, everything is made fresh." },
  { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&fit=crop&auto=format", title: "Crafted Every Morning",     desc: "Our kitchen starts early so your meal arrives perfect." },
  { img: "https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=600&q=80&fit=crop&auto=format",   title: "A Place to Stay",           desc: "Open late for a reason — some moments deserve more time." },
];

export default function AboutPage() {
  const tlRef   = useRef<HTMLDivElement>(null);
  const valRef  = useRef<HTMLDivElement>(null);
  const tlInView  = useInView(tlRef,  { once: true, margin: "-8% 0px" });
  const valInView = useInView(valRef, { once: true, margin: "-8% 0px" });

  return (
    <div className="overflow-x-hidden" style={{ background: "#1E1A10" }}>

      {/* ── Hero split ───────────────────────── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

        {/* Left — photo */}
        <div className="relative lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=1200&q=90&fit=crop&auto=format"
            alt="Khoj Calicut interior" fill priority className="object-cover" unoptimized
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right,transparent 0%,rgba(26,18,0,0.25) 60%,rgba(26,18,0,0.88) 100%)" }} />
        </div>

        {/* Right — content */}
        <div className="relative lg:w-1/2 flex items-center px-6 sm:px-12 lg:px-16 pt-10 sm:pt-16 lg:pt-0 pb-12 lg:pb-0">
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 60% 40%,rgba(212,168,67,0.06) 0%,transparent 70%)" }} />

          <div className="relative z-10 max-w-xl">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-xs font-semibold tracking-[0.35em] uppercase mb-4" style={{ color: GOLD }}>
              Kozhikode · Est. S Beach Road
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.8 }}
              className="text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(3rem,8vw,5.5rem)" }}
            >
              Our Story
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.65, duration: 0.6 }}
              className="h-px max-w-xs mb-8" style={{ background: `linear-gradient(90deg,${GOLD},transparent)` }}
            />
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}
              className="text-white/60 text-base sm:text-lg leading-relaxed mb-8">
              Khoj means <em style={{ color: GOLD }}>&ldquo;search&rdquo;</em> — and we believe everyone is searching
              for a place that feels like home. We built Khoj to be exactly that:
              warm, welcoming, and unforgettable.
            </motion.p>

            {/* Mini stats */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {[
                { v: 4,    s: ".5",  l: "Rating"    },
                { v: 3000, s: "+",   l: "Guests"    },
                { v: 60,   s: "+",   l: "Dishes"    },
                { v: 11,   s: " PM", l: "Closes"    },
              ].map(({ v, s, l }) => (
                <div key={l}>
                  <p className="text-2xl font-bold mb-0.5" style={{ fontFamily: "var(--font-playfair)", color: GOLD }}>
                    <AnimatedCounter target={v} suffix={s} />
                  </p>
                  <p className="text-white/35 text-xs tracking-wide uppercase">{l}</p>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}>
              <Link href="/menu" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-black gold-shimmer shadow-xl">
                Explore the Menu <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────── */}
      <section ref={tlRef} className="py-14 sm:py-24 lg:py-32" style={{ background: "#111108" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={tlInView ? "visible" : "hidden"} className="text-center mb-16">
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>How We Got Here</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>The Khoj Journey</motion.h2>
            <motion.div variants={fadeIn} className="h-px max-w-32 mx-auto mt-5" style={{ background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -48 : 48 }}
                animate={tlInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.14, duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Photo */}
                <div className="relative w-full lg:w-2/5 h-56 rounded-2xl overflow-hidden shrink-0" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}>
                  <Image src={item.img} alt={item.title} fill className="object-cover" unoptimized />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 60%)" }} />
                  <span className="absolute bottom-4 left-4 font-bold text-xl" style={{ fontFamily: "var(--font-playfair)", color: item.color, textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}>
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="hidden lg:flex flex-col items-center gap-2 shrink-0">
                  <div className="w-4 h-4 rounded-full border-2 border-[#111108]" style={{ background: item.color, boxShadow: `0 0 0 4px ${item.color}33` }} />
                  {i < timeline.length - 1 && <div className="w-px flex-1 min-h-20" style={{ background: "rgba(255,255,255,0.08)" }} />}
                </div>

                {/* Text */}
                <div className="lg:w-2/5 p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(212,168,67,0.12)" }}>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)", color: item.color }}>{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────── */}
      <section ref={valRef} className="py-14 sm:py-24 lg:py-32" style={{ background: "#FAF5EA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate={valInView ? "visible" : "hidden"} className="text-center mb-14">
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>What We Stand For</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#1E1A10" }}>Our Values</motion.h2>
            <motion.div variants={fadeIn} className="h-px max-w-32 mx-auto mt-5" style={{ background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
          </motion.div>

          <motion.div variants={stagger} initial="hidden" animate={valInView ? "visible" : "hidden"} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ img, title, desc }) => (
              <motion.div
                key={title} variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group relative rounded-2xl overflow-hidden" style={{ height: "320px", boxShadow: "0 8px 32px rgba(26,18,0,0.15)" }}
              >
                <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="text-white text-lg font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate={valInView ? "visible" : "hidden"} className="text-center mt-14">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-black gold-shimmer shadow-xl">
              Come Visit Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Full-width closer ─────────────────── */}
      <section className="relative h-72 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=85&fit=crop&auto=format" alt="Khoj atmosphere" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4" style={{ background: "rgba(26,18,0,0.68)" }}>
          <p className="text-white mb-1" style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(2rem,7vw,4rem)" }}>
            Brewing Happiness.
          </p>
          <p className="text-white/45 text-sm">S Beach Rd, Kuttichira · Kozhikode · 11 AM – 11:30 PM Daily</p>
        </div>
      </section>
    </div>
  );
}
