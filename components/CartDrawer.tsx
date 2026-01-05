"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-[101] h-full w-full max-w-md bg-white p-6 shadow-2xl"
          >
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-black/5 pb-6">
                <h2 className="text-xl font-black font-display uppercase tracking-tight">Your Cart ({cartCount})</h2>
                <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6">
                {cart.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
                    <p className="text-xs uppercase tracking-[0.2em] text-black/40">Your cart is empty</p>
                    <button 
                      onClick={onClose}
                      className="rounded-full bg-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item, index) => (
                      <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-[#F0EEED]">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col justify-between py-1">
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <h3 className="text-xs font-bold uppercase tracking-widest truncate max-w-[180px]">{item.name}</h3>
                              <button 
                                onClick={() => removeFromCart(item.id, item.size, item.color)}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                            <p className="text-[9px] uppercase tracking-widest text-black/40">
                              Size: {item.size} | Color: {item.color}
                            </p>
                            <p className="text-sm font-bold tracking-tighter">${item.price}</p>
                          </div>
                          <div className="flex items-center gap-4 rounded-full bg-[#F0F0F0] px-4 py-2 w-fit">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
                              className="text-sm font-bold"
                            >－</button>
                            <span className="text-[10px] font-bold min-w-[20px] text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                              className="text-sm font-bold"
                            >＋</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t border-black/5 pt-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">Subtotal</span>
                    <span className="text-xl font-bold tracking-tighter">${cartTotal}</span>
                  </div>
                  <button className="w-full rounded-full bg-black py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-black/90 transition-all active:scale-[0.98]">
                    Go to Checkout
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
