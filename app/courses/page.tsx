/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */

// app/courses/page.tsx
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarDays,
  FileText,
  Plus,
  Trash2,
  Image,
  FileCode,
} from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { getCourses } from "./actions";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Gestion des Cours
          </h1>
          <Link href="/courses/upload">
            <Button className="bg-[#1C352A] hover:bg-[#152920]">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un cours
            </Button>
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-12 text-center">
            <FileText className="mx-auto h-12 w-12 text-gray-400" />
            <h2 className="mt-4 text-xl font-medium text-gray-900">
              Aucun cours
            </h2>
            <p className="mt-2 text-gray-500">
              Commencez par ajouter un cours pour pouvoir analyser les copies
              des élèves.
            </p>
            <Link href="/courses/upload" className="mt-4 inline-block">
              <Button className="bg-[#1C352A] hover:bg-[#152920]">
                <Plus className="mr-2 h-4 w-4" />
                Ajouter un cours
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <CardHeader className="bg-[#1C352A]/5 pb-2">
                  <CardTitle className="text-[#1C352A]">
                    {course.name}
                  </CardTitle>
                  <CardDescription className="flex items-center text-sm text-gray-500">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {formatDistanceToNow(new Date(course.created_at), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-700">
                      {course.documents.length} document(s)
                    </p>
                  </div>
                  <div className="max-h-32 overflow-y-auto">
                    {course.documents.map((doc: any, index: number) => (
                      <div
                        key={index}
                        className="mb-2 flex items-center text-sm"
                      >
                        {doc.file_type === "pdf" ? (
                          <FileCode className="mr-2 h-4 w-4 text-red-500" />
                        ) : (
                          <Image className="mr-2 h-4 w-4 text-blue-500" />
                        )}
                        <a
                          href={doc.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="truncate text-gray-600 hover:text-[#1C352A] hover:underline"
                        >
                          Document {index + 1}
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t bg-gray-50 p-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="mr-1 h-4 w-4" />
                    Supprimer
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
