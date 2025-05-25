// app/students/[id]/upload/page.tsx
import { Header } from "@/components/layout/Header";
import { StudentDocumentUploadForm } from "@/components/forms/StudentDocumentUploadForm";
import { notFound } from "next/navigation";
import { getStudent } from "./actions";
import { createClient } from "@/lib/supabase/server";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UploadStudentDocumentPage({ params }: PageProps) {
  // Await the params since it's now a Promise
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) return notFound();
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
