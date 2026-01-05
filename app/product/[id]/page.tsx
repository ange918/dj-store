"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import heroImage from "../../attached_assets/generated_images/premium_fashion_lifestyle_hero_image.png";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-[#FFC633] text-sm">
    {[...Array(5)].map((_, i) => <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>)}
    <span className="ml-2 text-black/60 font-medium">{rating}/5</span>
  </div>
);

const ReviewCard = ({ name, date, comment }: { name: string; date: string; comment: string }) => (
  <div className="rounded-2xl border border-black/5 p-6 space-y-4">
    <div className="flex justify-between items-start">
      <div className="flex gap-1 text-[#FFC633] text-xs">
        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
      </div>
      <button className="text-black/20">•••</button>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold uppercase tracking-tight">{name}</span>
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[8px] text-white">✓</span>
    </div>
    <p className="text-xs leading-relaxed text-black/60 uppercase tracking-wider">
      "{comment}"
    </p>
    <p className="text-[10px] text-black/30 font-bold uppercase tracking-widest pt-2">Posted on {date}</p>
  </div>
);

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("Olive");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex gap-2 text-[10px] uppercase tracking-[0.2em] text-black/40 mb-8">
          <Link href="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">Shop</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">Men</span>
          <span>/</span>
          <span className="text-black">T-shirts</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse gap-4 sm:flex-row">
            <div className="flex sm:flex-col gap-4 overflow-auto pb-4 sm:pb-0">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-[#F0EEED] cursor-pointer hover:ring-1 ring-black/10 transition-all">
                  <Image src={heroImage} alt="Thumbnail" fill className="object-cover grayscale" />
                </div>
              ))}
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-[#F0EEED]">
              <Image src={heroImage} alt="Main product" fill className="object-cover" priority />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-black font-display tracking-tight sm:text-4xl uppercase">
                ONE LIFE GRAPHIC T-SHIRT
              </h1>
              <StarRating rating={4.5} />
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold tracking-tighter">$260</span>
                <span className="text-3xl font-bold text-black/20 line-through">$300</span>
                <span className="rounded-full bg-red-100 px-4 py-1 text-xs font-bold text-red-500 uppercase">-40%</span>
              </div>
              <p className="text-xs leading-relaxed text-black/50 uppercase tracking-widest max-w-md">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
              </p>
            </div>

            <hr className="border-black/5" />

            {/* Selection */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Select Colors</p>
                <div className="flex gap-3">
                  {["Olive", "Navy", "Black"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "h-8 w-8 rounded-full border border-black/10 transition-all",
                        selectedColor === color ? "ring-2 ring-black ring-offset-2" : "",
                        color === "Olive" ? "bg-[#4F4631]" : color === "Navy" ? "bg-[#314F4A]" : "bg-[#31344F]"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Choose Size</p>
                <div className="flex flex-wrap gap-3">
                  {["Small", "Medium", "Large", "X-Large"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all",
                        selectedSize === size ? "bg-black text-white" : "bg-[#F0F0F0] text-black/40 hover:bg-black/5"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <hr className="border-black/5" />

            <div className="flex gap-4">
              <div className="flex items-center gap-8 rounded-full bg-[#F0F0F0] px-6 py-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-lg font-bold">－</button>
                <span className="text-sm font-bold min-w-[20px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-lg font-bold">＋</button>
              </div>
              <button className="flex-1 rounded-full bg-black py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-black/90 transition-all active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20 border-b border-black/5">
          <div className="flex justify-between items-center px-4 sm:px-12">
            {["Product Details", "Rating & Reviews", "FAQs"].map((tab) => (
              <button
                key={tab}
                className={cn(
                  "pb-6 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors",
                  tab === "Rating & Reviews" ? "border-b-2 border-black text-black" : "text-black/40 hover:text-black"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-12 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black font-display tracking-tight uppercase">
              All Reviews <span className="text-black/40 ml-2">(451)</span>
            </h2>
            <div className="flex gap-3">
              <button className="p-3 bg-[#F0F0F0] rounded-full"><svg className="h-4 w-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg></button>
              <button className="rounded-full bg-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white">Write a Review</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ReviewCard name="Samantha D." date="August 14, 2023" comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." />
            <ReviewCard name="Alex M." date="August 15, 2023" comment="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this shirt definitely gets a thumbs up from me." />
            <ReviewCard name="Ethan R." date="August 16, 2023" comment="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." />
            <ReviewCard name="Olivia P." date="August 17, 2023" comment="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out." />
          </div>
          <div className="text-center pt-8">
            <button className="rounded-full border border-black/5 px-12 py-4 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all">Load More Reviews</button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 space-y-16">
          <h2 className="text-3xl font-black font-display tracking-tight text-center uppercase">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
            {/* Using landing page cards component logic here or just a simplified version */}
            {[
              { name: "Polo Contrast Trims", price: 212, originalPrice: 242, rating: 4.0 },
              { name: "Gradient Graphic T", price: 145, rating: 3.5 },
              { name: "Polo Tipping Details", price: 180, rating: 4.5 },
              { name: "Black Striped T", price: 120, originalPrice: 150, rating: 5.0 },
            ].map((p) => (
              <div key={p.name} className="group cursor-pointer space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F0EEED] p-4">
                  <Image src={heroImage} alt={p.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-widest">{p.name}</h3>
                  <StarRating rating={p.rating} />
                  <div className="flex gap-3 items-center">
                    <span className="text-sm font-bold">${p.price}</span>
                    {p.originalPrice && <span className="text-xs text-black/20 line-through">${p.originalPrice}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
