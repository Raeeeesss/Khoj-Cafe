import Link from "next/link";
import { Star, ChevronDown, Clock, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #1C1008 0%, #2D1B14 30%, #3A2010 55%, #1C1008 100%)",
      }}
    >
      {/* Decorative SVG noise / grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.12'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(200,151,59,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-24 left-10 w-64 h-64 rounded-full border border-gold/10 pointer-events-none" />
      <div className="absolute top-32 left-16 w-48 h-48 rounded-full border border-gold/8 pointer-events-none" />
      <div className="absolute bottom-32 right-10 w-80 h-80 rounded-full border border-gold/8 pointer-events-none" />
      <div className="absolute bottom-40 right-20 w-56 h-56 rounded-full border border-gold/5 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-gold/90 border border-gold/25 bg-gold/8 mb-8"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
          Open Today · 12:00 PM – 11:30 PM
        </div>

        {/* Eyebrow */}
        <p
          className="text-gold text-sm font-medium tracking-[0.25em] uppercase mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Kozhikode&apos;s Premium Café
        </p>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 hero-text-shadow"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Where Every
          <span className="block text-gold-gradient italic">Sip &amp; Bite</span>
          Tells a Story
        </h1>

        {/* Subheadline */}
        <p className="text-white/65 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          A vintage haven tucked away on PT Usha Road — serving continental classics,
          handcrafted mojitos, and artisan coffee in a warm, candlelit ambience.
        </p>

        {/* Rating row */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map(i => (
              <Star key={i} size={16} className="text-gold fill-gold" />
            ))}
            <Star size={16} className="text-gold fill-gold/40" />
          </div>
          <span className="text-white/80 text-sm font-medium">4.2 on Google</span>
          <span className="text-white/30">·</span>
          <span className="text-white/60 text-sm">3,400+ reviews</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-[#1C1008] shimmer-btn transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-gold/20"
          >
            Explore Our Menu
          </Link>
          <Link
            href="#reserve"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white border border-white/25 bg-white/8 hover:bg-white/15 hover:border-white/40 transition-all"
            style={{ backdropFilter: "blur(8px)" }}
          >
            Reserve a Table
          </Link>
        </div>

        {/* Info pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { icon: <Clock size={14} />, text: "12 PM – 11:30 PM Daily" },
            { icon: <MapPin size={14} />, text: "PT Usha Road, Kozhikode" },
            { icon: <Star size={14} className="fill-gold text-gold" />, text: "₹200–₹400 per person" },
          ].map(({ icon, text }) => (
            <span
              key={text}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/60 bg-white/8 border border-white/10"
            >
              <span className="text-gold/80">{icon}</span>
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}
