/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// app/courses/page.tsx
"use client";

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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "@iconify/react";
import { CalendarDays, Plus, Eye } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";
import { getCourses, deleteCourse } from "./actions";
import { createClient } from "@/lib/supabase/client";
import { DeleteCourseButton } from "./DeleteCourseButton";
import { useEffect, useState } from "react";

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        setUser(userData.user);
        const coursesData = await getCourses();
        setCourses(coursesData);
      }
    };
    fetchData();
  }, []);

  const isImageFile = (url: string) => {
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(url);
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-terraskola-gradient">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between"
        >
          <h1 className="text-2xl font-bold text-[#1C352A] enriqueta-bold">
            Gestion des Cours
          </h1>
          <Link href="/courses/upload">
            <Button className="bg-[#1C352A] hover:bg-[#1C352A]/90 text-[#FFEEDE] enriqueta-medium">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un cours
            </Button>
          </Link>
        </motion.div>

        {courses.length === 0 ? (
          <></>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="bg-[#FFEEDE]/50 pb-2">
                    <CardTitle className="text-[#1C352A] enriqueta-semibold flex items-center gap-2">
                      <Icon icon="twemoji:blue-book" className="h-5 w-5" />
                      {course.name}
                    </CardTitle>
                    <CardDescription className="flex items-center text-sm text-[#1C352A]/70 enriqueta-regular">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      {formatDistanceToNow(new Date(course.created_at), {
                        addSuffix: true,
                        locale: fr,
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <p className="text-sm font-medium text-[#1C352A] enriqueta-medium">
                        {course.documents.length} document(s)
                      </p>
                    </div>

                    {course.documents.length > 0 && (
                      <div className="grid grid-cols-3 gap-2">
                        {course.documents
                          .slice(0, 6)
                          .map((doc: any, docIndex: number) => (
                            <div key={docIndex} className="relative group">
                              {isImageFile(doc.file_url) ? (
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="relative cursor-pointer rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 transition-colors">
                                      <img
                                        src={doc.file_url}
                                        alt={`Document ${docIndex + 1}`}
                                        className="w-full h-16 object-cover"
                                      />
                                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Eye className="h-3 w-3 text-white" />
                                      </div>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent className="max-w-4xl">
                                    <DialogHeader>
                                      <DialogTitle className="enriqueta-semibold">
                                        Document {docIndex + 1} - {course.name}
                                      </DialogTitle>
                                    </DialogHeader>
                                    <div className="flex justify-center">
                                      <img
                                        src={doc.file_url}
                                        alt={`Document ${docIndex + 1}`}
                                        className="max-w-full max-h-[70vh] object-contain rounded-lg"
                                      />
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              ) : (
                                <a
                                  href={doc.file_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center w-full h-16 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
                                  title="Voir le document"
                                >
                                  <Icon
                                    icon={
                                      doc.file_type === "pdf"
                                        ? "vscode-icons:file-type-pdf2"
                                        : "vscode-icons:default-file"
                                    }
                                    className="h-6 w-6"
                                  />
                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Eye className="h-3 w-3 text-white" />
                                  </div>
                                </a>
                              )}
                            </div>
                          ))}
                        {course.documents.length > 6 && (
                          <div className="flex items-center justify-center w-full h-16 bg-gray-100 rounded-lg text-xs text-gray-500 enriqueta-regular">
                            +{course.documents.length - 6} autres
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between border-t bg-[#FFEEDE]/30 p-2">
                    <DeleteCourseButton courseId={course.id} />
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
