"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  ShoppingBag,
  X,
  ChevronDown,
  Sparkles,
  Star,
  Truck,
  Shield,
  Heart,
  ArrowRight,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import Image from "next/image";

/* ──────────────────────────────────────────
   Data
   ────────────────────────────────────────── */
type MerchCategory = "all" | "tshirts" | "hoodies";

interface Variant {
  color: string;
  colorHex: string;
}

interface MerchItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: "tshirts" | "hoodies";
  image: string;
  sizes: string[];
  variants: Variant[];
  badge?: string;
  gradient: string;
}

const merchItems: MerchItem[] = [
  {
    id: "tshirt-psychedelic",
    name: "Psychedelic Fusion Tee",
    tagline: "Mushroom × Chocolate Artwork",
    description:
      "Premium heavyweight 100% organic cotton tee featuring a vibrant psychedelic mushroom and chocolate bar fusion print in gold, violet, and rich brown tones. Screen-printed with eco-friendly water-based inks.",
    price: 42,
    category: "tshirts",
    image: "/images/merch/tshirt-psychedelic.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    variants: [
      { color: "Black", colorHex: "#1a1a1a" },
      { color: "Charcoal", colorHex: "#3a3a3a" },
    ],
    badge: "Best Seller",
    gradient: "from-violet-500/20 via-purple-400/10 to-gold-500/20",
  },
  {
    id: "hoodie-gold",
    name: "Gold Emblem Hoodie",
    tagline: "Luxury Streetwear Essential",
    description:
      "Ultra-soft 400gsm French Terry cotton hoodie with a gold foil mushroom emblem and the Zonkalicious wordmark embroidered on the chest. Oversized fit with ribbed cuffs and kangaroo pocket.",
    price: 85,
    category: "hoodies",
    image: "/images/merch/hoodie-gold.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    variants: [
      { color: "Black", colorHex: "#1a1a1a" },
      { color: "Midnight", colorHex: "#1a1530" },
    ],
    badge: "Premium",
    gradient: "from-gold-500/20 via-amber-400/10 to-chocolate-500/20",
  },
  {
    id: "tshirt-wonderland",
    name: "Wonderland Botanical Tee",
    tagline: "Alice-Inspired Art Collection",
    description:
      "Vintage-washed cream tee adorned with a hand-drawn botanical illustration inspired by our Wonderland Series. Copper ink screen-print on premium ringspun cotton with a lived-in soft feel.",
    price: 45,
    category: "tshirts",
    image: "/images/merch/tshirt-wonderland.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    variants: [
      { color: "Cream", colorHex: "#f5f0e1" },
      { color: "Vintage Sand", colorHex: "#d4c5a0" },
    ],
    gradient: "from-chocolate-500/20 via-amber-400/10 to-cream-400/20",
  },
  {
    id: "hoodie-wonderland",
    name: "Wonderland Back-Print Hoodie",
    tagline: "Statement Piece — Limited Run",
    description:
      "Heavyweight 450gsm dark brown hoodie featuring a large-format Wonderland tea party back print in cream and gold. Front left chest features the signature 'Z' logo. Double-layered hood and reinforced seams.",
    price: 95,
    category: "hoodies",
    image: "/images/merch/hoodie-wonderland.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    variants: [
      { color: "Dark Chocolate", colorHex: "#3a2415" },
      { color: "Deep Espresso", colorHex: "#2a1a10" },
    ],
    badge: "Limited Edition",
    gradient: "from-chocolate-600/20 via-amber-400/10 to-rose-500/20",
  },
  {
    id: "tshirt-zonkafe",
    name: "Zonkafé Geometric Tee",
    tagline: "Modern Minimalist Design",
    description:
      "Contemporary forest green tee with a minimalist geometric mushroom cap rendered in white and gold line art. Clean sans-serif Zonkafé typography. Made from 100% combed cotton for a buttery-smooth hand feel.",
    price: 40,
    category: "tshirts",
    image: "/images/merch/tshirt-zonkafe.png",
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    variants: [
      { color: "Forest", colorHex: "#2d4a2e" },
      { color: "Olive", colorHex: "#556b2f" },
    ],
    gradient: "from-green-500/20 via-emerald-400/10 to-teal-500/20",
  },
  {
    id: "hoodie-denver",
    name: "Denver Heritage Zip-Up",
    tagline: "Rep the 303",
    description:
      "Full-zip black hoodie with a vintage distressed arc print reading 'ZONKALICIOUS DENVER CO' on the back and a small left-chest mushroom icon. YKK zipper, split kangaroo pocket, and a classic athletic fit.",
    price: 78,
    category: "hoodies",
    image: "/images/merch/hoodie-denver.png",
    sizes: ["S", "M", "L", "XL", "2XL"],
    variants: [
      { color: "Black", colorHex: "#1a1a1a" },
      { color: "Washed Black", colorHex: "#2c2c2c" },
    ],
    gradient: "from-cream-400/20 via-gold-400/10 to-chocolate-500/20",
  },
];

const perks = [
  { icon: Truck, label: "Free Shipping Over $75" },
  { icon: Shield, label: "60-Day Returns" },
  { icon: Star, label: "Premium Quality" },
];

/* ──────────────────────────────────────────
   Quick-View Modal
   ────────────────────────────────────────── */
function QuickViewModal({
  item,
  onClose,
}: {
  item: MerchItem;
  onClose: () => void;
}) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-950/90 backdrop-blur-xl" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-2xl shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-cream-200/60 hover:text-cream-50 hover:bg-white/[0.10] transition-all duration-300"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[500px] overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 via-transparent to-transparent" />
            {item.badge && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-chocolate-600/90 text-cream-50 rounded-full border border-chocolate-400/30 backdrop-blur-sm">
                {item.badge}
              </span>
            )}
            {/* Wishlist */}
            <button
              onClick={() => setLiked(!liked)}
              className="absolute top-4 right-14 md:right-4 z-10 p-2.5 rounded-full bg-white/[0.08] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.12]"
            >
              <Heart
                size={18}
                className={
                  liked
                    ? "fill-rose-500 text-rose-500"
                    : "text-cream-200/60"
                }
              />
            </button>
          </div>

          {/* Info */}
          <div className="p-6 md:p-8 flex flex-col">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-chocolate-400 mb-2">
              {item.category === "tshirts" ? "T-Shirt" : "Hoodie"}
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-cream-50 mb-1">
              {item.name}
            </h2>
            <p className="text-sm text-chocolate-300 mb-4">{item.tagline}</p>

            <p className="text-sm text-cream-200/50 leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-cream-50">
                ${item.price}
              </span>
              <span className="text-sm text-cream-200/30">USD</span>
            </div>

            {/* Color */}
            <div className="mb-5">
              <span className="text-xs font-semibold tracking-wider uppercase text-cream-200/40 mb-2 block">
                Color — {item.variants[selectedVariant].color}
              </span>
              <div className="flex gap-2">
                {item.variants.map((v, i) => (
                  <button
                    key={v.color}
                    onClick={() => setSelectedVariant(i)}
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      selectedVariant === i
                        ? "border-chocolate-400 scale-110 shadow-lg shadow-chocolate-900/30"
                        : "border-white/[0.08] hover:border-white/[0.15]"
                    }`}
                    style={{ backgroundColor: v.colorHex }}
                    title={v.color}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-cream-200/40 mb-2 block">
                Size
              </span>
              <div className="flex flex-wrap gap-2">
                {item.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-[44px] px-3 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                      selectedSize === s
                        ? "bg-chocolate-600 text-cream-50 border-chocolate-500 shadow-lg shadow-chocolate-900/20"
                        : "bg-white/[0.04] text-cream-200/60 border-white/[0.06] hover:bg-white/[0.08] hover:text-cream-100"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty & Add to Cart */}
            <div className="mt-auto flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center rounded-full bg-white/[0.04] border border-white/[0.06]">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="p-3 text-cream-200/40 hover:text-cream-100 transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-8 text-center text-sm font-medium text-cream-100">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="p-3 text-cream-200/40 hover:text-cream-100 transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                    selectedSize
                      ? "bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-cream-50 hover:from-chocolate-500 hover:to-chocolate-600 hover:shadow-lg hover:shadow-chocolate-700/30 active:scale-[0.98]"
                      : "bg-white/[0.06] text-cream-200/30 cursor-not-allowed"
                  }`}
                  disabled={!selectedSize}
                >
                  <ShoppingBag size={16} />
                  {selectedSize ? "Add to Cart" : "Select a Size"}
                </button>
              </div>
              <div className="flex items-center justify-center gap-4 pt-2">
                {perks.map((perk) => (
                  <div
                    key={perk.label}
                    className="flex items-center gap-1.5 text-[10px] text-cream-200/30"
                  >
                    <perk.icon size={12} className="text-chocolate-500/60" />
                    <span>{perk.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   Product Card
   ────────────────────────────────────────── */
function ProductCard({
  item,
  index,
  onQuickView,
}: {
  item: MerchItem;
  index: number;
  onQuickView: (item: MerchItem) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group"
    >
      <div className="glass-card-hover h-full flex flex-col relative overflow-hidden">
        {/* Ambient gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
        />

        {/* Image */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/10 to-transparent" />

          {/* Badge */}
          {item.badge && (
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute top-3 left-3 z-10 px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-chocolate-600/90 text-cream-50 rounded-full border border-chocolate-400/30 backdrop-blur-sm"
            >
              {item.badge}
            </motion.span>
          )}

          {/* Quick view overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 z-10 flex items-center justify-center"
              >
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={() => onQuickView(item)}
                  className="px-6 py-3 rounded-full bg-white/[0.12] backdrop-blur-md border border-white/[0.15] text-cream-50 text-sm font-semibold tracking-wider uppercase hover:bg-white/[0.20] transition-all duration-300"
                >
                  Quick View
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Size chips */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-1">
            {item.sizes.slice(0, 4).map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-[9px] font-medium tracking-wider uppercase bg-white/[0.06] backdrop-blur-sm border border-white/[0.06] rounded text-cream-200/40"
              >
                {s}
              </span>
            ))}
            {item.sizes.length > 4 && (
              <span className="px-2 py-0.5 text-[9px] font-medium tracking-wider uppercase bg-white/[0.06] backdrop-blur-sm border border-white/[0.06] rounded text-cream-200/40">
                +{item.sizes.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="relative z-10 p-5 md:p-6 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-serif text-lg font-bold text-cream-50 group-hover:text-white transition-colors leading-tight">
              {item.name}
            </h3>
            <span className="text-lg font-bold text-chocolate-300 shrink-0">
              ${item.price}
            </span>
          </div>
          <p className="text-xs text-chocolate-400 mb-2">{item.tagline}</p>
          <p className="text-xs text-cream-200/40 leading-relaxed flex-1 line-clamp-2">
            {item.description}
          </p>

          {/* Swatches */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-1.5">
              {item.variants.map((v) => (
                <div
                  key={v.color}
                  className="w-5 h-5 rounded-full border border-white/[0.10]"
                  style={{ backgroundColor: v.colorHex }}
                  title={v.color}
                />
              ))}
            </div>
            <button
              onClick={() => onQuickView(item)}
              className="flex items-center gap-1.5 text-xs font-medium text-chocolate-400 group-hover:text-chocolate-300 transition-colors"
            >
              <span>Shop Now</span>
              <ArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────
   Main Merch Component
   ────────────────────────────────────────── */
export default function Merch() {
  const [activeFilter, setActiveFilter] = useState<MerchCategory>("all");
  const [quickViewItem, setQuickViewItem] = useState<MerchItem | null>(null);

  const filtered =
    activeFilter === "all"
      ? merchItems
      : merchItems.filter((i) => i.category === activeFilter);

  const filters: { key: MerchCategory; label: string }[] = [
    { key: "all", label: "All Merch" },
    { key: "tshirts", label: "T-Shirts" },
    { key: "hoodies", label: "Hoodies" },
  ];

  return (
    <>
      <section id="merch" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-chocolate-950/20 to-dark-950" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-chocolate-600/5 rounded-full blur-[150px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
        {/* Noise */}
        <div className="absolute inset-0 noise-bg" />

        <div className="relative max-w-7xl mx-auto section-padding">
          {/* ── Hero Header ── */}
          <AnimatedSection className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-chocolate-500/20 bg-chocolate-500/5 backdrop-blur-sm">
              <Sparkles size={14} className="text-chocolate-400" />
              <span className="text-xs font-medium tracking-widest uppercase text-chocolate-300">
                Official Merch Drop
              </span>
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-cream-50 mb-4">
              Wear the{" "}
              <span className="text-gradient">Vibe</span>
            </h1>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-cream-200/50 leading-relaxed mb-8 font-light">
              Premium apparel crafted with the same obsession for quality that
              goes into every Zonkalicious bar. Limited runs. No corners cut.
            </p>
            <div className="divider-gradient max-w-xs mx-auto" />
          </AnimatedSection>

          {/* ── Perks bar ── */}
          <AnimatedSection delay={0.1} className="mb-14">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {perks.map((perk) => (
                <div
                  key={perk.label}
                  className="flex items-center gap-2 text-sm text-cream-200/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-chocolate-500/10 flex items-center justify-center">
                    <perk.icon size={16} className="text-chocolate-400" />
                  </div>
                  <span>{perk.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Filter tabs ── */}
          <AnimatedSection delay={0.15} className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActiveFilter(f.key)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === f.key
                      ? "bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-cream-50 shadow-lg shadow-chocolate-900/30"
                      : "text-cream-200/60 hover:text-cream-100"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Product Grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            >
              {filtered.map((item, i) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  index={i}
                  onQuickView={setQuickViewItem}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── Bottom CTA ── */}
          <AnimatedSection delay={0.2} className="mt-16 text-center">
            <div className="glass-card inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 sm:px-12">
              <div className="text-left">
                <p className="text-sm font-semibold text-cream-100">
                  Can&apos;t decide? Bundle &amp; Save.
                </p>
                <p className="text-xs text-cream-200/40">
                  Any tee + hoodie combo — save 15% at checkout.
                </p>
              </div>
              <button className="btn-primary whitespace-nowrap text-xs px-6 py-3">
                Shop Bundles
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick-view modal */}
      <AnimatePresence>
        {quickViewItem && (
          <QuickViewModal
            item={quickViewItem}
            onClose={() => setQuickViewItem(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
