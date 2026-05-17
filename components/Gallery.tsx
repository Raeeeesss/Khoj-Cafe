import Link from "next/link";

const tiles = [
  {
    label: "The Atmosphere",
    sub: "Vintage interiors, warm light",
    bg: "linear-gradient(135deg, #1C1008 0%, #3A2010 100%)",
    size: "large",
    emoji: "🏮",
  },
  {
    label: "Legendary Burger",
    sub: "Double-crispy perfection",
    bg: "linear-gradient(135deg, #7C2D12 0%, #C2410C 100%)",
    size: "small",
    emoji: "🍔",
  },
  {
    label: "Artisan Coffee",
    sub: "Every cup, a ritual",
    bg: "linear-gradient(135deg, #451A03 0%, #78350F 100%)",
    size: "small",
    emoji: "☕",
  },
  {
    label: "Green Apple Mojito",
    sub: "House-made & refreshing",
    bg: "linear-gradient(135deg, #14532D 0%, #166534 100%)",
    size: "medium",
    emoji: "🍏",
  },
  {
    label: "Pasta Night",
    sub: "Alfredo · Arrabiata · Pesto",
    bg: "linear-gradient(135deg, #78350F 0%, #92400E 100%)",
    size: "medium",
    emoji: "🍝",
  },
  {
    label: "Triple Choc Shake",
    sub: "Three-layer indulgence",
    bg: "linear-gradient(135deg, #1C1008 0%, #3D2B1F 100%)",
    size: "small",
    emoji: "🍫",
  },
  {
    label: "The Patio Vibes",
    sub: "Your aesthetic moment",
    bg: "linear-gradient(135deg, #44403C 0%, #292524 100%)",
    size: "small",
    emoji: "📸",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            #SixthAvenueCafe
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-brown mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Feed Your Eyes
          </h2>
          <p className="text-muted max-w-lg mx-auto text-base">
            Instagram-worthy moments around every corner.
            Tag us and we&apos;ll feature your shot.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-4 reveal reveal-delay-1">

          {/* Large tile — spans 2 cols 2 rows */}
          <div
            className="gallery-tile relative col-span-2 row-span-2 rounded-3xl cursor-pointer group"
            style={{ background: tiles[0].bg }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-6xl mb-3">{tiles[0].emoji}</span>
              <p className="text-white font-bold text-xl" style={{ fontFamily: "var(--font-playfair)" }}>{tiles[0].label}</p>
              <p className="text-white/60 text-sm mt-1">{tiles[0].sub}</p>
            </div>
            <div className="gallery-overlay absolute inset-0 rounded-3xl bg-gold/15 flex items-end p-5">
              <span className="text-white/90 text-xs font-medium bg-black/30 px-3 py-1 rounded-full">
                View on Instagram
              </span>
            </div>
          </div>

          {/* Small tiles */}
          {tiles.slice(1).map((tile) => (
            <div
              key={tile.label}
              className={`gallery-tile relative rounded-2xl cursor-pointer group overflow-hidden ${
                tile.size === "medium" ? "row-span-2" : "row-span-1"
              }`}
              style={{ background: tile.bg }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <span className="text-3xl mb-2">{tile.emoji}</span>
                <p className="text-white font-semibold text-sm leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>{tile.label}</p>
                <p className="text-white/50 text-xs mt-1 hidden md:block">{tile.sub}</p>
              </div>
              <div className="gallery-overlay absolute inset-0 rounded-2xl bg-gold/20" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10 reveal reveal-delay-2">
          <Link
            href="https://www.instagram.com/sixthavenue.cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @sixthavenue.cafe
          </Link>
        </div>
      </div>
    </section>
  );
}
