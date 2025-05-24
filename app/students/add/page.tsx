// app/students/add/page.tsx
import { Header } from "@/components/layout/Header";
import { AddStudentForm } from "@/components/forms/AddStudentForm";

export default function AddStudentPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Ajouter un Élève
        </h1>
        <AddStudentForm />
      </main>
    </div>
  );
}
