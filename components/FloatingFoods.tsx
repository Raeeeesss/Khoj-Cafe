"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type Variants } from "framer-motion";

type FoodPhoto = {
  src:      string;
  alt:      string;
  x:        number;   /* % from left */
  y:        number;   /* % from top  */
  size:     number;   /* px diameter */
  delay:    number;
  duration: number;
  rotate:   number;
};

const foodPhotos: FoodPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Gourmet Burger", x: 6, y: 18, size: 90, delay: 0, duration: 5.5, rotate: -5,
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Artisan Coffee", x: 88, y: 20, size: 75, delay: 0.6, duration: 6.2, rotate: 8,
  },
  {
    src: "https://images.unsplash.com/photo-1621996346565-ead507bfda20?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Creamy Pasta", x: 12, y: 70, size: 80, delay: 1.2, duration: 5.0, rotate: -8,
  },
  {
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Chocolate Shake", x: 82, y: 65, size: 68, delay: 0.4, duration: 7.0, rotate: 10,
  },
  {
    src: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Mojito Cocktail", x: 4, y: 48, size: 72, delay: 1.8, duration: 4.8, rotate: -12,
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Chocolate Dessert", x: 78, y: 42, size: 65, delay: 0.9, duration: 6.5, rotate: 6,
  },
  {
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Loaded Fries", x: 55, y: 8, size: 62, delay: 2.0, duration: 5.8, rotate: -4,
  },
  {
    src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=160&h=160&q=80&fit=crop&auto=format",
    alt: "Club Sandwich", x: 40, y: 85, size: 70, delay: 1.5, duration: 6.8, rotate: 9,
  },
];

const floatVariants: Variants = {
  animate: (p: FoodPhoto) => ({
    y:       [0, -20, -8, -24, 0],
    x:       [0, 5, -3, 3, 0],
    rotate:  [p.rotate, p.rotate + 5, p.rotate - 3, p.rotate + 2, p.rotate],
    transition: {
      duration: p.duration,
      delay: p.delay,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

interface Props {
  count?: number;
  opacity?: number;
  className?: string;
}

export default function FloatingFoods({
  count = foodPhotos.length,
  opacity = 0.25,
  className = "",
}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      {foodPhotos.slice(0, count).map((photo) => (
        <motion.div
          key={photo.alt}
          custom={photo}
          variants={floatVariants}
          animate="animate"
          className="absolute"
          style={{
            left:   `${photo.x}%`,
            top:    `${photo.y}%`,
            width:  photo.size,
            height: photo.size,
          }}
        >
          <div
            className="w-full h-full rounded-full overflow-hidden"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.25)",
              border: "2px solid rgba(255,255,255,0.15)",
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.size}
              height={photo.size}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
