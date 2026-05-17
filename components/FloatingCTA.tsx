"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href="#reserve"
        className="float-btn flex items-center gap-2.5 px-5 py-3.5 rounded-full font-semibold text-espresso text-sm shimmer-btn"
        aria-label="Reserve a table"
      >
        <span className="text-base">🍽️</span>
        <span className="hidden sm:inline">Reserve a Table</span>
        <span className="sm:hidden">Reserve</span>
      </Link>
    </div>
  );
}
