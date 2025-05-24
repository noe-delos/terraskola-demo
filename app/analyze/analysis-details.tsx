/* eslint-disable react/no-unescaped-entities */

// app/analyze/analysis-details.tsx
"use client";

import { Clock, BookOpen } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

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
  if (analyses.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
        <p className="text-gray-500">Aucune analyse n'a encore été effectuée</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Analyses détaillées</h2>

      {analyses.map((analysis) => (
        <div
          id={analysis.id}
          key={analysis.id}
          className="rounded-lg border bg-white p-6 shadow-sm scroll-mt-8"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {analysis.students?.last_name} {analysis.students?.first_name}
              </h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                <Clock className="h-4 w-4" />
                {formatDistanceToNow(new Date(analysis.created_at), {
                  addSuffix: true,
                  locale: fr,
                })}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700">
                  {analysis.courses?.name}
                </span>
              </div>

              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium
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

              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                {analysis.specific_category}
              </span>
            </div>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <h4 className="mb-2 text-sm font-medium text-gray-700">
              Analyse complète:
            </h4>
            <p className="whitespace-pre-line text-sm text-gray-600">
              {analysis.analysis_details}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
