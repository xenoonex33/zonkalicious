"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Merch", href: "#merch" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.04] shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="relative z-10 group flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[5deg]">
                <Image
                  src="/images/logo.png"
                  alt="Zonkalicious Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(214,128,40,0.3)] group-hover:drop-shadow-[0_0_16px_rgba(214,128,40,0.5)] transition-all duration-500"
                  style={{ filter: "invert(1)" }}
                  priority
                />
              </div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
                <span className="text-gradient">Zonka</span>
                <span className="text-cream-200 group-hover:text-cream-50 transition-colors duration-300">
                  licious
                </span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative px-5 py-2 text-sm font-medium text-cream-200/70 hover:text-cream-50 transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-chocolate-400 to-gold-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </a>
              ))}
              <div className="w-px h-6 bg-white/10 mx-3" />
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/zonkacatering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-cream-200/50 hover:text-chocolate-400 transition-colors duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/people/William-H-Zonka/pfbid02sKaU2ajK5oHPEjkm5ETMXzeMHn8nrggf2rGJsTZJpQ5RWFXgvpdz7cGov1K4uy6Al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-cream-200/50 hover:text-chocolate-400 transition-colors duration-300"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-10 md:hidden p-2 text-cream-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {/* Mobile logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05, duration: 0.4 }}
                className="relative w-20 h-20 mb-4"
              >
                <Image
                  src="/images/logo.png"
                  alt="Zonkalicious Logo"
                  fill
                  className="object-contain"
                  style={{ filter: "invert(1)" }}
                />
              </motion.div>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                  className="text-4xl font-serif font-bold text-cream-100 hover:text-gradient transition-all duration-300 py-3"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex gap-6 mt-8"
              >
                <a
                  href="https://www.instagram.com/zonkacatering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-200/60 hover:text-chocolate-400 transition-colors"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href="https://www.facebook.com/people/William-H-Zonka/pfbid02sKaU2ajK5oHPEjkm5ETMXzeMHn8nrggf2rGJsTZJpQ5RWFXgvpdz7cGov1K4uy6Al/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-200/60 hover:text-chocolate-400 transition-colors"
                >
                  <Facebook size={28} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
