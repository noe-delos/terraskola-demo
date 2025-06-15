/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

// app/students/page.tsx
"use client";

import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Icon } from "@iconify/react";
import { Plus, Trash2, Upload, Eye, CalendarDays } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { motion } from "framer-motion";
import { getStudents } from "./actions";
import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function StudentsPage() {
  const [students, setStudents] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const supabase = createClient();
      const { data: userData } = await supabase.auth.getUser();
      if (userData.user) {
        setUser(userData.user);
        const studentsData = await getStudents();
        setStudents(studentsData);
      }
    };
    fetchData();
  }, []);

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

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
            Gestion des Élèves
          </h1>
          <Link href="/students/add">
            <Button className="bg-[#1C352A] hover:bg-[#1C352A]/90 text-[#FFEEDE] enriqueta-medium">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter un élève
            </Button>
          </Link>
        </motion.div>

        {students.length === 0 ? (
          <></>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {students.map((student, index) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg border bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="border-b p-4 bg-[#FFEEDE]/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-[#1C352A] text-[#FFEEDE] text-sm enriqueta-semibold">
                          {getInitials(student.first_name, student.last_name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className="text-lg font-medium text-[#1C352A] enriqueta-semibold">
                          {student.last_name} {student.first_name}
                        </h2>
                        <div className="flex items-center text-sm text-[#1C352A]/70 enriqueta-regular">
                          <CalendarDays className="mr-1 h-3 w-3" />
                          Ajouté{" "}
                          {formatDistanceToNow(new Date(student.created_at), {
                            addSuffix: true,
                            locale: fr,
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Link href={`/students/${student.id}/upload`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="enriqueta-medium"
                        >
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
                </div>

                <div className="p-4">
                  <h3 className="mb-3 text-sm font-medium text-[#1C352A] enriqueta-medium">
                    Documents ({student.student_documents.length})
                  </h3>

                  {student.student_documents.length === 0 ? (
                    <></>
                  ) : (
                    <div className="grid grid-cols-4 gap-2">
                      {student.student_documents.map(
                        (doc: any, docIndex: number) => (
                          <div key={doc.id} className="relative group">
                            {isImageFile(doc.file_url) ? (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <div className="relative cursor-pointer rounded-lg overflow-hidden bg-gray-100 hover:bg-gray-200 transition-colors">
                                    <img
                                      src={doc.file_url}
                                      alt={`Document ${docIndex + 1}`}
                                      className="w-20 h-20 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                      <Eye className="h-4 w-4 text-white" />
                                    </div>
                                  </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl">
                                  <DialogHeader>
                                    <DialogTitle className="enriqueta-semibold">
                                      Document {docIndex + 1} -{" "}
                                      {student.first_name} {student.last_name}
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
                                className="flex items-center justify-center w-20 h-20 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
                                title="Voir le document"
                              >
                                <Icon
                                  icon={
                                    doc.file_url?.includes(".pdf")
                                      ? "vscode-icons:file-type-pdf2"
                                      : "vscode-icons:default-file"
                                  }
                                  className="h-8 w-8"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <Eye className="h-4 w-4 text-white" />
                                </div>
                              </a>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between border-t bg-[#FFEEDE]/30 p-3">
                  <div className="flex gap-2">
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 enriqueta-medium">
                      {student.student_documents.length} document
                      {student.student_documents.length !== 1 ? "s" : ""}
                    </span>
                    <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 enriqueta-medium">
                      {student.analyses[0]?.count || 0} analyse
                      {(student.analyses[0]?.count || 0) !== 1 ? "s" : ""}
                    </span>
                  </div>
                  {student.student_documents.length > 0 && (
                    <Link href="/analyze">
                      <Button
                        size="sm"
                        className="bg-[#1C352A] hover:bg-[#1C352A]/90 text-[#FFEEDE] enriqueta-medium"
                      >
                        <Icon
                          icon="fluent-emoji:magic-wand"
                          className="mr-2 h-4 w-4"
                        />
                        Analyser
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
