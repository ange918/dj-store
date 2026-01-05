"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import Link from "next/link";
import heroImage from "../attached_assets/generated_images/premium_fashion_lifestyle_hero_image.png";
import product1 from "../attached_assets/stock_images/black_premium_cotton_da61702b.jpg";
import product2 from "../attached_assets/stock_images/premium_skinny_fit_b_c806a6ca.jpg";
import product3 from "../attached_assets/stock_images/classic_checkered_bu_a1e0026b.jpg";
import product4 from "../attached_assets/stock_images/orange_and_black_str_76d5db2d.jpg";
import product5 from "../attached_assets/stock_images/professional_photo_o_9d22acf2.jpg";
import product6 from "../attached_assets/stock_images/orange_t-shirt_with__09aee960.jpg";
import product7 from "../attached_assets/stock_images/denim_shorts_for_men_f15ace7f.jpg";
import product8 from "../attached_assets/stock_images/black_skinny_jeans_o_cacd5e43.jpg";

// Category Images
import catCasual from "../attached_assets/stock_images/casual_man_in_white__61922d15.jpg";
import catFormal from "../attached_assets/stock_images/man_in_navy_blue_bla_eac89bac.jpg";
import catParty from "../attached_assets/stock_images/stylish_woman_in_whi_e1ba904e.jpg";
import catGym from "../attached_assets/stock_images/man_in_gym_tank_top__0ed68042.jpg";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="stars opacity-70">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-black" : "text-black/10 text-[10px]"}>
        {i < Math.floor(rating) ? "●" : "○"}
      </span>
    ))}
    <span className="ml-2 text-[11px] uppercase tracking-widest text-black/40">{rating}/5</span>
  </div>
);

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  rating, 
  image, 
  discount 
}: { 
  name: string; 
  price: number; 
  originalPrice?: number; 
  rating: number; 
  image: any;
  discount?: string;
}) => (
  <Link href={`/product/1`}>
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden rounded-sm bg-[#F0EEED] p-4 transition-all duration-500">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-black/80">{name}</h3>
        <StarRating rating={rating} />
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold tracking-tighter">${price}</span>
          {originalPrice && (
            <span className="text-xs text-black/20 line-through">${originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  </Link>
);

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

const WordFlip = () => {
  const words = ["STYLE", "VIBE", "LOOK", "DREAM"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block h-[1.1em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const TestimonialCard = ({ name, comment }: { name: string; comment: string }) => (
  <div className="rounded-2xl border border-black/5 p-6 space-y-4 bg-white">
    <div className="flex gap-1 text-[#FFC633]">
      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold tracking-tight">{name}</span>
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[8px] text-white">✓</span>
    </div>
    <p className="text-[11px] leading-relaxed text-black/60 italic uppercase tracking-wider line-clamp-4">
      "{comment}"
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <main>
        {/* Hero Section */}
        <section className="bg-[#F2F0F1] pt-10 lg:pt-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
            <div className="py-12 lg:w-2/3 lg:py-24 z-10">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
                className="text-4xl font-black leading-tight sm:text-5xl lg:text-7xl font-display tracking-tight"
              >
                FIND CLOTHES<br />
                THAT MATCHES<br />
                YOUR <WordFlip />
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-8 text-[11px] uppercase tracking-[0.2em] leading-relaxed text-black/50 max-w-sm"
              >
                Meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <button className="rounded-full bg-black py-4 px-14 text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:bg-black/90 transition-all hover:px-16 active:scale-95">
                  Shop Now
                </button>
              </motion.div>
              <div className="mt-16 flex flex-wrap gap-12 lg:gap-20">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  <p className="text-xl font-black sm:text-2xl">200+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/30 mt-1">Brands</p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
                  <p className="text-xl font-black sm:text-2xl">2,000+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/30 mt-1">Products</p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                  <p className="text-xl font-black sm:text-2xl">30k+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-black/30 mt-1">Users</p>
                </motion.div>
              </div>
            </div>
            <div className="relative lg:w-1/3 self-stretch min-h-[500px] lg:min-h-0">
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                className="absolute inset-0 transition-all duration-1000"
              >
                <Image
                  src={heroImage}
                  alt="Premium Fashion"
                  fill
                  className="object-cover object-center lg:object-right"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-black lg:text-5xl font-display tracking-tight uppercase leading-tight">
                  Crafting the Future of <br /> Minimalist Fashion
                </h2>
                <div className="space-y-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] leading-relaxed text-black/50">
                    At djangoun.co, we believe that true style is found in simplicity. Our journey began with a single mission: to create a curated collection of essentials that transcend seasons and trends.
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] leading-relaxed text-black/50">
                    Each piece is a testament to our commitment to quality, featuring premium fabrics and meticulous construction. We don't just sell clothes; we provide the building blocks for a modern, sophisticated wardrobe.
                  </p>
                </div>
                <div className="pt-4">
                  <button className="rounded-full border border-black/10 px-12 py-4 text-[10px] uppercase tracking-[0.4em] font-bold text-black hover:bg-black hover:text-white transition-all">
                    Our Story
                  </button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#F0EEED]"
              >
                <Image
                  src={product5}
                  alt="About djangoun.co"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brands Banner */}
        <section id="brands" className="bg-white py-12 border-y border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-12 text-sm font-bold text-black sm:gap-24 uppercase tracking-[0.5em] opacity-80">
              <span className="font-display">VERSACE</span>
              <span className="tracking-tighter">ZARA</span>
              <span className="tracking-tight">GUCCI</span>
              <span className="font-serif italic">PRADA</span>
              <span className="font-light">Calvin Klein</span>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section id="new" className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-2xl font-black lg:text-3xl font-display tracking-tight">NEW ARRIVALS</h2>
              <Link href="/shop" className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 hover:text-black transition-colors">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              <ProductCard name="Tape Details T" price={120} rating={4.5} image={product1} />
              <ProductCard name="Skinny Fit Denim" price={240} originalPrice={260} rating={3.5} image={product2} />
              <ProductCard name="Checkered Shirt" price={180} rating={4.5} image={product3} />
              <ProductCard name="Sleeve Striped T" price={130} originalPrice={160} rating={4.5} image={product4} />
            </div>
            <div className="mt-16 flex justify-center">
              <Link href="/shop" className="rounded-full border border-black/10 px-16 py-4 text-[10px] uppercase tracking-[0.4em] font-bold text-black hover:bg-black hover:text-white transition-all">
                View All
              </Link>
            </div>
          </div>
        </section>

        <hr className="mx-auto max-w-7xl border-black/5" />

        {/* Top Selling */}
        <section id="shop" className="py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-2xl font-black lg:text-3xl font-display tracking-tight">TOP SELLING</h2>
              <Link href="/shop" className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 hover:text-black transition-colors">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              <ProductCard name="Vertical Striped" price={212} originalPrice={232} rating={5.0} image={product5} />
              <ProductCard name="Courage Graphic" price={145} rating={4.0} image={product6} />
              <ProductCard name="Bermuda Shorts" price={80} rating={3.0} image={product7} />
              <ProductCard name="Faded Skinny" price={210} rating={4.5} image={product8} />
            </div>
            <div className="mt-16 flex justify-center">
              <Link href="/shop" className="rounded-full border border-black/10 px-16 py-4 text-[10px] uppercase tracking-[0.4em] font-bold text-black hover:bg-black hover:text-white transition-all">
                View All
              </Link>
            </div>
          </div>
        </section>

        {/* Style Categories Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
          <div className="rounded-[40px] bg-[#F0F0F0] px-6 py-20 lg:px-20">
            <h2 className="mb-16 text-center text-4xl font-black lg:text-5xl font-display tracking-tight">BROWSE BY DRESS STYLE</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { name: "Casual", span: "sm:col-span-1", image: catCasual },
                { name: "Formal", span: "sm:col-span-2", image: catFormal },
                { name: "Party", span: "sm:col-span-2", image: catParty },
                { name: "Gym", span: "sm:col-span-1", image: catGym },
              ].map((style) => (
                <motion.div 
                  key={style.name}
                  whileHover={{ y: -5 }} 
                  className={cn(
                    "group relative overflow-hidden rounded-3xl bg-white aspect-[4/3] sm:aspect-auto h-[280px] cursor-pointer",
                    style.span
                  )}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-white/20" />
                  </div>
                  <span className="absolute top-8 left-8 text-2xl font-bold text-black">
                    {style.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-3xl font-black lg:text-4xl font-display tracking-tight">OUR HAPPY CUSTOMERS</h2>
              <div className="flex gap-4">
                <button className="p-2 hover:bg-black/5 rounded-full border border-black/5 transition-colors">←</button>
                <button className="p-2 hover:bg-black/5 rounded-full border border-black/5 transition-colors">→</button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <TestimonialCard name="Sarah M." comment="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." />
              <TestimonialCard name="Alex K." comment="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions." />
              <TestimonialCard name="James L." comment="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends." />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
