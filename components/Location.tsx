import { MapPin, Phone, Clock, Wifi, Users, Accessibility } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "12:00 PM – 11:30 PM" },
  { day: "Saturday",        time: "12:00 PM – 11:30 PM" },
  { day: "Sunday",          time: "12:00 PM – 11:30 PM" },
];

const features = [
  { icon: <Wifi size={16} />,          label: "Free Wi-Fi"         },
  { icon: <Users size={16} />,         label: "Group Parties"      },
  { icon: <Accessibility size={16} />, label: "Wheelchair Access"  },
  { icon: <Phone size={16} />,         label: "Dine-in & Delivery" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Find Us
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-brown mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Location & Hours
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* Left — Info panel */}
          <div className="space-y-6 reveal reveal-delay-1">

            {/* Address card */}
            <div
              className="p-8 rounded-3xl border border-gold/15"
              style={{ background: "linear-gradient(135deg, #1C1008 0%, #2D1B14 100%)" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                  <MapPin size={22} className="text-espresso" />
                </div>
                <div>
                  <h3
                    className="text-white font-bold text-lg mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    How to Find Us
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Baby Arcade, PT Usha Road<br />
                    Opposite Taj Gateway Hotel, 4th Gate<br />
                    Vellayil, Kozhikode – 673 032<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">Call / WhatsApp</p>
                    <a
                      href="tel:+919020902096"
                      className="text-white font-medium text-sm hover:text-gold transition-colors"
                    >
                      +91 90209 02096
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="p-8 rounded-3xl bg-parchment border border-gold/15">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-espresso" />
                </div>
                <h3
                  className="text-dark-brown font-bold text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-muted text-sm">{day}</span>
                    <span className="font-semibold text-dark-brown text-sm">{time}</span>
                  </div>
                ))}
              </div>

              {/* Live status pill */}
              <div className="mt-6 flex items-center gap-2 p-3 rounded-xl bg-sage/15 border border-sage/20">
                <span className="w-2 h-2 rounded-full bg-sage animate-pulse shrink-0" />
                <span className="text-sage text-sm font-medium">Open Now · Closes at 11:30 PM</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              {features.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-gold/10"
                >
                  <span className="text-gold">{icon}</span>
                  <span className="text-dark-brown text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Map embed */}
          <div className="reveal reveal-delay-2">
            <div className="h-full min-h-105 rounded-3xl overflow-hidden border border-gold/15 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6!2d75.7804!3d11.2520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6595179eb3a05%3A0x95ee0b1cdc21b3ad!2sSixth%20Avenue%20Cafe!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sixth Avenue Cafe location map"
              />
            </div>
          </div>
        </div>

        {/* WhatsApp / Get Directions CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 reveal reveal-delay-3">
          <a
            href="https://wa.me/919020902096?text=Hi%2C%20I%27d%20like%20to%20make%20a%20reservation%20at%20Sixth%20Avenue%20Cafe."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white text-sm transition-transform hover:scale-105"
            style={{ background: "#25D366" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.549 4.118 1.512 5.855L.046 23.45A.5.5 0 00.55 24l5.748-1.506A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.012-1.37l-.36-.215-3.714.972.993-3.624-.234-.373A9.818 9.818 0 012.182 12C2.182 6.566 6.566 2.182 12 2.182S21.818 6.566 21.818 12 17.434 21.818 12 21.818z"/>
            </svg>
            WhatsApp Us
          </a>
          <a
            href="https://maps.google.com/?q=Sixth+Avenue+Cafe+Kozhikode"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-dark-brown text-sm border border-gold/30 bg-white hover:bg-parchment transition-all"
          >
            <MapPin size={17} className="text-gold" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
