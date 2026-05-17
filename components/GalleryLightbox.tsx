"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type GalleryTile = {
  id:    number;
  img:   string;   /* full-size URL */
  thumb: string;   /* thumbnail URL */
  label: string;
  sub:   string;
  tag:   string;
};

interface Props {
  tiles:       GalleryTile[];
  activeIndex: number | null;
  onClose:     () => void;
  onPrev:      () => void;
  onNext:      () => void;
}

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x:       dir > 0 ? 80 : -80,
    opacity: 0,
    scale:   0.94,
  }),
  center: {
    x:       0,
    opacity: 1,
    scale:   1,
    transition: { type: "spring" as const, stiffness: 280, damping: 26 },
  },
  exit: (dir: number) => ({
    x:       dir > 0 ? -80 : 80,
    opacity: 0,
    scale:   0.94,
    transition: { duration: 0.22 },
  }),
};

export default function GalleryLightbox({ tiles, activeIndex, onClose, onPrev, onNext }: Props) {
  const tile = activeIndex !== null ? tiles[activeIndex] : null;

  useEffect(() => {
    document.body.style.overflow = tile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [tile]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   onPrev();
      if (e.key === "ArrowRight")  onNext();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {tile && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
            onClick={onClose}
          />

          {/* Prev */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-3 sm:left-8 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={22} />
          </motion.button>

          {/* Lightbox content */}
          <AnimatePresence mode="wait" custom={1}>
            <motion.div
              key={tile.id}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative z-10 flex flex-col items-center w-full max-w-4xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Image container */}
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  maxHeight: "75vh",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.7)",
                }}
              >
                <Image
                  src={tile.img}
                  alt={tile.label}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[75vh] object-cover rounded-2xl"
                  unoptimized
                  priority
                />

                {/* Counter overlay */}
                <div
                  className="absolute top-4 left-4 text-white text-xs font-medium px-3 py-1 rounded-full"
                  style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)" }}
                >
                  {(activeIndex ?? 0) + 1} / {tiles.length}
                </div>

                {/* Tag */}
                <div
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-[#0D0D0D]"
                  style={{ background: "#C8973B" }}
                >
                  {tile.tag}
                </div>
              </div>

              {/* Caption */}
              <div className="mt-5 text-center">
                <h3
                  className="text-white text-xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {tile.label}
                </h3>
                <p className="text-white/50 text-sm">{tile.sub}</p>
                <p className="text-white/25 text-xs mt-3">← → keys or arrows to navigate · Esc to close</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-3 sm:right-8 z-20 w-11 h-11 rounded-full flex items-center justify-center text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            aria-label="Next photo"
          >
            <ChevronRight size={22} />
          </motion.button>

          {/* Close */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            aria-label="Close"
          >
            <X size={18} />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
