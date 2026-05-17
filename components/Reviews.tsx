import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aishwarya R.",
    date: "March 2025",
    rating: 5,
    text: "Absolute gem of a café! The Legendary Burger is literally the best burger I've had in Kozhikode. The ambience is gorgeous — perfect for date nights. We'll definitely be back!",
    tag: "Date Night",
    initial: "A",
    bg: "#C8973B",
  },
  {
    name: "Siddharth M.",
    date: "January 2025",
    rating: 5,
    text: "The Green Apple Mojito alone is worth the visit. Really loved the cozy vintage interiors — everything felt curated. Food presentation is next level for a café in Calicut.",
    tag: "Great Drinks",
    initial: "S",
    bg: "#7A9B76",
  },
  {
    name: "Fatima K.",
    date: "April 2025",
    rating: 4,
    text: "Sixth Avenue never disappoints. The Alfredo Chicken Pasta was creamy and perfectly seasoned. Slightly long wait times on weekends, but the food is absolutely worth it.",
    tag: "Pasta Lover",
    initial: "F",
    bg: "#8B5A3C",
  },
  {
    name: "Rohan V.",
    date: "February 2025",
    rating: 5,
    text: "Came here for a friends' outing and all of us were blown away. Great variety on the menu, fantastic service, and the atmosphere screams Instagram perfection. Highly recommend!",
    tag: "Group Hangout",
    initial: "R",
    bg: "#C8973B",
  },
  {
    name: "Meera P.",
    date: "May 2025",
    rating: 5,
    text: "The Triple Chocolate Shake is absolutely sinful — in the best possible way! Nice staff, prompt service, and the décor is so cozy. One of Kozhikode's must-visit cafés.",
    tag: "Dessert Heaven",
    initial: "M",
    bg: "#2D1B14",
  },
  {
    name: "Arjun T.",
    date: "March 2025",
    rating: 4,
    text: "I work near PT Usha Road and this has become my go-to for lunch. The Chicken Club Sandwich is consistently great. Reasonable pricing for the quality you get.",
    tag: "Lunch Regular",
    initial: "A",
    bg: "#7A9B76",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={14}
          className={i <= count ? "text-gold fill-gold" : "text-gold/25 fill-gold/10"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, #1C1008 0%, #2D1B14 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What People Say
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Guest Reviews
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map(i => <Star key={i} size={20} className="text-gold fill-gold" />)}
              <Star size={20} className="text-gold fill-gold/40" />
            </div>
            <span className="text-white/80 font-semibold text-lg">4.2</span>
            <span className="text-white/40 text-sm">· 3,400+ Google reviews</span>
          </div>
        </div>

        {/* Review grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`relative p-6 rounded-2xl border border-white/8 reveal reveal-delay-${(i % 3) + 1}`}
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="absolute top-5 right-5 text-white/8"
              />

              {/* Rating */}
              <StarRow count={r.rating} />

              {/* Text */}
              <p className="text-white/75 text-sm leading-relaxed mt-4 mb-5">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ background: r.bg }}
                >
                  {r.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{r.name}</p>
                  <p className="text-white/40 text-xs">{r.date}</p>
                </div>
                <span
                  className="ml-auto text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10 text-white/50"
                >
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal reveal-delay-4">
          <a
            href="https://g.page/r/sixth-avenue-cafe-kozhikode"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/30 text-gold text-sm font-medium hover:bg-gold hover:text-espresso transition-all duration-200"
          >
            <Star size={15} className="fill-gold" />
            Leave a Review on Google
          </a>
        </div>
      </div>
    </section>
  );
}
