"use client";

import { Instagram, Facebook, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3 mb-4 group">
              <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src="/images/logo.png"
                  alt="Zonkalicious Logo"
                  fill
                  className="object-contain"
                  style={{ filter: "invert(1)" }}
                />
              </div>
              <span className="font-display text-2xl font-bold">
                <span className="text-gradient">Zonka</span>
                <span className="text-cream-200">licious</span>
              </span>
            </a>
            <p className="text-sm text-cream-200/40 leading-relaxed max-w-xs">
              Gourmet artisanal mushroom-infused chocolates crafted with love in
              Denver, Colorado.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/zonkacatering/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-cream-200/40 hover:text-chocolate-400 hover:border-chocolate-500/30 transition-all duration-300"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/people/William-H-Zonka/pfbid02sKaU2ajK5oHPEjkm5ETMXzeMHn8nrggf2rGJsTZJpQ5RWFXgvpdz7cGov1K4uy6Al/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-cream-200/40 hover:text-chocolate-400 hover:border-chocolate-500/30 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-cream-200/30 mb-5">
              Pages
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Merch", href: "#merch" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream-200/50 hover:text-cream-100 transition-colors duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-cream-200/30 mb-5">
              Products
            </h4>
            <nav className="flex flex-col gap-3">
              <span className="text-sm text-cream-200/50">
                Wonderland Series
              </span>
              <span className="text-sm text-cream-200/50">
                Zonkafé Barista Series
              </span>
              <a href="#merch" className="text-sm text-cream-200/50 hover:text-cream-100 transition-colors duration-300">
                Merch Collection
              </a>
            </nav>
            <div className="mt-6">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-cream-200/30 mb-3">
                Contact
              </h4>
              <p className="text-sm text-cream-200/50">(303) 601-0587</p>
              <p className="text-sm text-cream-200/50">
                info@zonkacatering.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gradient mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-200/30">
            &copy; {new Date().getFullYear()} Zonkalicious — All Rights
            Reserved
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-cream-200/30 hover:text-chocolate-400 transition-colors duration-300"
          >
            Back to top
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
