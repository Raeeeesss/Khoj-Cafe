"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Flame, Star, Search, ArrowRight } from "lucide-react";
import FloatingFoods from "@/components/FloatingFoods";
import MenuItemModal, { MenuItemData } from "@/components/MenuItemModal";

/* ─── Variants ──────────────────────────────────────── */
const cardV: Variants = {
  hidden:  { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.05, duration: 0.45, ease: "easeOut" as const },
  }),
};

/* ─── Image map ─────────────────────────────────────── */
const I = {
  fries:     "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&q=80&fit=crop&auto=format",
  perifries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&q=80&fit=crop&auto=format",
  burger:    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&q=80&fit=crop&auto=format",
  sandwich:  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&q=80&fit=crop&auto=format",
  wings:     "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&h=400&q=80&fit=crop&auto=format",
  momos:     "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=400&q=80&fit=crop&auto=format",
  pizza:     "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=400&q=80&fit=crop&auto=format",
  pasta:     "https://images.unsplash.com/photo-1621996346565-ead507bfda20?w=600&h=400&q=80&fit=crop&auto=format",
  salad:     "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&q=80&fit=crop&auto=format",
  shawarma:  "https://images.unsplash.com/photo-1530469912745-a215c6b256ea?w=600&h=400&q=80&fit=crop&auto=format",
  popcorn:   "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&h=400&q=80&fit=crop&auto=format",
  onion:     "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&h=400&q=80&fit=crop&auto=format",
  sausage:   "https://images.unsplash.com/photo-1558030006-450675393462?w=600&h=400&q=80&fit=crop&auto=format",
  loaded:    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&h=400&q=80&fit=crop&auto=format",
};

/* ─── Full Khoj Menu — exact from menu image ────────── */
type Cat = { id: string; label: string; accent: string; bg: string; items: MenuItemData[] };

const categories: Cat[] = [
  {
    id: "starters", label: "Starters", accent: "#8B4020", bg: "linear-gradient(135deg,#5C2A10,#8B4020)",
    items: [
      { name: "French Fries Regular",       price: "₹90",  category: "Starters", img: I.fries,     desc: "Golden crispy regular-cut french fries, lightly salted and served hot." },
      { name: "French Fries Large",          price: "₹140", category: "Starters", img: I.fries,     desc: "A generous large portion of our crispy golden french fries." },
      { name: "Cheese French Fries",         price: "₹180", category: "Starters", img: I.fries,     desc: "Crispy fries smothered in melted cheese sauce. Indulgent and satisfying.", popular: true },
      { name: "Peri Peri Fries Regular",     price: "₹100", category: "Starters", img: I.perifries, desc: "Regular-cut fries dusted with our fiery peri peri seasoning.", spicy: true },
      { name: "Peri Peri Fries Large",       price: "₹170", category: "Starters", img: I.perifries, desc: "Large portion of peri peri seasoned fries — bold and spicy.", spicy: true },
      { name: "Chicken Popcorn",             price: "₹100", category: "Starters", img: I.popcorn,   desc: "Bite-sized crispy chicken pieces seasoned and fried to perfection.", popular: true },
      { name: "Nuggets",                     price: "₹120", category: "Starters", img: I.popcorn,   desc: "Classic golden chicken nuggets — crispy outside, juicy inside." },
      { name: "Smashed Chicken Sausage",     price: "₹160", category: "Starters", img: I.sausage,   desc: "Smashed chicken sausage patty seasoned with herbs and spices." },
      { name: "Crab Lolipop",                price: "₹200", category: "Starters", img: I.wings,     desc: "Crispy crab lolipop bites with tangy dipping sauce.", popular: true },
      { name: "Onion Rings",                 price: "₹150", category: "Starters", img: I.onion,     desc: "Beer-battered onion rings — golden, crispy and perfectly seasoned." },
      { name: "Lobster Bites",               price: "₹200", category: "Starters", img: I.wings,     desc: "Tender lobster bites lightly breaded and fried, served with aioli.", popular: true },
    ],
  },
  {
    id: "loaded", label: "Loaded Fries", accent: "#C4892C", bg: "linear-gradient(135deg,#7A5010,#C4892C)",
    items: [
      { name: "Chicken Loaded Fries",  price: "₹230", category: "Loaded Fries", img: I.loaded, popular: true,
        desc: "Crispy fries loaded with seasoned chicken strips, melted cheese and house sauces.",
        ingredients: ["Fries", "Chicken", "Cheese", "House Sauce"],
        callout: "Our most-ordered starter." },
      { name: "Peri Peri Loaded Fries", price: "₹270", category: "Loaded Fries", img: I.loaded, popular: true, spicy: true,
        desc: "Loaded fries with peri peri marinated chicken, jalapeños and fiery sauce.",
        ingredients: ["Fries", "Peri Peri Chicken", "Jalapeño", "Spicy Sauce"],
        callout: "Fan favourite for spice lovers." },
      { name: "Khoj Crinkles",          price: "₹320", category: "Loaded Fries", img: I.loaded, popular: true,
        desc: "Our signature crinkle-cut loaded fries with the secret Khoj sauce, double cheese and premium toppings.",
        ingredients: ["Crinkle Fries", "Khoj Secret Sauce", "Double Cheese", "Premium Toppings"],
        callout: "The Khoj signature — cannot be missed." },
    ],
  },
  {
    id: "sandwich", label: "Club Sandwich", accent: "#A07840", bg: "linear-gradient(135deg,#5A3A10,#A07840)",
    items: [
      { name: "Veg Club Sandwich",     price: "₹100", category: "Club Sandwich", img: I.sandwich, desc: "Classic club sandwich loaded with fresh vegetables, lettuce and condiments." },
      { name: "Chicken Club Sandwich", price: "₹160", category: "Club Sandwich", img: I.sandwich, popular: true, desc: "Grilled chicken breast, crisp lettuce, tomato and mayo in toasted bread.", ingredients: ["Chicken", "Lettuce", "Tomato", "Mayo"] },
      { name: "Nuggets Club Sandwich", price: "₹170", category: "Club Sandwich", img: I.sandwich, desc: "Crispy nuggets stacked in a toasted club sandwich with fresh veggies." },
      { name: "Zinger Club Sandwich",  price: "₹180", category: "Club Sandwich", img: I.sandwich, popular: true, spicy: true, desc: "Spicy zinger chicken with coleslaw and tangy sauce in toasted bread.", callout: "Khoj's spiciest sandwich." },
    ],
  },
  {
    id: "burger", label: "Burger", accent: "#C25030", bg: "linear-gradient(135deg,#6A1A08,#C25030)",
    items: [
      { name: "Veg Burger",                 price: "₹100", category: "Burger", img: I.burger,  desc: "A satisfying veggie patty burger with fresh lettuce, tomato and sauces." },
      { name: "Beef Burger",                price: "₹150", category: "Burger", img: I.burger,  desc: "Juicy beef patty with fresh veggies and our house burger sauce." },
      { name: "Chicken Burger",             price: "₹140", category: "Burger", img: I.burger,  desc: "Tender grilled chicken patty with lettuce, tomato and mayo." },
      { name: "Zinger Burger",              price: "₹170", category: "Burger", img: I.burger,  spicy: true, desc: "Crispy spicy zinger chicken fillet with coleslaw and hot sauce.", popular: true },
      { name: "Double Burger",              price: "₹170", category: "Burger", img: I.burger,  desc: "Double stacked patties with double the toppings and sauce.", popular: true },
      { name: "Peri Peri Chicken Burger",   price: "₹180", category: "Burger", img: I.burger,  spicy: true, desc: "Peri peri marinated crispy chicken with jalapeños and spicy mayo.", popular: true, callout: "Bold, spicy, addictive." },
      { name: "Khoj Special Zinger Burger", price: "₹200", category: "Burger", img: I.burger,  spicy: true, popular: true,
        desc: "Khoj's signature zinger — double crispy chicken, secret sauce, and extra toppings.",
        ingredients: ["Double Chicken", "Khoj Secret Sauce", "Pickles", "Coleslaw"],
        callout: "The Khoj burger experience." },
      { name: "Jack The Ripper",            price: "₹230", category: "Burger", img: I.burger,  popular: true,
        desc: "Our biggest, boldest burger — monster patty, premium toppings, signature sauce.",
        ingredients: ["Monster Beef Patty", "Premium Toppings", "Signature Sauce", "Brioche Bun"],
        callout: "Not for the faint-hearted." },
    ],
  },
  {
    id: "momos", label: "Momos", accent: "#6A8A60", bg: "linear-gradient(135deg,#2A4A20,#5A7A50)",
    items: [
      { name: "Steamed Momos", price: "₹190", category: "Momos", img: I.momos, popular: true, desc: "Soft steamed dumplings filled with seasoned vegetables or chicken, served with chutney.", ingredients: ["Dumpling Dough", "Filling", "Chutney"], callout: "Freshly made in-house." },
      { name: "Fried Momos",   price: "₹170", category: "Momos", img: I.momos,               desc: "Pan-fried dumplings with a crispy bottom, served with spicy dipping sauce." },
      { name: "Ghost Momos",   price: "₹230", category: "Momos", img: I.momos, spicy: true, popular: true,  desc: "Fiery ghost-pepper coated momos — extremely spicy, served with cooling raita.", callout: "India's spiciest momo. Handle with care." },
    ],
  },
  {
    id: "pizza", label: "Pizza", accent: "#C25030", bg: "linear-gradient(135deg,#6A1A08,#C84020)",
    items: [
      { name: "Pizza Paradize", price: "₹400", category: "Pizza", img: I.pizza, popular: true, desc: "Our signature pizza with a paradise of toppings — loaded with flavour in every bite.", callout: "Khoj's most indulgent pizza." },
      { name: "BBQ Pizza",      price: "₹390", category: "Pizza", img: I.pizza,               desc: "Smoky BBQ base with chicken, peppers and mozzarella on a crispy crust." },
    ],
  },
  {
    id: "pasta", label: "Pasta", accent: "#A07840", bg: "linear-gradient(135deg,#5A3A10,#A07840)",
    items: [
      { name: "Alfredo Italian Pasta", price: "₹250", category: "Pasta", img: I.pasta, popular: true,
        desc: "Creamy parmesan Alfredo sauce with fettuccine and your choice of chicken or vegetarian.",
        ingredients: ["Fettuccine", "Parmesan Cream", "Chicken", "Fresh Herbs"],
        callout: "Made with authentic Italian pasta." },
      { name: "Arabiatha",             price: "₹240", category: "Pasta", img: I.pasta, spicy: true,
        desc: "Spicy Arrabbiata tomato and garlic sauce with fresh herbs on penne.",
        ingredients: ["Penne", "San Marzano Tomato", "Garlic", "Chilli"] },
      { name: "Mac Bliss",             price: "₹300", category: "Pasta", img: I.pasta, popular: true,
        desc: "Khoj's take on mac & cheese — rich, creamy and absolutely blissful.",
        ingredients: ["Macaroni", "Cheese Sauce", "Breadcrumb Crust"],
        callout: "A comfort food crowd pleaser." },
    ],
  },
  {
    id: "salad", label: "Salad", accent: "#5A8A40", bg: "linear-gradient(135deg,#2A4A18,#5A8A40)",
    items: [
      { name: "Eve Salad",            price: "₹180", category: "Salad", img: I.salad,  desc: "Fresh seasonal greens with cherry tomatoes, cucumber and house vinaigrette.", popular: true },
      { name: "Chicken Curry Leaves", price: "₹160", category: "Salad", img: I.salad,  desc: "Grilled chicken with aromatic curry leaves, lemon and fresh greens — a Kerala twist.", popular: true },
      { name: "Coleslaw",             price: "₹120", category: "Salad", img: I.salad,  desc: "Creamy homemade coleslaw with shredded cabbage, carrot and tangy dressing." },
      { name: "Green Salad",          price: "₹100", category: "Salad", img: I.salad,  desc: "Simple, fresh and healthy garden salad with seasonal vegetables and dressing." },
    ],
  },
  {
    id: "shawarma", label: "Shawarma", accent: "#8B6020", bg: "linear-gradient(135deg,#4A2A08,#8B6020)",
    items: [
      { name: "Normal Shawarma",            price: "₹100", category: "Shawarma", img: I.shawarma, desc: "Classic shawarma with seasoned meat, pickled vegetables and garlic sauce in kuboos." },
      { name: "Normal Shawarma Cheese",     price: "₹120", category: "Shawarma", img: I.shawarma, desc: "Shawarma with added melted cheese for extra indulgence." },
      { name: "Full Meat Shawarma",         price: "₹120", category: "Shawarma", img: I.shawarma, popular: true, desc: "Loaded with extra meat and all the classic shawarma toppings.", callout: "Best value shawarma on the menu." },
      { name: "Full Meat with Cheese",      price: "₹140", category: "Shawarma", img: I.shawarma, popular: true, desc: "Full meat shawarma with added melted cheese — loaded and satisfying." },
      { name: "Khoj Spicy Shawarma",        price: "₹110", category: "Shawarma", img: I.shawarma, popular: true, spicy: true, desc: "Khoj's signature spicy shawarma with our special spice blend.", callout: "A Khoj classic." },
      { name: "Khoj Spicy With Cheese",     price: "₹130", category: "Shawarma", img: I.shawarma, spicy: true,  desc: "Khoj spicy shawarma upgraded with melted cheese." },
      { name: "Full Meat Spicy",            price: "₹130", category: "Shawarma", img: I.shawarma, spicy: true,  desc: "Full meat portion with our spicy shawarma seasoning." },
      { name: "Full Meat Spicy with Cheese",price: "₹150", category: "Shawarma", img: I.shawarma, spicy: true,  desc: "The full package — extra meat, spicy, with cheese." },
      { name: "Kuboos Roll Shawarma",       price: "₹80",  category: "Shawarma", img: I.shawarma, desc: "Traditional shawarma rolled in soft kuboos bread — quick and delicious." },
      { name: "Kuboos Plate Shawarma",      price: "₹100", category: "Shawarma", img: I.shawarma, desc: "Shawarma served plate-style on kuboos with sides." },
      { name: "Rumali Plate Shawarma",      price: "₹150", category: "Shawarma", img: I.shawarma, popular: true, desc: "Shawarma on thin, delicate rumali bread — a premium experience.", callout: "Khoj's most premium shawarma." },
      { name: "Rumali Plate with Cheese",   price: "₹170", category: "Shawarma", img: I.shawarma, popular: true, desc: "Rumali plate shawarma with added melted cheese on top." },
    ],
  },
];

const GOLD = "#C4892C";

export default function MenuPage() {
  const [activeTab,    setActiveTab]    = useState(categories[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItemData | null>(null);
  const [search,       setSearch]       = useState("");

  const current = categories.find(c => c.id === activeTab)!;

  const filteredItems = search.trim()
    ? categories.flatMap(c => c.items).filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.desc.toLowerCase().includes(search.toLowerCase())
      )
    : current.items;

  return (
    <>
      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />

      {/* ── Hero ───────────────────────────────── */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden" style={{ background: "#1E1A10" }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=85&fit=crop&auto=format"
            alt="Khoj menu spread"
            fill className="object-cover opacity-25" unoptimized
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(26,18,0,0.65),rgba(26,18,0,0.92))" }} />
        </div>

        <FloatingFoods count={6} opacity={0.22} />


        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>
            Brewing Happiness
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-white mb-5"
            style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(3rem,10vw,6rem)" }}
          >
            Our Menu
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="h-px max-w-40 mx-auto mb-6"
            style={{ background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }}
          />
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="text-white/58 text-base max-w-md mx-auto mb-2">
            9 categories · 60+ items · Made fresh daily
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="text-sm font-medium mb-8" style={{ color: GOLD }}>
            Tap any dish for full details
          </motion.p>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className="relative max-w-sm mx-auto">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="search" value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search menu items…"
              className="w-full pl-10 pr-10 py-3 rounded-full text-sm text-white placeholder-white/35 focus:outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(212,168,67,0.25)", backdropFilter: "blur(12px)" }}
              onFocus={e => { e.currentTarget.style.borderColor = "rgba(212,168,67,0.65)"; }}
              onBlur={e => { e.currentTarget.style.borderColor = "rgba(212,168,67,0.25)"; }}
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-sm">✕</button>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Menu body ──────────────────────────── */}
      <section className="py-14 min-h-screen" style={{ background: "#FAF5EA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category tabs */}
          {!search && (
            <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
              {categories.map(cat => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                  className="relative px-4 py-2.5 rounded-full text-sm font-semibold transition-all border"
                  style={
                    activeTab === cat.id
                      ? { background: cat.accent, color: "#fff", borderColor: cat.accent, boxShadow: `0 4px 16px ${cat.accent}55` }
                      : { background: "#fff", color: "#7A6A4A", borderColor: "rgba(212,168,67,0.25)" }
                  }
                >
                  {activeTab === cat.id && (
                    <motion.span layoutId="tab-bg" className="absolute inset-0 rounded-full" style={{ background: cat.accent }} />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </motion.button>
              ))}
            </div>
          )}

          {/* Search results label */}
          {search && (
            <div className="text-center mb-8">
              <p className="text-sm" style={{ color: "#7A6A4A" }}>
                Results for &quot;<strong style={{ color: GOLD }}>{search}</strong>&quot;
                {filteredItems.length === 0 && " — nothing found"}
              </p>
            </div>
          )}

          {/* Category header */}
          {!search && (
            <motion.div key={activeTab} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
              <div className="h-px max-w-xs mx-auto" style={{ background: `linear-gradient(90deg,transparent,${current.accent},transparent)` }} />
            </motion.div>
          )}

          {/* Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={search || activeTab}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i} variants={cardV} initial="hidden" animate="visible"
                  whileHover={{ y: -8, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  onClick={() => setSelectedItem(item)}
                  className="group rounded-2xl overflow-hidden cursor-pointer"
                  style={{ background: "#fff", boxShadow: "0 2px 16px rgba(26,18,0,0.10)" }}
                >
                  {/* Photo */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={item.img!} alt={item.name} fill
                      className="object-cover transition-transform duration-600 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent" />

                    {item.popular && (
                      <span className="absolute top-3 left-3 flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full text-black" style={{ background: GOLD }}>
                        <Star size={9} className="fill-current" /> Popular
                      </span>
                    )}
                    {item.spicy && (
                      <span className="absolute top-3 right-3">
                        <Flame size={15} className="text-red-400 drop-shadow" />
                      </span>
                    )}

                    <span
                      className="absolute bottom-3 right-3 text-sm font-bold px-2.5 py-0.5 rounded-full text-white"
                      style={{ background: "rgba(26,18,0,0.6)", backdropFilter: "blur(6px)", border: "1px solid rgba(212,168,67,0.4)" }}
                    >
                      {item.price}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3
                      className="font-bold text-sm leading-snug mb-2 transition-colors group-hover:text-[#C4892C]"
                      style={{ fontFamily: "var(--font-playfair)", color: "#1E1A10" }}
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: "#7A6A4A" }}>{item.desc}</p>
                    <span className="text-xs font-medium" style={{ color: "rgba(212,168,67,0.7)" }}>
                      Tap for details →
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && search && (
            <div className="text-center py-20">
              <p className="text-lg" style={{ color: "#7A6A4A" }}>No items found for &quot;{search}&quot;</p>
            </div>
          )}

          {/* Reserve CTA */}
          <div className="text-center mt-16 pt-10 border-t" style={{ borderColor: "rgba(212,168,67,0.15)" }}>
            <p className="text-sm mb-4" style={{ color: "#7A6A4A" }}>
              Average spend <span className="font-semibold" style={{ color: GOLD }}>₹200–₹400</span> per person · All prices inclusive of taxes
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-black gold-shimmer shadow-lg"
            >
              Reserve a Table <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
