"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import GalleryLightbox, { GalleryTile } from "@/components/GalleryLightbox";

const GOLD = "#C4892C";

const InstagramSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

/* ─── Gallery tiles ─────────────────────────────────── */
export const galleryTiles: GalleryTile[] = [
  { id: 1,  img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&fit=crop&auto=format", label: "The Khoj Atmosphere",    sub: "Warm interiors, golden glow",            tag: "Interior" },
  { id: 2,  img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&fit=crop&auto=format", label: "Jack The Ripper",        sub: "Our biggest, boldest burger",            tag: "Burgers"  },
  { id: 3,  img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&fit=crop&auto=format", label: "Khoj Crinkles",          sub: "The signature loaded fries",            tag: "Loaded Fries" },
  { id: 4,  img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&fit=crop&auto=format", label: "Artisan Coffee",         sub: "Brewed with care, every time",          tag: "Coffee"   },
  { id: 5,  img: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=600&q=80&fit=crop&auto=format", label: "Khoj Spicy Shawarma",   sub: "Rolled in soft kuboos",                 tag: "Shawarma" },
  { id: 6,  img: "https://images.unsplash.com/photo-1621996346565-ead507bfda20?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1621996346565-ead507bfda20?w=600&q=80&fit=crop&auto=format", label: "Alfredo Pasta",          sub: "Creamy, Italian, fresh",                tag: "Pasta"    },
  { id: 7,  img: "https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=600&q=80&fit=crop&auto=format", label: "Cosy Seating",           sub: "Every corner is yours",                 tag: "Interior" },
  { id: 8,  img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80&fit=crop&auto=format", label: "Ghost Momos",            sub: "India's spiciest momo",                 tag: "Momos"    },
  { id: 9,  img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80&fit=crop&auto=format", label: "Pizza Paradize",         sub: "Loaded with flavour",                   tag: "Pizza"    },
  { id: 10, img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80&fit=crop&auto=format", label: "Evening at Khoj",        sub: "Open until 11:30 PM",                   tag: "Night"    },
  { id: 11, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&q=80&fit=crop&auto=format", label: "Chicken Club Sandwich",  sub: "Classic, layered, perfect",             tag: "Sandwiches" },
  { id: 12, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=90&fit=crop&auto=format", thumb: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&fit=crop&auto=format", label: "Fresh Salads",           sub: "Eve Salad & Curry Leaves",              tag: "Salads"   },
];

const tags = ["All", ...Array.from(new Set(galleryTiles.map(t => t.tag)))];

const stagger: Variants = { visible: { transition: { staggerChildren: 0.06 } } };
const tileV: Variants   = {
  hidden:  { opacity: 0, scale: 0.92, y: 18 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.5, ease: "easeOut" as const } },
};

const ASPECTS = ["4/3","3/4","1/1","4/3","3/4","16/9","1/1","4/3","3/4","1/1","4/3","3/4"];

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [filter,      setFilter]      = useState("All");

  const filtered = filter === "All" ? galleryTiles : galleryTiles.filter(t => t.tag === filter);

  const open  = (id: number) => setActiveIndex(filtered.findIndex(t => t.id === id));
  const prev  = () => setActiveIndex(i => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next  = () => setActiveIndex(i => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      <GalleryLightbox tiles={filtered} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onPrev={prev} onNext={next} />

      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden" style={{ background: "#1E1A10" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1554118811-1e0d0a7e1d7f?w=1920&q=85&fit=crop&auto=format" alt="Khoj cafe" fill className="object-cover opacity-22" unoptimized />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(26,18,0,0.55),rgba(26,18,0,0.92))" }} />
        </div>

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>
            #KhojCalicut
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-white mb-5"
            style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(3rem,10vw,6rem)" }}
          >
            Gallery
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6 }}
            className="h-px max-w-40 mx-auto mb-6"
            style={{ background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }}
          />
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="text-white/55 text-base max-w-md mx-auto mb-8">
            Real food. Real moments. Real Khoj.
            <span className="block font-medium mt-1" style={{ color: GOLD }}>Click any photo to expand.</span>
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
            <a
              href="https://www.instagram.com/khojcalicut/"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(135deg,#833AB4,#FD1D1D,#FCB045)" }}
            >
              <InstagramSVG /> Follow @khojcalicut
            </a>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-10 sm:py-16" style={{ background: "#FAF5EA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tags.map(tag => (
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all border"
                style={
                  filter === tag
                    ? { background: GOLD, color: "#1E1A10", borderColor: GOLD, boxShadow: `0 4px 16px ${GOLD}55`, fontWeight: 700 }
                    : { background: "#fff", color: "#7A6A4A", borderColor: "rgba(212,168,67,0.2)" }
                }
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* Masonry grid */}
          <motion.div
            key={filter}
            variants={stagger} initial="hidden" animate="visible"
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filtered.map((tile, i) => (
              <motion.div
                key={tile.id} variants={tileV}
                onClick={() => open(tile.id)}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer block"
                style={{ boxShadow: "0 4px 20px rgba(26,18,0,0.18)" }}
              >
                <div className="relative w-full" style={{ aspectRatio: ASPECTS[i % 12] }}>
                  <Image
                    src={tile.thumb} alt={tile.label} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Tag badge */}
                  <span
                    className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                    style={{ background: "rgba(26,18,0,0.6)", backdropFilter: "blur(6px)", border: `1px solid ${GOLD}55`, color: GOLD }}
                  >
                    {tile.tag}
                  </span>

                  {/* Caption on hover */}
                  <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white font-bold text-sm leading-snug mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>{tile.label}</p>
                    <p className="text-white/58 text-xs">{tile.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-sm mb-6" style={{ color: "#7A6A4A" }}>{filtered.length} photos · Updated regularly</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-black gold-shimmer shadow-lg"
            >
              Reserve Your Table
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
