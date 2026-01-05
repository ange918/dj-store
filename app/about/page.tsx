"use client";

import Image from "next/image";
import { motion } from "motion/react";
import heroImage from "../../attached_assets/generated_images/premium_fashion_lifestyle_hero_image.png";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h1 className="text-4xl lg:text-6xl font-black font-display tracking-tight uppercase leading-tight">
                Le Président <br /> Djangoun
              </h1>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-black/40">Architecte de la mode futuriste</p>
              <p className="text-[11px] uppercase tracking-[0.2em] leading-relaxed text-black/60 max-w-xl">
                Djangoun Zinli Roberto, plus connu sous l’appellation Président DJ, est une figure emblématique et atypique de la scène artistique et entrepreneuriale béninoise. Styliste, artiste de performance et innovateur, il a su transformer une passion née dans l’enfance en une véritable marque de fabrique.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative aspect-square rounded-[40px] overflow-hidden bg-[#F0EEED]"
            >
              <Image src={heroImage} alt="Président Djangoun" fill className="object-cover" priority />
            </motion.div>
          </div>
        </section>

        {/* Vision & Goals Section */}
        <section className="mb-24 py-20 border-y border-black/5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h2 className="text-xl font-black font-display tracking-tight uppercase">Architecte du Futur</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed text-black/50">
                Son style est immédiatement identifiable : des créations audacieuses, avant-gardistes et souvent lumineuses. L’usage des tuyaux pour concevoir des structures futuristes est devenu sa signature visuelle.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-black font-display tracking-tight uppercase">Objectifs Visés</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed text-black/50">
                Sa vision demeure intacte : défiler à la Fashion Week aux États-Unis, habiller de grandes stars internationales et faire rayonner l'art béninois à l'échelle mondiale à travers le recyclage créatif.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-black font-display tracking-tight uppercase">Transmission</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] leading-relaxed text-black/50">
                Fondateur de l’Institut Djangoun Décor, il s'engage dans la formation aux métiers de l’événementiel, témoignant de son désir de partager son expérience avec la nouvelle génération.
              </p>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="bg-black text-white rounded-[40px] p-12 lg:p-20">
          <h2 className="text-3xl lg:text-5xl font-black font-display tracking-tight uppercase mb-12 text-center">Récompenses & Distinctions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { year: "2024", title: "Meilleur Créateur Mode Inventeur", subtitle: "Afrique de l'Ouest" },
              { year: "2024", title: "Chevalier de la Mode Recyclage", subtitle: "Distinction Honorifique" },
              { year: "2023", title: "Bénin Showbiz Awards", subtitle: "Multiple Lauréat" }
            ].map((award, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-white/10 rounded-3xl space-y-4 hover:bg-white/5 transition-colors"
              >
                <span className="text-xs font-bold tracking-[0.4em] opacity-40">{award.year}</span>
                <h3 className="text-sm font-bold uppercase tracking-widest">{award.title}</h3>
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-40">{award.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
