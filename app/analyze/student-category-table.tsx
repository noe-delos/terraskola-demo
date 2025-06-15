// app/analyze/student-category-table.tsx
"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */

import { Check, AlertTriangle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

type Analysis = {
  id: string;
  main_category: string;
  specific_category: string;
  created_at: string;
  students: {
    first_name: string;
    last_name: string;
  };
};

interface StudentCategoryTableProps {
  students: Analysis[];
  title: string;
  type: "good" | "weak";
}

export function StudentCategoryTable({
  students,
  title,
  type,
}: StudentCategoryTableProps) {
  const handleRowClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const bgColor = type === "good" ? "bg-green-50/50" : "bg-amber-50/50";
  const badgeColor =
    type === "good"
      ? "bg-green-100 text-green-800"
      : "bg-amber-100 text-amber-800";
  const LucideIcon = type === "good" ? Check : AlertTriangle;
  const iconColor = type === "good" ? "text-green-500" : "text-amber-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className={`flex items-center gap-2 border-b ${bgColor} p-4`}>
        <LucideIcon className={`h-5 w-5 ${iconColor}`} />
        <h2 className="text-lg font-medium text-[#1C352A] enriqueta-semibold">
          {title}
        </h2>
        <span
          className={`ml-auto rounded-full ${badgeColor} px-2.5 py-1 text-xs font-medium enriqueta-medium`}
        >
          {students.length} élève{students.length !== 1 ? "s" : ""}
        </span>
      </div>

      {students.length === 0 ? (
        <></>
      ) : (
        <div className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#FFEEDE]/30 text-xs text-[#1C352A]/70">
              <tr>
                <th className="px-4 py-2 text-left enriqueta-medium">Élève</th>
                <th className="px-4 py-2 text-left enriqueta-medium">
                  Catégorie
                </th>
                <th className="px-4 py-2 text-right enriqueta-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1C352A]/10">
              {students.map((analysis, index) => (
                <motion.tr
                  key={analysis.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="cursor-pointer hover:bg-[#FFEEDE]/20 transition-colors duration-200"
                  onClick={() => handleRowClick(analysis.id)}
                >
                  <td className="px-4 py-3 text-sm font-medium text-[#1C352A] enriqueta-medium">
                    {analysis.students?.last_name}{" "}
                    {analysis.students?.first_name}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 enriqueta-medium">
                      {analysis.specific_category}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right text-xs text-[#1C352A]/60 enriqueta-regular">
                    {formatDistanceToNow(new Date(analysis.created_at), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}
