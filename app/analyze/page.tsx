/* eslint-disable @typescript-eslint/no-explicit-any */

// app/analyze/page.tsx
"use client";

import { Header } from "@/components/layout/Header";
import { AnalysisForm } from "@/components/forms/AnalysisForm";
import { getStudents, getCourses, getAnalyses } from "./actions";
import { StudentCategoryTable } from "./student-category-table";
import { AnalysisDetails } from "./analysis-details";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function AnalyzePage() {
  const [user, setUser] = useState<any>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [analyses, setAnalyses] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        setUser(userData.user);
        const [studentsData, coursesData, analysesData] = await Promise.all([
          getStudents(),
          getCourses(),
          getAnalyses(),
        ]);
        setStudents(studentsData);
        setCourses(coursesData);
        setAnalyses(analysesData);
      }
    };
    fetchData();
  }, []);

  if (!user) return null;

  // Split analyses into two categories
  const goodStudents = analyses.filter((a: any) => a.main_category === "good");
  const weakStudents = analyses.filter((a: any) => a.main_category === "bad");

  return (
    <div className="min-h-screen bg-terraskola-gradient">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-2xl font-bold text-[#1C352A] enriqueta-bold flex items-center gap-2"
        >
          <Icon icon="fluent-emoji:magic-wand" className="h-6 w-6" />
          Classement des Élèves
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="rounded-lg border bg-white/80 backdrop-blur-sm p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-medium text-[#1C352A] enriqueta-semibold">
                Nouvelle analyse
              </h2>
              <AnalysisForm students={students} courses={courses} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3"
          >
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              {/* Good Students Table */}
              <StudentCategoryTable
                students={goodStudents}
                title="Bon niveau"
                type="good"
              />

              {/* Weak Students Table */}
              <StudentCategoryTable
                students={weakStudents}
                title="À renforcer"
                type="weak"
              />
            </div>

            {/* Detailed Analysis Cards */}
            <AnalysisDetails analyses={analyses} />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
