/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// app/analyze/analysis-details.tsx
"use client";

import { Clock, BookOpen } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Icon } from "@iconify/react";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

type Analysis = {
  id: string;
  main_category: string;
  specific_category: string;
  analysis_details: string;
  created_at: string;
  students: {
    first_name: string;
    last_name: string;
  };
  courses: {
    name: string;
  };
};

interface AnalysisDetailsProps {
  analyses: Analysis[];
}

export function AnalysisDetails({ analyses }: AnalysisDetailsProps) {
  const remarkMathOptions = {
    singleDollarTextMath: false, // Désactive les dollars simples, seuls les doubles dollars fonctionnent
  };

  // Custom components for better formatting
  const components = {
    h2: ({ children, ...props }: any) => (
      <h2
        {...props}
        className="text-xl font-bold text-[#1C352A] enriqueta-bold mt-6 mb-4 first:mt-0 border-b border-[#1C352A]/20 pb-2"
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3
        {...props}
        className="text-lg font-semibold text-[#1C352A] enriqueta-semibold mt-5 mb-3"
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
    blockquote: ({ children, ...props }: any) => (
      <blockquote
        {...props}
        className="border-l-4 border-[#1C352A]/30 pl-4 my-4 italic text-[#1C352A]/70"
      >
        {children}
      </blockquote>
    ),
  };

  if (analyses.length === 0) {
    return <></>;
  }

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg font-medium text-[#1C352A] enriqueta-semibold"
      >
        Analyses détaillées
      </motion.h2>

      {analyses.map((analysis, index) => (
        <motion.div
          key={analysis.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          id={analysis.id}
          className="rounded-lg border bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-all duration-300 scroll-mt-8"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-[#1C352A] enriqueta-semibold">
                {analysis.students?.last_name} {analysis.students?.first_name}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-[#1C352A]/70 enriqueta-regular">
                <Clock className="h-4 w-4" />
                {formatDistanceToNow(new Date(analysis.created_at), {
                  addSuffix: true,
                  locale: fr,
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <Icon icon="twemoji:blue-book" className="h-4 w-4" />
                <span className="text-sm text-[#1C352A] enriqueta-regular">
                  {analysis.courses?.name}
                </span>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium enriqueta-medium
                  ${
                    analysis.main_category === "good"
                      ? "bg-green-100 text-green-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
              >
                {analysis.main_category === "good"
                  ? "Bon niveau"
                  : "À renforcer"}
              </span>

              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 enriqueta-medium">
                {analysis.specific_category}
              </span>
            </div>
          </div>

          <div className="rounded-lg bg-[#FFEEDE]/30 p-6 border border-[#1C352A]/10">
            <h4 className="mb-4 text-sm font-medium text-[#1C352A] enriqueta-medium">
              Analyse complète:
            </h4>
            <div className="max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, [remarkMath, remarkMathOptions]]}
                rehypePlugins={[rehypeKatex]}
                components={components}
              >
                {analysis.analysis_details}
              </ReactMarkdown>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
