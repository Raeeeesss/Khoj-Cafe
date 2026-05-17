"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, Flame, Star, ArrowRight } from "lucide-react";

export type MenuItemData = {
  name:         string;
  price:        string;
  desc:         string;
  img?:         string;   /* real food photo URL */
  popular?:     boolean;
  spicy?:       boolean;
  category:     string;
  ingredients?: string[];
  callout?:     string;
};

interface Props {
  item:    MenuItemData | null;
  onClose: () => void;
}

const backdropVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 26 },
  },
  exit: {
    opacity: 0, scale: 0.92, y: 30,
    transition: { duration: 0.22 },
  },
};

export default function MenuItemModal({ item, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = item ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [item]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-100 flex items-end sm:items-center justify-center p-3 sm:p-6"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(16px)" }}
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            className="relative z-10 w-full max-w-md rounded-3xl overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
            style={{ background: "#1A1A1A", boxShadow: "0 32px 80px rgba(0,0,0,0.8)" }}
          >
            {/* Real food photo header */}
            {item.img ? (
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                  unoptimized
                  priority
                />
                {/* Gradient so bottom content is readable */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges on the photo */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.popular && (
                    <span
                      className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full text-[#0D0D0D]"
                      style={{ background: "#C8973B" }}
                    >
                      <Star size={9} className="fill-current" /> Most Loved
                    </span>
                  )}
                  {item.spicy && (
                    <span
                      className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ background: "rgba(239,68,68,0.9)" }}
                    >
                      <Flame size={9} /> Spicy
                    </span>
                  )}
                </div>

                {/* Category label at bottom of image */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Price */}
                <div
                  className="absolute bottom-4 right-4 text-lg font-bold px-4 py-1 rounded-full text-white"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(200,151,59,0.45)",
                    fontFamily: "var(--font-playfair)",
                    color: "#C8973B",
                  }}
                >
                  {item.price}
                </div>
              </div>
            ) : (
              /* Fallback — no image */
              <div
                className="relative h-28 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#054845,#0AAFA8)" }}
              >
                <span className="text-5xl">{item.category[0]}</span>
              </div>
            )}

            {/* Content */}
            <div className="p-7">
              {/* Name */}
              <h2
                className="text-white text-2xl font-bold leading-tight mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {item.name}
              </h2>

              {/* Gold divider */}
              <div
                className="h-px mb-4"
                style={{ background: "linear-gradient(90deg, #C8973B, transparent)" }}
              />

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-5">{item.desc}</p>

              {/* Callout */}
              {item.callout && (
                <div
                  className="flex items-start gap-2.5 rounded-xl px-4 py-3 mb-5"
                  style={{ background: "rgba(200,151,59,0.1)", border: "1px solid rgba(200,151,59,0.2)" }}
                >
                  <span className="text-gold text-sm mt-0.5 shrink-0">✦</span>
                  <p className="text-gold/90 text-sm italic leading-snug">{item.callout}</p>
                </div>
              )}

              {/* Ingredients */}
              {item.ingredients && item.ingredients.length > 0 && (
                <div className="mb-6">
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
                    Key Ingredients
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.ingredients.map(ing => (
                      <span
                        key={ing}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Reserve CTA */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm text-[#0D0D0D]"
                style={{ background: "linear-gradient(135deg,#C8973B,#E5B55A)" }}
              >
                Reserve &amp; Dine <ArrowRight size={15} />
              </motion.a>
            </div>

            {/* Close button */}
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-white"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
              aria-label="Close"
            >
              <X size={16} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
