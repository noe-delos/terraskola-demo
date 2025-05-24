// app/students/[id]/upload/page.tsx
import { Header } from "@/components/layout/Header";
import { StudentDocumentUploadForm } from "@/components/forms/StudentDocumentUploadForm";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getStudent(id: string) {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

export default async function UploadStudentDocumentPage({ params }: PageProps) {
  // Await the params since it's now a Promise
  const { id } = await params;
  const student = await getStudent(id);

  if (!student) {
    notFound();
  }

  const studentName = `${student.last_name} ${student.first_name}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Ajouter des copies
        </h1>
        <StudentDocumentUploadForm
          studentId={student.id}
          studentName={studentName}
        />
      </main>
    </div>
  );
}
