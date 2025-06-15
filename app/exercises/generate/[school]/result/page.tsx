/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";
import { toast } from "sonner";

interface Exercise {
  title: string;
  content: string;
  solution: string;
}

interface ExercisesData {
  exercises: Exercise[];
  metadata: {
    school: string;
    difficulty: string;
    mode: string;
    numberOfExercises: number;
  };
}

export default function ExercisesResultPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const school = params.school as string;

  const [loading, setLoading] = useState(true);
  const [exercisesData, setExercisesData] = useState<ExercisesData | null>(
    null
  );
  const [selectedExercise, setSelectedExercise] = useState(0);

  const config = {
    school,
    numberOfExercises: parseInt(searchParams.get("numberOfExercises") || "3"),
    difficulty: searchParams.get("difficulty") || "medium",
    mode: searchParams.get("mode") || "modify",
  };

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

  const remarkMathOptions = {
    singleDollarTextMath: false,
  };

  // Custom components for better formatting
  const components = {
    h2: ({ children, ...props }: any) => (
      <h2
        {...props}
        className="text-2xl font-bold text-[#1C352A] enriqueta-bold mt-8 mb-4 first:mt-0 border-b border-[#1C352A]/20 pb-2"
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3
        {...props}
        className="text-xl font-semibold text-[#1C352A] enriqueta-semibold mt-6 mb-3"
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }: any) => (
      <p
        {...props}
        className="text-[#1C352A]/80 enriqueta-regular mb-4 leading-relaxed"
      >
        {children}
      </p>
    ),
    ul: ({ children, ...props }: any) => (
      <ul
        {...props}
        className="list-disc list-inside space-y-2 mb-4 ml-4 text-[#1C352A]/80"
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol
        {...props}
        className="list-decimal list-inside space-y-2 mb-4 ml-4 text-[#1C352A]/80"
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li {...props} className="enriqueta-regular leading-relaxed mb-1">
        {children}
      </li>
    ),
    strong: ({ children, ...props }: any) => (
      <strong {...props} className="font-bold text-[#1C352A] enriqueta-bold">
        {children}
      </strong>
    ),
    em: ({ children, ...props }: any) => (
      <em {...props} className="italic text-[#1C352A] enriqueta-regular">
        {children}
      </em>
    ),
  };

  useEffect(() => {
    const generateExercises = async () => {
      try {
        toast.info("Génération des exercices en cours...", {
          description:
            "L'IA analyse les annales et crée vos exercices personnalisés. Cette opération peut prendre plusieurs minutes.",
        });

        const response = await fetch("/api/exercises/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(config),
        });

        if (!response.ok) {
          throw new Error("Failed to generate exercises");
        }

        const data = await response.json();
        setExercisesData(data.exercises);

        toast.success("Exercices générés avec succès !", {
          description: `${config.numberOfExercises} exercice${
            config.numberOfExercises > 1 ? "s" : ""
          } créé${config.numberOfExercises > 1 ? "s" : ""} pour ${
            schoolInfo.name
          }`,
        });
      } catch (error) {
        console.error("Error generating exercises:", error);
        toast.error("Erreur lors de la génération", {
          description: "Une erreur est survenue. Veuillez réessayer.",
        });
      } finally {
        setLoading(false);
      }
    };

    generateExercises();
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const SkeletonCard = ({ className = "" }: { className?: string }) => (
    <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
  );

  return (
    <div className="min-h-screen bg-terraskola-gradient">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white p-1.5 shadow-lg">
              <img
                src={schoolInfo.logo}
                alt={`${schoolInfo.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#1C352A] enriqueta-bold">
                Exercices {schoolInfo.name}
              </h1>
              <p className="text-[#1C352A]/60 enriqueta-regular">
                {config.numberOfExercises} exercice
                {config.numberOfExercises > 1 ? "s" : ""} • Niveau{" "}
                {config.difficulty} • Mode{" "}
                {config.mode === "modify" ? "modification" : "création"}
              </p>
            </div>
          </div>

          {!loading && exercisesData && (
            <Button
              onClick={handlePrint}
              className={`${schoolInfo.bgColor} ${schoolInfo.textColor} hover:shadow-lg enriqueta-semibold`}
            >
              <Icon icon="fluent-emoji:printer" className="mr-2 h-4 w-4" />
              Imprimer
            </Button>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Exercise List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#1C352A]/10 sticky top-8">
              <h2 className="text-lg font-semibold text-[#1C352A] enriqueta-semibold mb-4">
                {loading ? "Génération..." : "Exercices"}
              </h2>

              <div className="space-y-3">
                {loading
                  ? // Loading skeletons
                    Array.from({ length: config.numberOfExercises }).map(
                      (_, index) => (
                        <SkeletonCard key={index} className="h-16" />
                      )
                    )
                  : // Exercise list
                    exercisesData?.exercises.map((exercise, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedExercise(index)}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          selectedExercise === index
                            ? `${schoolInfo.bgColor} ${schoolInfo.textColor}`
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div className="font-medium enriqueta-semibold text-sm">
                          {exercise.title}
                        </div>
                        <div
                          className={`text-xs mt-1 ${
                            selectedExercise === index
                              ? "text-white/80"
                              : "text-gray-500"
                          }`}
                        >
                          Cliquez pour voir la solution
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content - Exercise Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#1C352A]/10">
              {loading ? (
                // Loading skeleton for main content
                <div className="space-y-6">
                  <SkeletonCard className="h-8 w-1/3" />
                  <SkeletonCard className="h-4 w-full" />
                  <SkeletonCard className="h-4 w-5/6" />
                  <SkeletonCard className="h-4 w-4/5" />
                  <SkeletonCard className="h-32 w-full" />
                  <SkeletonCard className="h-4 w-3/4" />
                  <SkeletonCard className="h-4 w-full" />
                  <SkeletonCard className="h-4 w-2/3" />
                </div>
              ) : exercisesData ? (
                // Exercise content
                <div className="space-y-8">
                  {/* Exercise Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Icon icon="fluent-emoji:memo" className="h-6 w-6" />
                      <h2 className="text-xl font-bold text-[#1C352A] enriqueta-bold">
                        Énoncé
                      </h2>
                    </div>
                    <div className="prose max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[
                          remarkGfm,
                          [remarkMath, remarkMathOptions],
                        ]}
                        rehypePlugins={[rehypeKatex]}
                        components={components}
                      >
                        {exercisesData.exercises[selectedExercise]?.content ||
                          ""}
                      </ReactMarkdown>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="border-t border-[#1C352A]/10 pt-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon
                        icon="fluent-emoji:light-bulb"
                        className="h-6 w-6"
                      />
                      <h2 className="text-xl font-bold text-[#1C352A] enriqueta-bold">
                        Solution détaillée
                      </h2>
                    </div>
                    <div className="bg-[#FFEEDE]/30 rounded-xl p-6 border border-[#1C352A]/10">
                      <div className="prose max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[
                            remarkGfm,
                            [remarkMath, remarkMathOptions],
                          ]}
                          rehypePlugins={[rehypeKatex]}
                          components={components}
                        >
                          {exercisesData.exercises[selectedExercise]
                            ?.solution || ""}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Error state
                <div className="text-center py-12">
                  <Icon
                    icon="fluent-emoji:warning"
                    className="h-16 w-16 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#1C352A] enriqueta-semibold mb-2">
                    Erreur de génération
                  </h3>
                  <p className="text-[#1C352A]/70 enriqueta-regular">
                    Une erreur est survenue lors de la génération des exercices.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
