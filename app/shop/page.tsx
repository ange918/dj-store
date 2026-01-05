"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useCart } from "@/context/CartContext";

import heroImage from "../../attached_assets/generated_images/premium_fashion_lifestyle_hero_image.png";
import product1 from "../../attached_assets/stock_images/black_premium_cotton_da61702b.jpg";
import product2 from "../../attached_assets/stock_images/premium_skinny_fit_b_c806a6ca.jpg";
import product3 from "../../attached_assets/stock_images/classic_checkered_bu_a1e0026b.jpg";
import product4 from "../../attached_assets/stock_images/orange_and_black_str_76d5db2d.jpg";
import product5 from "../../attached_assets/stock_images/professional_photo_o_9d22acf2.jpg";
import product6 from "../../attached_assets/stock_images/orange_t-shirt_with__09aee960.jpg";
import product7 from "../../attached_assets/stock_images/denim_shorts_for_men_f15ace7f.jpg";
import product8 from "../../attached_assets/stock_images/black_skinny_jeans_o_cacd5e43.jpg";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-[#FFC633] text-[10px]">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>
    ))}
    <span className="ml-1 text-black/40">{rating}/5</span>
  </div>
);

const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-6 border-b border-black/5">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em]">{title}</h3>
      <span className="text-[10px] opacity-20">^</span>
    </div>
    {children}
  </div>
);

export default function ShopPage() {
  const products = [
    { name: "Gradient Graphic T-shirt", price: 145, rating: 3.5, image: product6 },
    { name: "Polo with Tipping Details", price: 180, rating: 4.5, image: product5 },
    { name: "Black Striped T-shirt", price: 120, originalPrice: 150, rating: 5.0, image: product1 },
    { name: "Skinny Fit Jeans", price: 240, originalPrice: 260, rating: 3.5, image: product8 },
    { name: "Checkered Shirt", price: 180, rating: 4.5, image: product3 },
    { name: "Sleeve Striped T-shirt", price: 130, originalPrice: 160, rating: 4.5, image: product4 },
    { name: "Vertical Striped Shirt", price: 212, originalPrice: 232, rating: 5.0, image: product5 },
    { name: "Courage Graphic T-shirt", price: 145, rating: 4.0, image: product6 },
    { name: "Loose Fit Bermuda Shorts", price: 80, rating: 3.0, image: product7 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex gap-2 text-[10px] uppercase tracking-[0.2em] text-black/40 mb-8">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Casual</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0 border border-black/5 rounded-[20px] p-6 h-fit">
            <div className="flex justify-between items-center pb-6 border-b border-black/5">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em]">Filters</h2>
              <svg className="h-4 w-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>

            <FilterSection title="Categories">
              <ul className="space-y-3">
                {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(cat => (
                  <li key={cat} className="flex justify-between items-center text-[11px] text-black/60 uppercase tracking-widest cursor-pointer hover:text-black transition-colors">
                    {cat} <span>&gt;</span>
                  </li>
                ))}
              </ul>
            </FilterSection>

            <FilterSection title="Price">
              <div className="px-2">
                <div className="h-1 bg-black/5 rounded-full relative mb-4">
                  <div className="absolute left-1/4 right-1/4 h-full bg-black" />
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 h-3 w-3 bg-black rounded-full" />
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 h-3 w-3 bg-black rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] font-bold">
                  <span>$50</span>
                  <span>$200</span>
                </div>
              </div>
            </FilterSection>

            <FilterSection title="Colors">
              <div className="grid grid-cols-5 gap-3">
                {["#00C12B", "#F50606", "#F5DD06", "#F57906", "#06CAF5", "#063AF5", "#7D06F5", "#F506A4", "#FFFFFF", "#000000"].map((c, i) => (
                  <div key={i} className="h-6 w-6 rounded-full border border-black/10 cursor-pointer" style={{ backgroundColor: c }} />
                ))}
              </div>
            </FilterSection>

            <FilterSection title="Size">
              <div className="flex flex-wrap gap-2">
                {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"].map(s => (
                  <button key={s} className={cn(
                    "px-4 py-2 rounded-full text-[9px] font-medium uppercase tracking-widest transition-all",
                    s === "Large" ? "bg-black text-white" : "bg-[#F0F0F0] text-black/40 hover:bg-black/10"
                  )}>
                    {s}
                  </button>
                ))}
              </div>
            </FilterSection>

            <button className="w-full bg-black text-white py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mt-6 hover:bg-black/90 transition-all">
              Apply Filter
            </button>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h1 className="text-2xl font-black font-display tracking-tight uppercase">Casual</h1>
              <div className="flex items-center gap-4 text-[10px] text-black/40 tracking-widest uppercase font-medium w-full sm:w-auto justify-between sm:justify-end">
                <span>Showing 1-10 of 100 Products</span>
                <div className="flex items-center gap-2 text-black">
                  <span className="opacity-40">Sort by:</span>
                  <select className="bg-transparent border-none outline-none font-bold cursor-pointer">
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14">
              {products.map((p, i) => {
                const { addToCart } = useCart();
                const handleQuickAdd = (e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart({
                    id: `product-${p.name.toLowerCase().replace(/\s+/g, '-')}`,
                    name: p.name,
                    price: p.price,
                    quantity: 1,
                    image: p.image as any,
                    size: "Large",
                    color: "Black"
                  });
                };

                return (
                  <Link key={i} href="/product/1">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F0EEED] p-4 transition-all duration-500">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Quick Add Overlay */}
                        <div className="absolute inset-x-2 bottom-2 sm:inset-x-4 sm:bottom-4 translate-y-2 sm:translate-y-4 opacity-100 sm:opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <button 
                            onClick={handleQuickAdd}
                            className="w-full rounded-full bg-black py-2 sm:py-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-white hover:bg-black/90 active:scale-95"
                          >
                            Ajouter au panier
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 space-y-1.5">
                        <h3 className="text-[11px] font-bold tracking-widest uppercase truncate">{p.name}</h3>
                        <StarRating rating={p.rating} />
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-bold tracking-tighter">${p.price}</span>
                          {p.originalPrice && (
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-black/20 line-through">${p.originalPrice}</span>
                              <span className="text-[9px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">-{Math.round((1 - p.price/p.originalPrice)*100)}%</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="mt-16 pt-8 border-t border-black/5 flex items-center justify-between">
              <button className="flex items-center gap-2 px-4 py-2 border border-black/10 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                <span>←</span> Previous
              </button>
              <div className="hidden sm:flex items-center gap-1">
                {[1, 2, 3, "...", 8, 9, 10].map((n, i) => (
                  <button key={i} className={cn(
                    "w-9 h-9 flex items-center justify-center rounded-lg text-[10px] font-bold transition-all",
                    n === 1 ? "bg-black/5 text-black" : "text-black/40 hover:bg-black/5 hover:text-black"
                  )}>
                    {n}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-black/10 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                Next <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
