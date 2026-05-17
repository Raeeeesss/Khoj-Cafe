"use client";

import { useState, FormEvent } from "react";
import { CalendarDays, Clock, Users, CheckCircle, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  note: string;
};

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM", "10:30 PM", "11:00 PM",
];

const today = new Date().toISOString().split("T")[0];

export default function Reservation() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", date: "", time: "", guests: "2", note: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim())  e.name  = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.date)         e.date  = "Please pick a date";
    if (!form.time)         e.time  = "Please pick a time";
    if (!form.guests || +form.guests < 1) e.guests = "At least 1 guest";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => { const n = { ...prev }; delete n[name as keyof FormState]; return n; });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    /* Simulated API call — replace with real endpoint */
    await new Promise(r => setTimeout(r, 1800));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <section id="reserve" className="py-24 lg:py-32 bg-parchment">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={36} className="text-espresso" />
          </div>
          <h2
            className="text-3xl font-bold text-dark-brown mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Reservation Requested!
          </h2>
          <p className="text-muted text-base mb-8">
            Thank you, <strong>{form.name}</strong>! We&apos;ve received your reservation for{" "}
            <strong>{form.guests} guest{+form.guests > 1 ? "s" : ""}</strong> on{" "}
            <strong>{form.date}</strong> at <strong>{form.time}</strong>.
            We&apos;ll confirm via WhatsApp or call at <strong>{form.phone}</strong>.
          </p>
          <a
            href={`https://wa.me/919020902096?text=Hi%2C%20I%20just%20submitted%20a%20reservation%20for%20${form.name}%20on%20${form.date}%20at%20${form.time}%20for%20${form.guests}%20guests.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white"
            style={{ background: "#25D366" }}
          >
            Confirm via WhatsApp
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="reserve" className="py-24 lg:py-32 bg-parchment">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Book a Table
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-dark-brown mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Reserve Your Spot
          </h2>
          <p className="text-muted max-w-md mx-auto text-base">
            Fill in your details and we&apos;ll confirm your table via WhatsApp or call.
            Walk-ins always welcome too!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-gold/10 reveal reveal-delay-1"
        >
          <div className="grid sm:grid-cols-2 gap-5">

            {/* Name */}
            <div>
              <label className="block text-dark-brown text-sm font-medium mb-2" htmlFor="name">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={`form-input w-full px-4 py-3 rounded-xl border text-dark-brown text-sm bg-cream placeholder-muted/60 ${
                  errors.name ? "border-red-400 bg-red-50" : "border-gold/20"
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-dark-brown text-sm font-medium mb-2" htmlFor="phone">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className={`form-input w-full px-4 py-3 rounded-xl border text-dark-brown text-sm bg-cream placeholder-muted/60 ${
                  errors.phone ? "border-red-400 bg-red-50" : "border-gold/20"
                }`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-dark-brown text-sm font-medium mb-2" htmlFor="email">
                Email (optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="form-input w-full px-4 py-3 rounded-xl border border-gold/20 text-dark-brown text-sm bg-cream placeholder-muted/60"
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-dark-brown text-sm font-medium mb-2" htmlFor="guests">
                <Users size={14} className="inline mr-1.5 relative -top-0.5 text-gold" />
                Number of Guests *
              </label>
              <select
                id="guests"
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className={`form-input w-full px-4 py-3 rounded-xl border text-dark-brown text-sm bg-cream ${
                  errors.guests ? "border-red-400" : "border-gold/20"
                }`}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
                <option value="11">10+ Guests (Group)</option>
              </select>
              {errors.guests && <p className="text-red-500 text-xs mt-1">{errors.guests}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-dark-brown text-sm font-medium mb-2" htmlFor="date">
                <CalendarDays size={14} className="inline mr-1.5 relative -top-0.5 text-gold" />
                Date *
              </label>
              <input
                id="date"
                name="date"
                type="date"
                min={today}
                value={form.date}
                onChange={handleChange}
                className={`form-input w-full px-4 py-3 rounded-xl border text-dark-brown text-sm bg-cream ${
                  errors.date ? "border-red-400 bg-red-50" : "border-gold/20"
                }`}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>

            {/* Time */}
            <div>
              <label className="block text-dark-brown text-sm font-medium mb-2" htmlFor="time">
                <Clock size={14} className="inline mr-1.5 relative -top-0.5 text-gold" />
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`form-input w-full px-4 py-3 rounded-xl border text-dark-brown text-sm bg-cream ${
                  errors.time ? "border-red-400" : "border-gold/20"
                }`}
              >
                <option value="">Select a time</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
            </div>
          </div>

          {/* Special requests */}
          <div className="mt-5">
            <label className="block text-dark-brown text-sm font-medium mb-2" htmlFor="note">
              Special Requests (optional)
            </label>
            <textarea
              id="note"
              name="note"
              rows={3}
              value={form.note}
              onChange={handleChange}
              placeholder="Allergies, birthday celebration, window seat preference…"
              className="form-input w-full px-4 py-3 rounded-xl border border-gold/20 text-dark-brown text-sm bg-cream placeholder-muted/60 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full mt-7 py-4 rounded-full font-semibold text-espresso text-base shimmer-btn transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Submitting…
              </>
            ) : (
              "Request Reservation"
            )}
          </button>

          <p className="text-muted text-xs text-center mt-4">
            Walk-ins always welcome · Confirmation via WhatsApp within 30 min
          </p>
        </form>
      </div>
    </section>
  );
}
