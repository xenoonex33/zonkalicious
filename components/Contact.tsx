"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Phone, Mail, Instagram, Facebook, Send, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-chocolate-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-chocolate-400 mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-cream-50 mb-6">
            We&rsquo;d Love to{" "}
            <span className="text-gradient">Hear From You</span>
          </h2>
          <p className="max-w-lg mx-auto text-base text-cream-200/50">
            Text, call, email or fill out the form below. Ask about retail
            locations and Veteran discounts.
          </p>
          <div className="divider-gradient max-w-xs mx-auto mt-8" />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:3036010587"
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-chocolate-500/10 flex items-center justify-center shrink-0 group-hover:bg-chocolate-500/20 transition-colors">
                  <Phone
                    size={20}
                    className="text-chocolate-400"
                  />
                </div>
                <div>
                  <p className="text-xs text-cream-200/40 mb-0.5 font-medium uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-cream-100 font-medium">(303) 601-0587</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@zonkacatering.com"
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-chocolate-500/10 flex items-center justify-center shrink-0 group-hover:bg-chocolate-500/20 transition-colors">
                  <Mail
                    size={20}
                    className="text-chocolate-400"
                  />
                </div>
                <div>
                  <p className="text-xs text-cream-200/40 mb-0.5 font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-cream-100 font-medium">
                    info@zonkacatering.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="glass-card p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-chocolate-500/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-chocolate-400" />
                </div>
                <div>
                  <p className="text-xs text-cream-200/40 mb-0.5 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-cream-100 font-medium">
                    Denver, Colorado
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://www.instagram.com/zonkacatering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-4 flex items-center gap-3 flex-1 group"
                >
                  <Instagram
                    size={20}
                    className="text-chocolate-400 group-hover:text-chocolate-300 transition-colors"
                  />
                  <span className="text-sm font-medium text-cream-200/60 group-hover:text-cream-100 transition-colors">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/people/William-H-Zonka/pfbid02sKaU2ajK5oHPEjkm5ETMXzeMHn8nrggf2rGJsTZJpQ5RWFXgvpdz7cGov1K4uy6Al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-4 flex items-center gap-3 flex-1 group"
                >
                  <Facebook
                    size={20}
                    className="text-chocolate-400 group-hover:text-chocolate-300 transition-colors"
                  />
                  <span className="text-sm font-medium text-cream-200/60 group-hover:text-cream-100 transition-colors">
                    Facebook
                  </span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-6 md:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-chocolate-600/5 via-transparent to-gold-600/3" />
              <div className="relative space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold tracking-wider uppercase text-cream-200/40 mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-cream-100 placeholder:text-cream-200/20 focus:outline-none focus:border-chocolate-500/40 focus:bg-white/[0.06] transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold tracking-wider uppercase text-cream-200/40 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-cream-100 placeholder:text-cream-200/20 focus:outline-none focus:border-chocolate-500/40 focus:bg-white/[0.06] transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold tracking-wider uppercase text-cream-200/40 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-cream-100 placeholder:text-cream-200/20 focus:outline-none focus:border-chocolate-500/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                    placeholder="Tell us what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  {submitted ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
