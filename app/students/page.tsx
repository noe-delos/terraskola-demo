/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */

// app/students/page.tsx
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  FileText,
  Plus,
  Trash2,
  Upload,
  Eye,
  FileCode,
  Image,
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { getStudents } from "./actions";

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Gestion des Élèves
          </h1>
          <Link href="/students/add">
            <Button className="bg-[#1C352A] hover:bg-[#152920]">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un élève
            </Button>
          </Link>
        </div>

        {students.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-xl font-medium text-gray-900">
              Aucun élève
            </h2>
            <p className="mt-2 text-gray-500">
              Commencez par ajouter des élèves pour pouvoir gérer leurs copies.
            </p>
            <Link href="/students/add" className="mt-4 inline-block">
              <Button className="bg-[#1C352A] hover:bg-[#152920]">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un élève
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {students.map((student) => (
              <div
                key={student.id}
                className="rounded-lg border bg-white shadow-sm"
              >
                <div className="border-b p-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">
                      {student.last_name} {student.first_name}
                    </h2>
                    <div className="flex space-x-2">
                      <Link href={`/students/${student.id}/upload`}>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-1 h-4 w-4" />
                          Ajouter une copie
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:bg-red-50 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    Ajouté{" "}
                    {formatDistanceToNow(new Date(student.created_at), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="mb-2 text-sm font-medium text-gray-700">
                    Documents ({student.student_documents.length})
                  </h3>

                  {student.student_documents.length === 0 ? (
                    <p className="text-sm text-gray-500">Aucun document</p>
                  ) : (
                    <div className="max-h-48 overflow-y-auto rounded-md border border-gray-200 bg-gray-50 p-2">
                      {student.student_documents.map(
                        (doc: any, index: number) => (
                          <div
                            key={doc.id}
                            className="mb-2 flex items-center justify-between text-sm"
                          >
                            <div className="flex items-center">
                              {doc.file_url?.includes(".pdf") ? (
                                <FileCode className="mr-2 h-4 w-4 text-red-500" />
                              ) : (
                                <Image className="mr-2 h-4 w-4 text-blue-500" />
                              )}
                              <span className="text-gray-700">
                                Document {index + 1}
                              </span>
                            </div>
                            <div className="flex space-x-1">
                              <a
                                href={doc.file_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-[#1C352A]"
                                title="Voir le document"
                              >
                                <Eye className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between border-t bg-gray-50 p-3">
                  <div>
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
                      {student.student_documents.length} document
                      {student.student_documents.length !== 1 ? "s" : ""}
                    </span>
                    <span className="ml-2 rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800">
                      {student.analyses[0].count} analyse
                      {student.analyses[0].count !== 1 ? "s" : ""}
                    </span>
                  </div>
                  {student.student_documents.length > 0 && (
                    <Link href="/analyze">
                      <Button
                        size="sm"
                        className="bg-[#1C352A] hover:bg-[#152920]"
                      >
                        Analyser
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
