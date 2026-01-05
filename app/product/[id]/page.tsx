"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import heroImage from "../../../attached_assets/generated_images/premium_fashion_lifestyle_hero_image.png";
import { useCart } from "@/context/CartContext";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-[#FFC633] text-sm">
    {[...Array(5)].map((_, i) => <span key={i}>{i < Math.floor(rating) ? "★" : "☆"}</span>)}
    <span className="ml-2 text-black/60 font-medium">{rating}/5</span>
  </div>
);

const ReviewCard = ({ name, date, comment }: { name: string; date: string; comment: string }) => (
  <div className="rounded-2xl border border-black/5 p-5 md:p-6 space-y-3 md:space-y-4 h-full">
    <div className="flex justify-between items-start">
      <div className="flex gap-1 text-[#FFC633] text-[10px] md:text-xs">
        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
      </div>
      <button className="text-black/20 hover:text-black transition-colors">•••</button>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-bold uppercase tracking-tight">{name}</span>
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[8px] text-white">✓</span>
    </div>
    <p className="text-[11px] md:text-xs leading-relaxed text-black/60 uppercase tracking-wider">
      "{comment}"
    </p>
    <p className="text-[9px] md:text-[10px] text-black/30 font-bold uppercase tracking-widest pt-1 md:pt-2">Posted on {date}</p>
  </div>
);

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("Olive");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: "product-1",
      name: "ONE LIFE GRAPHIC T-SHIRT",
      price: 260,
      quantity: quantity,
      image: heroImage as any,
      size: selectedSize,
      color: selectedColor
    });
  };

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <main className="mx-auto max-w-7xl px-4 py-6 md:py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em] text-black/40 mb-6 md:mb-12">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="hover:text-black cursor-pointer transition-colors">Shop</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer transition-colors">Men</span>
          <span>/</span>
          <span className="text-black">T-shirts</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:items-start">
          {/* Image Gallery */}
          <div className="flex flex-col-reverse gap-4 lg:flex-row lg:h-[600px]">
            <div className="flex lg:flex-col gap-3 md:gap-4 overflow-auto pb-2 lg:pb-0 lg:w-32">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-full flex-shrink-0 overflow-hidden rounded-xl bg-[#F0EEED] cursor-pointer hover:ring-1 ring-black/20 transition-all">
                  <Image src={heroImage} alt="Thumbnail" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
            <div className="relative aspect-square w-full flex-1 overflow-hidden rounded-2xl md:rounded-3xl bg-[#F0EEED]">
              <Image src={heroImage} alt="Main product" fill className="object-cover" priority />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-display tracking-tight uppercase leading-tight">
                ONE LIFE GRAPHIC T-SHIRT
              </h1>
              <StarRating rating={4.5} />
              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-bold tracking-tighter">$260</span>
                <span className="text-2xl md:text-3xl font-bold text-black/20 line-through">$300</span>
                <span className="rounded-full bg-red-100 px-3 py-1 md:px-4 md:py-1 text-[10px] md:text-xs font-bold text-red-500 uppercase">-40%</span>
              </div>
              <p className="text-[11px] md:text-xs leading-relaxed text-black/50 uppercase tracking-widest max-w-md">
                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
              </p>
            </div>

            <hr className="border-black/5" />

            {/* Selection */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Select Colors</p>
                <div className="flex gap-3 md:gap-4">
                  {["Olive", "Navy", "Black"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "h-8 w-8 md:h-9 md:w-9 rounded-full border border-black/10 transition-all",
                        selectedColor === color ? "ring-2 ring-black ring-offset-2" : "hover:scale-110",
                        color === "Olive" ? "bg-[#4F4631]" : color === "Navy" ? "bg-[#314F4A]" : "bg-[#31344F]"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Choose Size</p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Small", "Medium", "Large", "X-Large"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "rounded-full px-5 py-2.5 md:px-7 md:py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all",
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

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-between sm:justify-center gap-8 md:gap-10 rounded-full bg-[#F0F0F0] px-6 py-3.5 md:py-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl font-bold hover:text-black/60 transition-colors">－</button>
                <span className="text-sm font-bold min-w-[24px] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-xl font-bold hover:text-black/60 transition-colors">＋</button>
              </div>
              <button 
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-black py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-black/90 transition-all active:scale-[0.98]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 md:mt-24 border-b border-black/5">
          <div className="flex justify-between items-center px-2 md:px-12">
            {["Product Details", "Rating & Reviews", "FAQs"].map((tab) => (
              <button
                key={tab}
                className={cn(
                  "pb-4 md:pb-6 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium transition-colors relative",
                  tab === "Rating & Reviews" ? "text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-black" : "text-black/40 hover:text-black"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-10 md:mt-16 space-y-8 md:space-y-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-black font-display tracking-tight uppercase">
              All Reviews <span className="text-black/40 ml-1 md:ml-2 text-sm md:text-base">(451)</span>
            </h2>
            <div className="flex items-center gap-2 md:gap-3 w-full sm:w-auto">
              <button className="p-3 bg-[#F0F0F0] rounded-full hover:bg-black/5 transition-colors"><svg className="h-4 w-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg></button>
              <button className="flex-1 sm:flex-none rounded-full bg-black px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-black/90 transition-all">Write a Review</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2">
            <ReviewCard name="Samantha D." date="August 14, 2023" comment="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." />
            <ReviewCard name="Alex M." date="August 15, 2023" comment="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this shirt definitely gets a thumbs up from me." />
            <ReviewCard name="Ethan R." date="August 16, 2023" comment="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." />
            <ReviewCard name="Olivia P." date="August 17, 2023" comment="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out." />
          </div>
          <div className="text-center pt-4 md:pt-8">
            <button className="rounded-full border border-black/10 px-10 py-3.5 md:px-14 md:py-4 text-[10px] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all">Load More Reviews</button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-32 space-y-10 md:space-y-16">
          <h2 className="text-2xl md:text-3xl font-black font-display tracking-tight text-center uppercase">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: "Polo Contrast Trims", price: 212, originalPrice: 242, rating: 4.0 },
              { name: "Gradient Graphic T", price: 145, rating: 3.5 },
              { name: "Polo Tipping Details", price: 180, rating: 4.5 },
              { name: "Black Striped T", price: 120, originalPrice: 150, rating: 5.0 },
            ].map((p) => (
              <div key={p.name} className="group cursor-pointer space-y-3 md:space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F0EEED] p-3 md:p-4">
                  <Image src={heroImage} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">{p.name}</h3>
                  <StarRating rating={p.rating} />
                  <div className="flex gap-2 md:gap-3 items-center">
                    <span className="text-sm md:text-base font-bold">${p.price}</span>
                    {p.originalPrice && <span className="text-[10px] md:text-xs text-black/20 line-through">${p.originalPrice}</span>}
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
