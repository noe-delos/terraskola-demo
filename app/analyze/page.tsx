// app/analyze/page.tsx
import { Header } from "@/components/layout/Header";
import { AnalysisForm } from "@/components/forms/AnalysisForm";
import { getStudents, getCourses, getAnalyses } from "./actions";
import { StudentCategoryTable } from "./student-category-table";
import { AnalysisDetails } from "./analysis-details";

export default async function AnalyzePage() {
  const students = await getStudents();
  const courses = await getCourses();
  const analyses = await getAnalyses();

  // Split analyses into two categories
  const goodStudents = analyses.filter((a) => a.main_category === "good");
  const weakStudents = analyses.filter((a) => a.main_category === "bad");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Classement des Élèves
        </h1>

        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-medium text-gray-900">
                Nouvelle analyse
              </h2>
              <AnalysisForm students={students} courses={courses} />
            </div>
          </div>

          <div className="md:col-span-3">
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
          </div>
        </div>
      </main>
    </div>
  );
}
