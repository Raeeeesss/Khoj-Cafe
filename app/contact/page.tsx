"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Phone, Clock, CheckCircle, Loader2, Wifi, Users, Accessibility, Car } from "lucide-react";
import FloatingFoods from "@/components/FloatingFoods";

const GOLD = "#C4892C";

const timeSlots = [
  "11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
  "3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM","6:00 PM","6:30 PM",
  "7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM","11:00 PM",
];

const today = new Date().toISOString().split("T")[0];

type FormState = { name: string; phone: string; email: string; date: string; time: string; guests: string; note: string; };

const features = [
  { icon: <Wifi size={16} />,          label: "Free Wi-Fi"        },
  { icon: <Users size={16} />,         label: "Group Parties"     },
  { icon: <Accessibility size={16} />, label: "Wheelchair Access" },
  { icon: <Car size={16} />,           label: "Parking Nearby"    },
];

const stepV: Variants = {
  enter: { x: 40, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { x: -40, opacity: 0, transition: { duration: 0.2 } },
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", email: "", date: "", time: "", guests: "2", note: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [step, setStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) setErrors(p => { const n = { ...p }; delete n[name as keyof FormState]; return n; });
  };

  const goStep2 = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim()) e.phone = "Required";
    setErrors(e);
    if (!Object.keys(e).length) setStep(2);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const e2: Partial<FormState> = {};
    if (!form.date) e2.date = "Required";
    if (!form.time) e2.time = "Required";
    setErrors(e2);
    if (Object.keys(e2).length) return;
    setStatus("loading");
    await new Promise(r => setTimeout(r, 1800));
    setStatus("success");
  };

  /* ── Success screen ─────────────────────────── */
  if (status === "success") {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "#1E1A10" }}>
        <FloatingFoods count={6} opacity={0.2} />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="relative z-10 text-center px-4 max-w-md"
        >
          <motion.div
            animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full gold-shimmer flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle size={44} className="text-black" />
          </motion.div>
          <h2 className="text-white mb-3" style={{ fontFamily: "var(--font-dancing)", fontSize: "3rem" }}>Reservation Confirmed!</h2>
          <p className="text-white/70 text-base mb-2">
            Thank you, <strong>{form.name}</strong>! Table for <strong>{form.guests}</strong> on{" "}
            <strong>{form.date}</strong> at <strong>{form.time}</strong>.
          </p>
          <p className="text-white/45 text-sm mb-8">We&apos;ll confirm via WhatsApp at <strong>{form.phone}</strong> within 30 minutes.</p>
          <a
            href={`https://wa.me/918075858083?text=Hi+Khoj!+I+just+reserved+a+table+for+${encodeURIComponent(form.name)}+on+${form.date}+at+${form.time}+for+${form.guests}+guests.`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white text-base"
            style={{ background: "#25D366" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.118 1.512 5.855L.046 23.45A.5.5 0 00.55 24l5.748-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.507 16.785c-.232.651-1.346 1.243-1.853 1.319-.476.07-.87.083-1.291-.098-.241-.105-.553-.228-.951-.4-1.667-.72-2.757-2.414-2.841-2.526-.083-.112-.677-.899-.677-1.716s.427-1.215.579-1.381c.152-.166.331-.207.441-.207s.22.002.316.007c.101.005.237-.038.37.282.138.331.467 1.144.509 1.226.041.082.069.178.014.286-.055.107-.083.174-.166.268-.082.094-.173.21-.248.282-.082.082-.167.17-.072.334.095.165.424.698.91 1.131.625.559 1.152.732 1.316.814.165.082.261.069.358-.041.096-.11.41-.478.52-.642.111-.165.221-.138.372-.083.152.055.965.455 1.13.538.165.082.275.124.316.193.041.069.041.399-.191 1.049z"/></svg>
            Confirm on WhatsApp
          </a>
        </motion.div>
      </section>
    );
  }

  /* ── Main contact page ──────────────────────── */
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden" style={{ background: "#1E1A10" }}>
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1554118811-1e0d0a7e1d7f?w=1920&q=85&fit=crop&auto=format" alt="Khoj cafe" fill className="object-cover opacity-20" unoptimized />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(26,18,0,0.6),rgba(26,18,0,0.92))" }} />
        </div>
        <FloatingFoods count={5} opacity={0.16} />

        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xs font-semibold tracking-[0.35em] uppercase mb-3" style={{ color: GOLD }}>Get in Touch</motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35, duration: 0.7 }}
            className="text-white mb-5" style={{ fontFamily: "var(--font-dancing)", fontSize: "clamp(3rem,10vw,6rem)" }}
          >
            Find & Reserve
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6 }}
            className="h-px max-w-40 mx-auto mb-5" style={{ background: `linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="text-white/55 text-base max-w-md mx-auto">
            S Beach Rd, Kuttichira, Kozhikode · Open daily 11 AM – 11:30 PM
          </motion.p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="py-10 sm:py-20" style={{ background: "#FAF5EA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left info */}
            <div className="lg:col-span-2 space-y-5">

              {/* Address card */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="rounded-3xl p-7 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg,#1E1A10,#2A2010)" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center gold-shimmer">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Find Us</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      S Beach Rd, Kuttichira<br />
                      Kozhikode, Kerala 673001<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(212,168,67,0.15)", border: "1px solid rgba(212,168,67,0.3)" }}>
                    <Phone size={16} style={{ color: GOLD }} />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">Call / WhatsApp</p>
                    <a href="tel:+918075858083" className="text-white font-medium text-sm hover:text-[#C4892C] transition-colors">+91 80758 58083</a>
                  </div>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="rounded-3xl p-7 border border-[rgba(212,168,67,0.18)] bg-white" style={{ boxShadow: "0 4px 20px rgba(26,18,0,0.08)" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl gold-shimmer flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-black" />
                  </div>
                  <h3 className="font-bold" style={{ fontFamily: "var(--font-playfair)", color: "#1E1A10" }}>Opening Hours</h3>
                </div>
                {[
                  { day: "Monday – Friday", time: "11:00 AM – 11:30 PM" },
                  { day: "Saturday",        time: "11:00 AM – 11:30 PM" },
                  { day: "Sunday",          time: "11:00 AM – 11:30 PM" },
                ].map(({ day, time }) => (
                  <div key={day} className="flex justify-between py-2.5 border-b border-[rgba(212,168,67,0.1)] last:border-0">
                    <span className="text-sm" style={{ color: "#7A6A4A" }}>{day}</span>
                    <span className="text-sm font-semibold" style={{ color: "#1E1A10" }}>{time}</span>
                  </div>
                ))}
                <div className="mt-5 flex items-center gap-2 p-3 rounded-xl" style={{ background: "rgba(212,168,67,0.08)", border: "1px solid rgba(212,168,67,0.2)" }}>
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute h-full w-full rounded-full bg-emerald-500 opacity-70 animate-ping" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-semibold" style={{ color: GOLD }}>Open Now · Closes 11:30 PM</span>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-3">
                {features.map(({ icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border" style={{ borderColor: "rgba(212,168,67,0.15)", boxShadow: "0 1px 6px rgba(26,18,0,0.06)" }}>
                    <span style={{ color: GOLD }}>{icon}</span>
                    <span className="text-sm font-medium" style={{ color: "#1E1A10" }}>{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Action buttons */}
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex flex-col gap-3">
                <a
                  href="https://wa.me/918075858083?text=Hi+Khoj!+I+would+like+to+reserve+a+table."
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-white text-sm"
                  style={{ background: "#25D366" }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.118 1.512 5.855L.046 23.45A.5.5 0 00.55 24l5.748-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.507 16.785c-.232.651-1.346 1.243-1.853 1.319-.476.07-.87.083-1.291-.098-.241-.105-.553-.228-.951-.4-1.667-.72-2.757-2.414-2.841-2.526-.083-.112-.677-.899-.677-1.716s.427-1.215.579-1.381c.152-.166.331-.207.441-.207s.22.002.316.007c.101.005.237-.038.37.282.138.331.467 1.144.509 1.226.041.082.069.178.014.286-.055.107-.083.174-.166.268-.082.094-.173.21-.248.282-.082.082-.167.17-.072.334.095.165.424.698.91 1.131.625.559 1.152.732 1.316.814.165.082.261.069.358-.041.096-.11.41-.478.52-.642.111-.165.221-.138.372-.083.152.055.965.455 1.13.538.165.082.275.124.316.193.041.069.041.399-.191 1.049z"/></svg>
                  WhatsApp Us
                </a>
                <a
                  href="https://maps.google.com/?q=Khoj+Calicut+Kozhikode"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-semibold text-sm border bg-white hover:bg-[#FAF5EA] transition-colors"
                  style={{ borderColor: "rgba(212,168,67,0.25)", color: "#1E1A10" }}
                >
                  <MapPin size={16} style={{ color: GOLD }} /> Get Directions
                </a>
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-3">
              <div className="rounded-3xl overflow-hidden" style={{ background: "#fff", boxShadow: "0 8px 40px rgba(26,18,0,0.12)" }}>

                {/* Form header */}
                <div className="relative p-8 text-center overflow-hidden" style={{ background: "linear-gradient(135deg,#1E1A10,#2A2010)" }}>
                  <h2 className="text-white mb-1" style={{ fontFamily: "var(--font-dancing)", fontSize: "2.4rem" }}>Reserve Your Table</h2>
                  <p className="text-white/55 text-sm mb-5">Confirmed via WhatsApp within 30 minutes.</p>

                  {/* Steps */}
                  <div className="flex items-center justify-center gap-2">
                    {[1, 2].map(s => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                          style={step >= s ? { background: GOLD, color: "#1E1A10" } : { background: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                        >{s}</div>
                        {s < 2 && <div className="w-8 h-px" style={{ background: step > s ? GOLD : "rgba(255,255,255,0.15)" }} />}
                      </div>
                    ))}
                    <span className="text-white/40 text-xs ml-2">Step {step} of 2</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-7 sm:p-8">
                  <AnimatePresence mode="wait">

                    {step === 1 && (
                      <motion.div key="s1" variants={stepV} initial="enter" animate="center" exit="exit" className="space-y-5">
                        <p className="text-sm font-medium" style={{ color: "#7A6A4A" }}>Your contact details</p>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "#1E1A10" }}>Full Name *</label>
                            <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" autoComplete="name"
                              className={`form-field w-full px-4 py-3 rounded-xl text-sm placeholder-muted/50 ${errors.name ? "border-red-400 bg-red-50" : ""}`}
                              style={{ color: "#1E1A10" }} />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "#1E1A10" }}>Phone / WhatsApp *</label>
                            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 80758 58083" autoComplete="tel"
                              className={`form-field w-full px-4 py-3 rounded-xl text-sm placeholder-muted/50 ${errors.phone ? "border-red-400 bg-red-50" : ""}`}
                              style={{ color: "#1E1A10" }} />
                            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "#1E1A10" }}>Email (optional)</label>
                          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" autoComplete="email"
                            className="form-field w-full px-4 py-3 rounded-xl text-sm placeholder-muted/50" style={{ color: "#1E1A10" }} />
                        </div>
                        <motion.button type="button" onClick={goStep2} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                          className="w-full py-4 rounded-2xl font-bold text-black text-base gold-shimmer shadow-lg">
                          Continue →
                        </motion.button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="s2" variants={stepV} initial="enter" animate="center" exit="exit" className="space-y-5">
                        <p className="text-sm font-medium" style={{ color: "#7A6A4A" }}>Booking for <strong style={{ color: "#1E1A10" }}>{form.name}</strong></p>
                        <div className="grid sm:grid-cols-3 gap-5">
                          <div>
                            <label className="block text-sm font-medium mb-2" style={{ color: "#1E1A10" }}>Guests *</label>
                            <select name="guests" value={form.guests} onChange={handleChange}
                              className="form-field w-full px-4 py-3 rounded-xl text-sm" style={{ color: "#1E1A10" }}>
                              {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n===1?"Guest":"Guests"}</option>)}
                              <option value="11">10+ (Group)</option>
                            </select>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-sm font-medium mb-2" style={{ color: "#1E1A10" }}>Date *</label>
                            <input name="date" type="date" min={today} value={form.date} onChange={handleChange}
                              className={`form-field w-full px-4 py-3 rounded-xl text-sm ${errors.date ? "border-red-400 bg-red-50" : ""}`}
                              style={{ color: "#1E1A10" }} />
                            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "#1E1A10" }}>Preferred Time *</label>
                          <select name="time" value={form.time} onChange={handleChange}
                            className={`form-field w-full px-4 py-3 rounded-xl text-sm ${errors.time ? "border-red-400" : ""}`}
                            style={{ color: "#1E1A10" }}>
                            <option value="">Select a time</option>
                            {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                          {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" style={{ color: "#1E1A10" }}>Special Requests</label>
                          <textarea name="note" rows={3} value={form.note} onChange={handleChange}
                            placeholder="Birthday, dietary needs, preferred seating…"
                            className="form-field w-full px-4 py-3 rounded-xl text-sm placeholder-muted/50 resize-none"
                            style={{ color: "#1E1A10" }} />
                        </div>
                        <div className="flex gap-3">
                          <motion.button type="button" onClick={() => setStep(1)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                            className="w-1/3 py-4 rounded-2xl font-semibold text-sm border hover:bg-[#FAF5EA] transition-colors"
                            style={{ borderColor: "rgba(212,168,67,0.25)", color: "#1E1A10" }}>
                            ← Back
                          </motion.button>
                          <motion.button type="submit" disabled={status === "loading"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                            className="flex-1 py-4 rounded-2xl font-bold text-black text-base gold-shimmer shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                            {status === "loading" ? <><Loader2 size={18} className="animate-spin" /> Booking…</> : "Confirm Reservation"}
                          </motion.button>
                        </div>
                        <p className="text-xs text-center" style={{ color: "#7A6A4A" }}>Walk-ins always welcome · Confirmation within 30 min</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="mt-10 rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(212,168,67,0.2)", boxShadow: "0 8px 32px rgba(26,18,0,0.12)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6!2d75.7804!3d11.2520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6595179eb3a05%3A0x95ee0b1cdc21b3ad!2sKhoj+Cafe+Calicut!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="260"
              style={{ border: 0, display: "block" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Khoj Calicut location map"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
