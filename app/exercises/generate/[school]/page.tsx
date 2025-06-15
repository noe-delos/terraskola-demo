/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client";

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function SchoolConfigPage() {
  const params = useParams();
  const router = useRouter();
  const school = params.school as string;

  const [step, setStep] = useState(1);
  const [config, setConfig] = useState({
    numberOfExercises: 1,
    difficulty: "medium",
    mode: "modify", // "modify" or "create"
  });

  const schoolInfoMap = {
    hec: {
      name: "HEC",
      fullName: "Banque Commune d'Épreuves - HEC Paris, ESSEC",
      color: "from-[#1C352A] to-[#2A4A3A]",
      bgColor: "bg-[#1C352A]",
      textColor: "text-[#FFEEDE]",
      icon: "twemoji:graduation-cap",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/HEC_Paris.svg/2560px-HEC_Paris.svg.png",
    },
    edhec: {
      name: "EDHEC",
      fullName: "École de Hautes Études Commerciales du Nord",
      color: "from-[#1C352A] to-[#2A4A3A]",
      bgColor: "bg-[#1C352A]",
      textColor: "text-[#FFEEDE]",
      icon: "twemoji:books",
      logo: "https://www.perlesdhistoire.fr/wp-content/uploads/2019/03/edhec@2x.png",
    },
  };

  const schoolInfo =
    schoolInfoMap[school as keyof typeof schoolInfoMap] || schoolInfoMap.hec;

  const difficulties = [
    {
      id: "easy",
      name: "Facile",
      description: "Exercices d'introduction et de base",
      icon: "twemoji:green-circle",
    },
    {
      id: "medium",
      name: "Moyen",
      description: "Exercices de niveau standard",
      icon: "twemoji:yellow-circle",
    },
    {
      id: "hard",
      name: "Difficile",
      description: "Exercices avancés et complexes",
      icon: "twemoji:red-circle",
    },
  ];

  const modes = [
    {
      id: "modify",
      name: "Modifier des exercices existants",
      description: "L'IA adapte et modifie des exercices des annales",
      icon: "fluent-emoji:wrench",
    },
    {
      id: "create",
      name: "Créer de nouveaux exercices",
      description: "L'IA crée des exercices originaux inspirés des annales",
      icon: "fluent-emoji:magic-wand",
    },
  ];

  const handleGenerate = async () => {
    // Navigate to generation page with config
    const queryParams = new URLSearchParams({
      school,
      numberOfExercises: config.numberOfExercises.toString(),
      difficulty: config.difficulty,
      mode: config.mode,
    });

    router.push(`/exercises/generate/${school}/result?${queryParams}`);
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-terraskola-gradient">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-white p-2 shadow-lg">
                <img
                  src={schoolInfo.logo}
                  alt={`${schoolInfo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-center">
                <h1 className="text-3xl font-bold text-[#1C352A] enriqueta-bold">
                  {schoolInfo.name}
                </h1>
                <p className="text-[#1C352A]/60 enriqueta-regular">
                  {schoolInfo.fullName}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="flex items-center space-x-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold enriqueta-semibold transition-all duration-300 ${
                      step >= stepNumber
                        ? `${schoolInfo.bgColor} ${schoolInfo.textColor} shadow-lg`
                        : "bg-white/80 text-[#1C352A]/60 border-2 border-[#1C352A]/20"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all duration-300 rounded-full ${
                        step > stepNumber
                          ? schoolInfo.bgColor
                          : "bg-[#1C352A]/20"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step Content */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-[#1C352A]/10 mb-8 shadow-xl"
          >
            {step === 1 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#1C352A] enriqueta-bold mb-4">
                  Nombre d'exercices
                </h2>
                <p className="text-[#1C352A]/70 enriqueta-regular mb-8">
                  Combien d'exercices souhaitez-vous générer ?
                </p>

                <div className="max-w-md mx-auto">
                  <div className="mb-6 px-4">
                    <input
                      type="range"
                      min="1"
                      max="2"
                      value={config.numberOfExercises}
                      onChange={(e) =>
                        setConfig({
                          ...config,
                          numberOfExercises: parseInt(e.target.value),
                        })
                      }
                      className="w-full h-3 bg-[#1C352A]/20 rounded-lg appearance-none cursor-pointer slider-thumb"
                      style={{
                        background: `linear-gradient(to right, #1C352A 0%, #1C352A ${
                          ((config.numberOfExercises - 1) / 1) * 100
                        }%, #e5e7eb ${
                          ((config.numberOfExercises - 1) / 1) * 100
                        }%, #e5e7eb 100%)`,
                      }}
                    />
                    <div className="flex justify-between text-xs text-[#1C352A]/50 mt-2 px-1">
                      <span>1</span>
                      <span>2</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span
                      className={`text-6xl font-bold bg-gradient-to-r ${schoolInfo.color} bg-clip-text text-transparent enriqueta-bold`}
                    >
                      {config.numberOfExercises}
                    </span>
                    <p className="text-[#1C352A]/70 enriqueta-regular mt-2">
                      exercice{config.numberOfExercises > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1C352A] enriqueta-bold mb-4 text-center">
                  Niveau de difficulté
                </h2>
                <p className="text-[#1C352A]/70 enriqueta-regular mb-8 text-center">
                  Choisissez le niveau de difficulté souhaité
                </p>

                <div className="grid gap-4 max-w-2xl mx-auto">
                  {difficulties.map((difficulty) => (
                    <div
                      key={difficulty.id}
                      onClick={() =>
                        setConfig({ ...config, difficulty: difficulty.id })
                      }
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        config.difficulty === difficulty.id
                          ? `border-[#1C352A] bg-[#FFEEDE]/50 shadow-lg`
                          : "border-[#1C352A]/20 hover:border-[#1C352A]/40 bg-white/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon icon={difficulty.icon} className="h-8 w-8" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#1C352A] enriqueta-semibold">
                            {difficulty.name}
                          </h3>
                          <p className="text-[#1C352A]/70 text-sm enriqueta-regular">
                            {difficulty.description}
                          </p>
                        </div>
                        {config.difficulty === difficulty.id && (
                          <Icon
                            icon="material-symbols:check-circle"
                            className="h-6 w-6 text-[#1C352A]"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-[#1C352A] enriqueta-bold mb-4 text-center">
                  Mode de génération
                </h2>
                <p className="text-[#1C352A]/70 enriqueta-regular mb-8 text-center">
                  Comment souhaitez-vous que l'IA génère les exercices ?
                </p>

                <div className="grid gap-4 max-w-2xl mx-auto">
                  {modes.map((mode) => (
                    <div
                      key={mode.id}
                      onClick={() => setConfig({ ...config, mode: mode.id })}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        config.mode === mode.id
                          ? `border-[#1C352A] bg-[#FFEEDE]/50 shadow-lg`
                          : "border-[#1C352A]/20 hover:border-[#1C352A]/40 bg-white/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon icon={mode.icon} className="h-8 w-8" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#1C352A] enriqueta-semibold">
                            {mode.name}
                          </h3>
                          <p className="text-[#1C352A]/70 text-sm enriqueta-regular">
                            {mode.description}
                          </p>
                        </div>
                        {config.mode === mode.id && (
                          <Icon
                            icon="material-symbols:check-circle"
                            className="h-6 w-6 text-[#1C352A]"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-between"
          >
            <Button
              onClick={prevStep}
              disabled={step === 1}
              variant="outline"
              className="enriqueta-medium border-[#1C352A]/30 text-[#1C352A] hover:bg-[#1C352A]/10 disabled:opacity-50"
            >
              <Icon
                icon="material-symbols:arrow-back"
                className="mr-2 h-4 w-4"
              />
              Précédent
            </Button>

            {step < 3 ? (
              <Button
                onClick={nextStep}
                className={`${schoolInfo.bgColor} ${schoolInfo.textColor} hover:shadow-lg enriqueta-semibold hover:scale-105 transition-all duration-300`}
              >
                Suivant
                <Icon
                  icon="material-symbols:arrow-forward"
                  className="ml-2 h-4 w-4"
                />
              </Button>
            ) : (
              <Button
                onClick={handleGenerate}
                className={`${schoolInfo.bgColor} ${schoolInfo.textColor} hover:shadow-lg enriqueta-semibold hover:scale-105 transition-all duration-300`}
              >
                <Icon icon="fluent-emoji:magic-wand" className="mr-2 h-4 w-4" />
                Générer les exercices
              </Button>
            )}
          </motion.div>
        </div>
      </main>

      {/* Custom CSS for slider */}
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1c352a;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(28, 53, 42, 0.3);
          transition: all 0.2s ease;
        }

        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(28, 53, 42, 0.4);
        }

        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #1c352a;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(28, 53, 42, 0.3);
          transition: all 0.2s ease;
        }

        .slider-thumb::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(28, 53, 42, 0.4);
        }

        .slider-thumb::-moz-range-track {
          height: 12px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
