// app/page.tsx
/* eslint-disable react/no-unescaped-entities */

"use client";

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      title: "Vos cours",
      description:
        "Uploadez vos supports de cours pour servir de référence à l'analyse.",
      icon: "twemoji:blue-book",
      href: "/courses",
    },
    {
      title: "Vos élèves",
      description:
        "Ajoutez des élèves et leurs copies pour préparer l'analyse.",
      icon: "noto:woman-student-medium-light-skin-tone",
      href: "/students",
    },
    {
      title: "Catégorisations",
      description: "Classez automatiquement les élèves selon leur niveau.",
      icon: "fluent-emoji:magic-wand",
      href: "/analyze",
    },
  ];

  // Generate random dots for animation
  const generateAnimatedDots = () => {
    const dots = [];
    for (let i = 0; i < 150; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2.5 + 0.5;
      const delay = Math.random() * 8;
      const duration = Math.random() * 4 + 2;

      dots.push({
        id: i,
        x: `${x}%`,
        y: `${y}%`,
        size,
        delay,
        duration,
      });
    }
    return dots;
  };

  const animatedDots = generateAnimatedDots();

  return (
    <div className="min-h-screen bg-terraskola-gradient">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Big rounded square - REDUCED SIZE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative bg-[#1C352A] rounded-3xl p-8 lg:p-12 text-center overflow-hidden min-h-[500px] flex flex-col justify-between">
              {/* Background image with very low opacity */}
              <div
                className="absolute inset-0 opacity-[0.2]"
                style={{
                  backgroundImage: `url('https://terraskola.fr/wp-content/uploads/2025/03/img_3379-scaled.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Animated dots background */}
              <div className="absolute inset-0">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {animatedDots.map((dot) => (
                    <motion.circle
                      key={dot.id}
                      cx={dot.x}
                      cy={dot.y}
                      r={dot.size / 10}
                      fill="#6d877c"
                      initial={{ opacity: 0.1 }}
                      animate={{
                        opacity: [0.1, 0.4, 0.1],
                      }}
                      transition={{
                        duration: dot.duration,
                        delay: dot.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </svg>
              </div>

              {/* Top section - "Nouveau" label centered */}
              <div className="relative z-10 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-semibold enriqueta-semibold"
                >
                  <Icon icon="twemoji:sparkles" className="h-4 w-4" />
                  Nouveau
                  <Icon icon="twemoji:sparkles" className="h-4 w-4" />
                </motion.div>
              </div>

              {/* Bottom right section - Title, description and button */}
              <div className="relative z-10 text-right">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl lg:text-[2.39rem] font-bold text-[#FFEEDE] mb-4 enriqueta-bold leading-tight"
                >
                  Génération d'exercises par IA
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-[#FFEEDE]/90 text-base mb-6 enriqueta-regular leading-relaxed"
                >
                  Générez des exercices de mathématiques personnalisés pour les
                  concours HEC et EDHEC grâce à notre IA experte, entraînée sur
                  les annales officielles des grandes écoles de commerce.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-end"
                >
                  <Button
                    className="bg-[#FFEEDE] text-[#1C352A] hover:bg-[#FFEEDE]/90 text-base px-6 py-3 enriqueta-semibold"
                    onClick={() => {
                      window.location.href = "/exercises/generate";
                    }}
                  >
                    Découvrir les nouveautés
                    <Icon
                      icon="material-symbols:arrow-forward"
                      className="ml-2 h-5 w-5"
                    />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Feature rectangles - SMALLER HEIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative bg-[#1C352A] rounded-2xl p-3 pl-5 px-3 hover:shadow-lg transition-all duration-300 group overflow-hidden"
              >
                {/* Using pattern-png.png for rectangles with very reduced opacity */}
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `url('/pattern-png.png')`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "100px 60px",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Icon
                          icon={feature.icon}
                          className="size-6 text-[#FFEEDE]"
                        />
                        <h3 className="text-3xl font-bold text-[#FFEEDE] enriqueta-bold">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-[#FFEEDE]/50 text-sm mb-2 enriqueta-regular leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link href={feature.href}>
                      <Button className="bg-[#FFEEDE] text-[#1C352A] hover:bg-[#FFEEDE]/90 enriqueta-medium group-hover:scale-105 transition-transform text-sm px-3 py-1.5 rounded-xl">
                        Accéder
                        <Icon
                          icon="material-symbols:arrow-forward"
                          className="ml-2 h-4 w-4"
                        />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
