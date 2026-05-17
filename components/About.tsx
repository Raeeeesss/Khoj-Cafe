import { Utensils, Users, Award, Clock } from "lucide-react";

const highlights = [
  {
    icon: <Utensils size={22} />,
    title: "Continental Classics",
    desc: "Pastas, steaks, burgers, and sandwiches crafted with care.",
  },
  {
    icon: <Award size={22} />,
    title: "Premium Ambience",
    desc: "Vintage interiors, warm lighting, and an aesthetic that begs to be photographed.",
  },
  {
    icon: <Users size={22} />,
    title: "Perfect for Every Occasion",
    desc: "Dates, group hangouts, content shoots, or a quiet solo coffee.",
  },
  {
    icon: <Clock size={22} />,
    title: "Open Every Day",
    desc: "Serving from noon until late — 12:00 PM to 11:30 PM.",
  },
];

const stats = [
  { value: "3,400+", label: "Happy Reviews" },
  { value: "4.2",    label: "Google Rating" },
  { value: "50+",    label: "Menu Items" },
  { value: "8+",     label: "Years of Love" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-20 reveal">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Our Story
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-brown mb-6 fancy-underline"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            More Than Just a Café
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Nestled opposite the Taj Gateway Hotel in Kozhikode, Sixth Avenue is the city&apos;s
            favourite corner for great food, great company, and an atmosphere that stays with you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text & stats */}
          <div className="reveal reveal-delay-1">
            <div
              className="relative rounded-3xl overflow-hidden mb-10"
              style={{
                background: "linear-gradient(135deg, #1C1008 0%, #3A2010 60%, #2D1B14 100%)",
                padding: "2px",
              }}
            >
              <div
                className="rounded-3xl p-8 md:p-10"
                style={{
                  background: "linear-gradient(135deg, #1C1008 0%, #2D1B14 100%)",
                }}
              >
                {/* Decorative quote */}
                <p
                  className="text-4xl text-gold/30 leading-none mb-4 select-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;
                </p>
                <p
                  className="text-white/90 text-lg sm:text-xl leading-relaxed italic mb-6"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  A cozy vintage café that blends the warmth of Kerala hospitality
                  with continental dining — the kind of place you find yourself returning to.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-gold/50" />
                  <p className="text-gold/70 text-sm">Our Promise to You</p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-2xl bg-parchment border border-gold/15"
                >
                  <p
                    className="text-2xl sm:text-3xl font-bold text-gold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {value}
                  </p>
                  <p className="text-muted text-xs font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Feature cards */}
          <div className="grid sm:grid-cols-2 gap-5 reveal reveal-delay-2">
            {highlights.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 rounded-2xl bg-white border border-gold/10 card-lift"
                style={{ boxShadow: "0 2px 12px rgba(44,24,16,0.06)" }}
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-espresso mb-4 group-hover:scale-110 transition-transform">
                  {icon}
                </div>
                <h3
                  className="font-bold text-dark-brown text-lg mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-20 ornament reveal reveal-delay-3">
          <span
            className="text-gold/60 text-sm italic px-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Baby Arcade · PT Usha Road · Kozhikode
          </span>
        </div>
      </div>
    </section>
  );
}
