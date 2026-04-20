"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-chocolate-950/50 to-dark-950" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-chocolate-700/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gold-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chocolate-600/5 rounded-full blur-[150px]" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-bg" />
      </div>

      {/* Decorative floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] w-3 h-3 bg-chocolate-400/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[25%] right-[15%] w-2 h-2 bg-gold-400/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-cream-300/20 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[10%] w-2.5 h-2.5 bg-chocolate-300/20 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center">
        {/* Hero Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
          >
            <Image
              src="/images/logo.png"
              alt="Zonkalicious — Mushroom-Infused Artisanal Chocolate"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(214,128,40,0.25)]"
              style={{ filter: "invert(1)" }}
              priority
            />
            {/* Glow ring behind logo */}
            <div className="absolute inset-[-20%] rounded-full bg-gradient-to-br from-chocolate-500/10 via-transparent to-gold-500/10 blur-2xl -z-10" />
          </motion.div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-chocolate-500/20 bg-chocolate-500/5 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-chocolate-400" />
          <span className="text-xs font-medium tracking-widest uppercase text-chocolate-300">
            Denver, Colorado
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          <span className="block text-cream-50">Indulge in</span>
          <span className="block text-gradient mt-1 py-1">Joyful Fusions</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="max-w-xl mx-auto text-base sm:text-lg text-cream-200/60 leading-relaxed mb-10 font-serif"
        >
          Gourmet artisanal mushroom-infused chocolates where no corners are cut.
          Crafted with reverence. Designed to delight.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#products" className="btn-primary w-full sm:w-auto">
            Explore Our Chocolates
          </a>
          <a href="#about" className="btn-outline w-full sm:w-auto">
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-cream-200/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
