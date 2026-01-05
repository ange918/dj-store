"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import heroImage from "../attached_assets/generated_images/premium_fashion_lifestyle_hero_image.png";
import product1 from "../attached_assets/stock_images/black_premium_cotton_da61702b.jpg";
import product2 from "../attached_assets/stock_images/premium_skinny_fit_b_c806a6ca.jpg";
import product3 from "../attached_assets/stock_images/classic_checkered_bu_a1e0026b.jpg";
import product4 from "../attached_assets/stock_images/orange_and_black_str_76d5db2d.jpg";
import product5 from "../attached_assets/stock_images/professional_photo_o_9d22acf2.jpg";
import product6 from "../attached_assets/stock_images/orange_t-shirt_with__09aee960.jpg";
import product7 from "../attached_assets/stock_images/denim_shorts_for_men_f15ace7f.jpg";
import product8 from "../attached_assets/stock_images/black_skinny_jeans_o_cacd5e43.jpg";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "text-[#FFC633]" : "text-gray-300"}>
        ★
      </span>
    ))}
    <span className="ml-2 text-sm text-gray-500">{rating}/5</span>
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
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F0EEED] p-4">
      <Image
        src={image}
        alt={name}
        fill
        className="object-contain transition-transform group-hover:scale-105"
      />
    </div>
    <div className="mt-4 space-y-2">
      <h3 className="text-lg font-bold truncate">{name}</h3>
      <StarRating rating={rating} />
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold">${price}</span>
        {originalPrice && (
          <>
            <span className="text-2xl font-bold text-black/40 line-through">${originalPrice}</span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-500">
              {discount}
            </span>
          </>
        )}
      </div>
    </div>
  </motion.div>
);

const WordFlip = () => {
  const words = ["STYLE", "VIBE", "LOOK", "DREAM"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 lg:gap-10">
            <button className="lg:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="text-3xl font-black font-display tracking-tighter">SHOP.CO</span>
            <nav className="hidden lg:flex lg:items-center lg:gap-8 text-base font-medium">
              <a href="#" className="hover:text-black/60">Shop</a>
              <a href="#" className="hover:text-black/60">On Sale</a>
              <a href="#" className="hover:text-black/60">New Arrivals</a>
              <a href="#" className="hover:text-black/60">Brands</a>
            </nav>
          </div>
          
          <div className="flex flex-1 items-center justify-end gap-4 lg:gap-8">
            <div className="hidden w-full max-w-md lg:block">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-black/40">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full rounded-full bg-[#F0F0F0] py-3 pl-12 pr-4 outline-none placeholder:text-black/40"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-black/5 rounded-full transition-colors"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></button>
              <button className="p-2 hover:bg-black/5 rounded-full transition-colors"><svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-[#F2F0F1] pt-10 lg:pt-0 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:px-8">
            <div className="py-12 lg:w-1/2 lg:py-24 z-10">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl font-display"
              >
                FIND CLOTHES<br />THAT MATCHES<br />YOUR <WordFlip />
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-base text-black/60 sm:text-lg max-w-lg"
              >
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </motion.p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 w-full rounded-full bg-black py-4 px-12 text-lg font-medium text-white sm:w-auto hover:bg-black/80 transition-colors"
              >
                Shop Now
              </motion.button>
              <div className="mt-12 flex flex-wrap gap-8 lg:gap-12">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <p className="text-2xl font-bold sm:text-4xl">200+</p>
                  <p className="text-sm text-black/60 sm:text-base">International Brands</p>
                </motion.div>
                <div className="h-12 w-px bg-black/10 hidden sm:block"></div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <p className="text-2xl font-bold sm:text-4xl">2,000+</p>
                  <p className="text-sm text-black/60 sm:text-base">High-Quality Products</p>
                </motion.div>
                <div className="h-12 w-px bg-black/10 hidden sm:block"></div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                  <p className="text-2xl font-bold sm:text-4xl">30,000+</p>
                  <p className="text-sm text-black/60 sm:text-base">Happy Customers</p>
                </motion.div>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative h-[400px] w-full sm:h-[600px] lg:h-[700px]"
              >
                <Image
                  src={heroImage}
                  alt="Premium Fashion"
                  fill
                  className="object-cover lg:object-contain"
                  priority
                />
                {/* Decorative sparkles */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-20 right-10 text-4xl"
                >✦</motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-40 left-10 text-2xl"
                >✦</motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brands Banner */}
        <section className="bg-black py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-8 text-2xl font-bold text-white sm:gap-16 sm:text-3xl">
              <span className="tracking-widest font-display">VERSACE</span>
              <span className="tracking-tighter">ZARA</span>
              <span className="tracking-tight">GUCCI</span>
              <span className="font-serif italic">PRADA</span>
              <span className="font-light">Calvin Klein</span>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-4xl font-black lg:text-5xl font-display">NEW ARRIVALS</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              <ProductCard name="T-shirt with Tape Details" price={120} rating={4.5} image={product1} />
              <ProductCard name="Skinny Fit Jeans" price={240} originalPrice={260} rating={3.5} image={product2} discount="-20%" />
              <ProductCard name="Checkered Shirt" price={180} rating={4.5} image={product3} />
              <ProductCard name="Sleeve Striped T-shirt" price={130} originalPrice={160} rating={4.5} image={product4} discount="-30%" />
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-full border border-black/10 px-16 py-4 font-medium transition-colors hover:bg-black hover:text-white">
                View All
              </button>
            </div>
          </div>
        </section>

        <hr className="mx-auto max-w-7xl border-black/10" />

        {/* Top Selling */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-4xl font-black lg:text-5xl font-display">TOP SELLING</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              <ProductCard name="Vertical Striped Shirt" price={212} originalPrice={232} rating={5.0} image={product5} discount="-20%" />
              <ProductCard name="Courage Graphic T-shirt" price={145} rating={4.0} image={product6} />
              <ProductCard name="Loose Fit Bermuda Shorts" price={80} rating={3.0} image={product7} />
              <ProductCard name="Faded Skinny Jeans" price={210} rating={4.5} image={product8} />
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-full border border-black/10 px-16 py-4 font-medium transition-colors hover:bg-black hover:text-white">
                View All
              </button>
            </div>
          </div>
        </section>

        {/* Style Categories Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="rounded-[40px] bg-[#F0F0F0] px-6 py-16 lg:px-16">
            <h2 className="mb-12 text-center text-4xl font-black lg:text-5xl font-display">BROWSE BY DRESS STYLE</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-2xl bg-white p-6 sm:col-span-1 cursor-pointer">
                <span className="text-2xl font-bold">Casual</span>
                <div className="h-64 mt-4 bg-zinc-100 rounded-xl"></div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-2xl bg-white p-6 sm:col-span-2 cursor-pointer">
                <span className="text-2xl font-bold">Formal</span>
                <div className="h-64 mt-4 bg-zinc-100 rounded-xl"></div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-2xl bg-white p-6 sm:col-span-2 cursor-pointer">
                <span className="text-2xl font-bold">Party</span>
                <div className="h-64 mt-4 bg-zinc-100 rounded-xl"></div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-2xl bg-white p-6 sm:col-span-1 cursor-pointer">
                <span className="text-2xl font-bold">Gym</span>
                <div className="h-64 mt-4 bg-zinc-100 rounded-xl"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Placeholder */}
      <footer className="bg-[#F0F0F0] pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-black/60">
          <p>© 2026 SHOP.CO. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
