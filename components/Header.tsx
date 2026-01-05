"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "New Arrivals", href: "/#new" },
    { name: "Brands", href: "/#brands" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 -ml-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
          <a href="/" className="text-xl font-black font-display tracking-tighter hover:opacity-70 transition-opacity">
            djangoun.co
          </a>
          <nav className="hidden lg:flex lg:items-center lg:gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-[10px] uppercase tracking-[0.3em] font-medium text-black/40 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="SEARCH"
                className="w-48 rounded-sm bg-black/5 py-2 pl-9 pr-4 text-[9px] uppercase tracking-widest outline-none transition-all focus:w-64 focus:bg-black/10"
              />
            </div>
          </div>
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors relative">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-black/5 overflow-hidden bg-white"
          >
            <div className="px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.4em] font-medium text-black/60 hover:text-black"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
