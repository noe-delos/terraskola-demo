/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client";

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ExercisesGeneratePage() {
  const schools = [
    {
      id: "hec",
      name: "HEC",
      fullName: "Banque Commune d'Épreuves - HEC Paris, ESSEC",
      description: "Exercices HEC/ESSEC (2019-2023)",
      icon: "twemoji:graduation-cap",
      color: "from-[#1C352A] to-[#2A4A3A]",
      bgColor: "bg-[#1C352A]",
      textColor: "text-[#FFEEDE]",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HEC_Paris.svg/2560px-HEC_Paris.svg.png",
      href: "/exercises/generate/hec",
    },
    {
      id: "edhec",
      name: "EDHEC",
      fullName: "École de Hautes Études Commerciales du Nord",
      description: "Exercices basés sur les annales EDHEC (2000-2010)",
      icon: "twemoji:books",
      color: "from-[#1C352A] to-[#2A4A3A]",
      bgColor: "bg-[#1C352A]",
      textColor: "text-[#FFEEDE]",
      logo: "https://www.perlesdhistoire.fr/wp-content/uploads/2019/03/edhec@2x.png",
      href: "/exercises/generate/edhec",
    },
  ];

  return (
    <div className="min-h-screen bg-terraskola-gradient">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-semibold enriqueta-semibold mb-6">
              <Icon icon="twemoji:sparkles" className="h-4 w-4" />
              Nouveau
              <Icon icon="twemoji:sparkles" className="h-4 w-4" />
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-[#1C352A] mb-4 enriqueta-bold">
              Génération d'exercices par IA
            </h1>

            <p className="text-[#1C352A]/70 text-lg enriqueta-regular max-w-2xl mx-auto">
              Créez des exercices personnalisés basés sur les annales des
              grandes écoles de commerce, adaptés à votre niveau et vos besoins
              pédagogiques.
            </p>
          </motion.div>

          {/* School Selection Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {schools.map((school, index) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <Link href={school.href}>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border border-[#1C352A]/10 overflow-hidden">
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${school.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      {/* Logo and School Name */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white p-2 shadow-lg">
                          <img
                            src={school.logo}
                            alt={`${school.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-[#1C352A] enriqueta-bold">
                            {school.name}
                          </h3>
                          <p className="text-[#1C352A]/60 text-sm enriqueta-regular">
                            {school.fullName}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#1C352A]/70 enriqueta-regular mb-6 leading-relaxed">
                        {school.description}
                      </p>

                      {/* Action Button */}
                      <div className="flex justify-end">
                        <Button
                          className={`${school.bgColor} ${school.textColor} hover:shadow-lg enriqueta-semibold group-hover:scale-105 transition-all duration-300`}
                        >
                          Commencer
                          <Icon
                            icon="material-symbols:arrow-forward"
                            className="ml-2 h-5 w-5"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
