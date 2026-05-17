"use client";

import { useState } from "react";
import { Flame, Star } from "lucide-react";

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  popular?: boolean;
  spicy?: boolean;
  emoji: string;
};

type Category = {
  id: string;
  label: string;
  emoji: string;
  bg: string;
  accent: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    id: "starters",
    label: "Starters",
    emoji: "🍗",
    bg: "from-amber-950 to-amber-900",
    accent: "#D97706",
    items: [
      { name: "BBQ Wings", price: "₹280", desc: "Smoky, sticky buffalo wings with house BBQ sauce & blue cheese dip.", popular: true, emoji: "🍗" },
      { name: "Chicken Tenders", price: "₹260", desc: "Crispy golden strips served with honey mustard & ranch.", emoji: "🍘" },
      { name: "Dynamite Shrimps", price: "₹320", desc: "Crispy shrimps tossed in spicy Sriracha mayo. Addictive.", spicy: true, popular: true, emoji: "🍤" },
      { name: "Loaded Fries", price: "₹180", desc: "Thick-cut fries loaded with cheddar, jalapeños & sour cream.", emoji: "🍟" },
    ],
  },
  {
    id: "burgers",
    label: "Burgers & Wraps",
    emoji: "🍔",
    bg: "from-red-950 to-red-900",
    accent: "#DC2626",
    items: [
      { name: "Legendary Crunchy Burger", price: "₹320", desc: "Double-crispy chicken, lettuce, tomato, pickles, secret sauce.", popular: true, emoji: "🍔" },
      { name: "Chicken Club Sandwich", price: "₹280", desc: "Grilled chicken, streaky bacon, lettuce, tomato on toasted brioche.", popular: true, emoji: "🥪" },
      { name: "BBQ Chicken Sandwich", price: "₹290", desc: "Smoky pulled chicken, coleslaw, crispy onions, BBQ glaze.", emoji: "🍖" },
      { name: "Crispy Chicken Wrap", price: "₹250", desc: "Fried chicken, avocado, jalapeños, chipotle aioli in a warm tortilla.", spicy: true, emoji: "🌯" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    emoji: "🍝",
    bg: "from-orange-950 to-orange-900",
    accent: "#EA580C",
    items: [
      { name: "Alfredo Chicken Pasta", price: "₹310", desc: "Creamy parmesan sauce, grilled chicken, fresh herbs.", popular: true, emoji: "🍝" },
      { name: "Beef Bolognaise", price: "₹330", desc: "Slow-cooked minced beef ragù in rich tomato sauce.", emoji: "🥩" },
      { name: "Basil Pesto Pasta", price: "₹290", desc: "Fresh basil pesto, toasted pine nuts, sun-dried tomatoes.", emoji: "🌿" },
      { name: "Arrabiata Pasta", price: "₹270", desc: "Spicy tomato & garlic sauce with a fiery kick.", spicy: true, emoji: "🌶️" },
    ],
  },
  {
    id: "mains",
    label: "Main Course",
    emoji: "🍽️",
    bg: "from-stone-950 to-stone-900",
    accent: "#78716C",
    items: [
      { name: "Jamaican Jerk Chicken", price: "₹380", desc: "Marinated chicken with Jamaican spices, plantains & coleslaw.", spicy: true, popular: true, emoji: "🍖" },
      { name: "Lemon Butter Garlic Steak", price: "₹360", desc: "Chicken steak in velvety lemon-butter-garlic pan sauce.", popular: true, emoji: "🥩" },
      { name: "Fish & Chips", price: "₹340", desc: "Beer-battered fish fillet, golden fries, tartar sauce & mushy peas.", emoji: "🐟" },
      { name: "Chimichurri Chicken", price: "₹370", desc: "Grilled chicken draped in herby Argentine chimichurri.", emoji: "🌿" },
    ],
  },
  {
    id: "drinks",
    label: "Drinks & Desserts",
    emoji: "🥤",
    bg: "from-emerald-950 to-emerald-900",
    accent: "#059669",
    items: [
      { name: "Green Apple Mojito", price: "₹160", desc: "Crisp apple, fresh mint, lime & sparkling soda. Refreshing.", popular: true, emoji: "🍏" },
      { name: "Iced Coffee", price: "₹140", desc: "Cold-brew over ice with a touch of cream.", emoji: "☕" },
      { name: "Triple Chocolate Shake", price: "₹200", desc: "Dark, milk & white chocolate blended into indulgence.", popular: true, emoji: "🍫" },
      { name: "Peach Iced Tea", price: "₹150", desc: "Lightly sweetened peach tea served chilled.", emoji: "🍑" },
      { name: "Strawberry Soda", price: "₹130", desc: "House strawberry syrup & fresh lemon in fizzy soda.", emoji: "🍓" },
    ],
  },
];

function MenuCard({ item, accent }: { item: MenuItem; accent: string }) {
  return (
    <div
      className="group relative bg-white rounded-2xl p-5 border border-[#F0E5CC] card-lift"
      style={{ boxShadow: "0 2px 10px rgba(44,24,16,0.06)" }}
    >
      {/* Popular badge */}
      {item.popular && (
        <span
          className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full text-white"
          style={{ background: accent }}
        >
          <Star size={9} className="fill-white" />
          Most Loved
        </span>
      )}

      {/* Emoji icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-[#FAF7F2]"
      >
        {item.emoji}
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h4
          className="font-bold text-dark-brown text-base leading-snug"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {item.name}
          {item.spicy && (
            <Flame size={13} className="inline ml-1.5 text-red-500 relative -top-0.5" />
          )}
        </h4>
        <span className="font-bold text-gold text-sm shrink-0">{item.price}</span>
      </div>

      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
    </div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0].id);
  const current = categories.find(c => c.id === activeTab)!;

  return (
    <section
      id="menu"
      className="py-24 lg:py-32"
      style={{ background: "#F5F0E8" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            What We Serve
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-brown mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Menu
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            Every dish is crafted with quality ingredients and an eye for flavour.
            Average spend: <span className="font-semibold text-dark-brown">₹200–₹400</span> per person.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 reveal reveal-delay-1">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`tab-btn flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium ${
                activeTab === cat.id ? "active" : "text-dark-brown bg-white"
              }`}
              aria-pressed={activeTab === cat.id}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal reveal-delay-2">
          {current.items.map(item => (
            <MenuCard key={item.name} item={item} accent={current.accent} />
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-muted text-xs mt-10 reveal reveal-delay-3">
          * All prices are approximate and inclusive of taxes. Menu subject to change seasonally.
        </p>
      </div>
    </section>
  );
}
