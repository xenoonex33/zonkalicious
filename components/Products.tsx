"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, Coffee, ArrowRight } from "lucide-react";
import Image from "next/image";

const wonderlandProducts = [
  {
    name: "Alice's Bar",
    flavor: "White Chocolate Blueberry Lavender",
    detail: "With a Meyer Lemon Zest",
    description:
      "Embark on a sensory journey where the delicate sweetness of white chocolate harmonizes with vibrant blueberry and soothing lavender, finished with Meyer lemon zest.",
    color: "from-violet-500/20 via-blue-400/10 to-purple-500/20",
    accent: "bg-violet-400/20 text-violet-300",
    image: "/images/products/alice.jpg",
  },
  {
    name: "Caterpillar's Bar",
    flavor: "Key Lime Pie",
    detail: "With a Homemade Graham Cracker Crust",
    description:
      "The zest of key lime pie meets the nostalgic crunch of a homemade graham cracker crust — vibrant and refreshing notes capture the spirit of curiosity and joy.",
    color: "from-green-500/20 via-lime-400/10 to-emerald-500/20",
    accent: "bg-green-400/20 text-green-300",
    image: "/images/products/caterpillar.jpg",
  },
  {
    name: "Mad Hatter's Bar",
    flavor: "Dark Chocolate Orange Dreamsicle",
    detail: "Vegan",
    description:
      "The boldness of dark chocolate dances with the nostalgic charm of an orange dreamsicle — a celebration of unexpected flavors that spark joy and ignite the imagination.",
    color: "from-orange-500/20 via-amber-400/10 to-orange-600/20",
    accent: "bg-orange-400/20 text-orange-300",
    image: "/images/products/mad-hatter.jpg",
    vegan: true,
  },
  {
    name: "Queen's Bar",
    flavor: "Rose Water Pie Cherry Milk Chocolate",
    detail: "Vegan",
    description:
      "The delicate essence of rose water meets the succulent richness of cherry-infused milk chocolate — a royal experience of floral and fruity notes.",
    color: "from-rose-500/20 via-pink-400/10 to-red-500/20",
    accent: "bg-rose-400/20 text-rose-300",
    image: "/images/products/queen.jpg",
    vegan: true,
  },
];

const zonkafeProducts = [
  {
    name: "Amaretto Cappuccino",
    description:
      "A velvety symphony where rich amaretto meets the warmth of cappuccino, creating a sensory journey reminiscent of your favorite coffeehouse embrace.",
    image: "/images/products/amaretto.png",
    color: "from-amber-500/20 via-yellow-400/10 to-amber-600/20",
  },
  {
    name: "Matcha Latte",
    description:
      "The smooth allure of latte intertwines with decadent chocolate. A refined blend — a harmonious symphony for the discerning palate.",
    image: "/images/products/matcha.png",
    color: "from-green-500/20 via-emerald-400/10 to-teal-500/20",
  },
  {
    name: "English Toffee Macchiato",
    description:
      "A captivating marriage of buttery toffee and the aromatic charm of macchiato. Each square is a testament to the art of blending.",
    image: "/images/products/toffee.png",
    color: "from-yellow-600/20 via-amber-400/10 to-orange-500/20",
  },
  {
    name: "Pumpkin Spice Latte",
    description:
      "A decadent blend of autumn's warmth and the rich embrace of latte. Captures the cozy spirit of crisp days and spicy aromas.",
    image: "/images/products/pumpkin.png",
    color: "from-orange-500/20 via-red-400/10 to-amber-500/20",
  },
];

type Tab = "wonderland" | "zonkafe";

export default function Products() {
  const [activeTab, setActiveTab] = useState<Tab>("wonderland");

  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-chocolate-950/30 to-dark-950" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-chocolate-600/5 rounded-full blur-[120px] translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-chocolate-400 mb-4">
            Our Creations
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-cream-50 mb-6">
            Crafted to{" "}
            <span className="text-gradient">Delight</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-cream-200/50">
            Explore our two signature collections — each a unique journey into
            the art of mushroom-infused chocolate.
          </p>
          <div className="divider-gradient max-w-xs mx-auto mt-8" />
        </AnimatedSection>

        {/* Tab switcher */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("wonderland")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "wonderland"
                  ? "bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-cream-50 shadow-lg shadow-chocolate-900/30"
                  : "text-cream-200/60 hover:text-cream-100"
              }`}
            >
              <Sparkles size={16} />
              Wonderland Series
            </button>
            <button
              onClick={() => setActiveTab("zonkafe")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "zonkafe"
                  ? "bg-gradient-to-r from-chocolate-600 to-chocolate-700 text-cream-50 shadow-lg shadow-chocolate-900/30"
                  : "text-cream-200/60 hover:text-cream-100"
              }`}
            >
              <Coffee size={16} />
              Zonkafé Barista
            </button>
          </div>
        </AnimatedSection>

        {/* Product cards */}
        <AnimatePresence mode="wait">
          {activeTab === "wonderland" ? (
            <motion.div
              key="wonderland"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {wonderlandProducts.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="glass-card-hover h-full flex flex-col relative overflow-hidden">
                    {/* Color gradient bg */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Product image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={`${product.name} — ${product.flavor}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                      
                      {/* Vegan badge */}
                      {product.vegan && (
                        <span className="absolute top-3 right-3 z-10 inline-block px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-green-500/80 text-white rounded-full backdrop-blur-sm border border-green-400/30">
                          Vegan
                        </span>
                      )}
                    </div>

                    <div className="relative z-10 p-5 md:p-6 flex-1 flex flex-col">
                      <h3 className="font-serif text-xl font-bold text-cream-50 mb-2 group-hover:text-white transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm font-medium text-chocolate-300 mb-1">
                        {product.flavor}
                      </p>
                      <p className="text-xs text-cream-200/40 mb-3">
                        {product.detail}
                      </p>
                      <p className="text-xs text-cream-200/50 leading-relaxed flex-1">
                        {product.description}
                      </p>

                      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-chocolate-400 group-hover:text-chocolate-300 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="zonkafe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {zonkafeProducts.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="glass-card-hover h-full flex flex-col sm:flex-row relative overflow-hidden">
                    {/* Color gradient bg */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    {/* Product image */}
                    <div className="relative w-full sm:w-48 md:w-56 shrink-0 aspect-square sm:aspect-auto overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-dark-950/40 hidden sm:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent sm:hidden" />
                    </div>

                    <div className="relative z-10 p-5 md:p-6 flex-1 flex flex-col min-w-0">
                      <h3 className="font-serif text-lg font-bold text-cream-50 mb-2 group-hover:text-white transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-cream-200/50 leading-relaxed flex-1">
                        {product.description}
                      </p>
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-chocolate-400 group-hover:text-chocolate-300 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Series description */}
        <AnimatedSection delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-cream-200/40 max-w-lg mx-auto">
            {activeTab === "wonderland"
              ? "Our premier 'Alice in Wonderland' inspired chocolate bar set. The luxurious way to experience our proprietary mushroom blend."
              : "Indulge in Zonka's Zonkafé Barista Series — a milder chocolate experience inspired by your favorite local café. Each professionally tempered square, marked for precision, promises a consistent journey into chocolate bliss."}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
