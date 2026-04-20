"use client";

import AnimatedSection from "./AnimatedSection";
import { MapPin, Heart, Award, Leaf } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Heart,
    title: "Passion-Crafted",
    description:
      "Born from a lifetime of fascination with mycology and the art of fine chocolate.",
  },
  {
    icon: Award,
    title: "No Corners Cut",
    description:
      "Hundreds of hours of development ensuring each creation meets our exacting standards.",
  },
  {
    icon: MapPin,
    title: "Denver Roots",
    description:
      "Proudly born and raised in Colorado — crafted for the community we love.",
  },
  {
    icon: Leaf,
    title: "Ethically Sourced",
    description:
      "High-quality ingredients with ethical sourcing practices at every step.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-chocolate-700/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-chocolate-400 mb-4">
            Our Story
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-cream-50 mb-6">
            Where Chocolate Meets
            <br />
            <span className="text-gradient">Curiosity</span>
          </h2>
          <div className="divider-gradient max-w-xs mx-auto mb-8" />
        </AnimatedSection>

        {/* Story content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-cream-200/80 leading-relaxed font-serif">
                Zonkalicious is a gourmet, artisanal chocolate company based in
                Denver, Colorado. After a lifetime of research into the world of
                mycology, our founder decided to bring two greatest loves to life
                — expertise in chocolate fused with the magic of mushrooms.
              </p>
              <p className="text-base text-cream-200/60 leading-relaxed">
                The culmination of two years and hundreds of hours of
                development, Zonkalicious was born from a deep love for
                community and craftsmanship. We do this for the joy of
                everything involved, especially the connections forged when
                like-minded, kind people gravitate towards each other.
              </p>
              <p className="text-base text-cream-200/60 leading-relaxed">
                Our mushroom-infused chocolates combine psychotropic, nootropic,
                and purely delicious varieties in our proprietary
                reality-enhancing blend — the perfect treat for any occasion.
              </p>
              <div className="pt-4">
                <a href="#contact" className="btn-outline text-sm">
                  Get in Touch
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Visual card with logo and quote */}
          <AnimatedSection delay={0.3}>
            <div className="relative">
              <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                {/* Decorative background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-chocolate-600/10 via-transparent to-gold-600/5" />
                <div className="relative space-y-8">
                  {/* Logo mark instead of "Z" block */}
                  <div className="relative w-16 h-16">
                    <Image
                      src="/images/logo.png"
                      alt="Zonkalicious brand mark"
                      fill
                      className="object-contain"
                      style={{ filter: "invert(1)" }}
                    />
                  </div>
                  <blockquote className="text-xl md:text-2xl font-serif text-cream-100 leading-relaxed italic">
                    &ldquo;Our goal is to share what&rsquo;s possible when no
                    corners are cut. Allow us to delight you in this combination
                    of the best little joys the universe has bestowed upon
                    us.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-px bg-chocolate-500" />
                    <span className="text-sm font-medium text-chocolate-300 tracking-wide">
                      Zonkalicious Founders
                    </span>
                  </div>
                </div>
              </div>
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-chocolate-600/10 to-gold-600/5 rounded-3xl blur-2xl -z-10" />
            </div>
          </AnimatedSection>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1 + i * 0.1}>
              <div className="glass-card-hover p-6 md:p-8 group h-full">
                <div className="w-12 h-12 rounded-xl bg-chocolate-500/10 flex items-center justify-center mb-5 group-hover:bg-chocolate-500/20 transition-colors duration-300">
                  <item.icon
                    size={22}
                    className="text-chocolate-400 group-hover:text-chocolate-300 transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-cream-50 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-cream-200/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
