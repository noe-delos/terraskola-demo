// components/forms/AnalysisForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, BrainCircuit } from "lucide-react";
import { toast } from "sonner";

interface Student {
  id: string;
  first_name: string;
  last_name: string;
}

interface Course {
  id: string;
  name: string;
}

interface AnalysisFormProps {
  students: Student[];
  courses: Course[];
}

export function AnalysisForm({ students, courses }: AnalysisFormProps) {
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentId || !courseId) {
      toast.error("Erreur", {
        description: "Veuillez sélectionner un élève et un cours",
      });
      return;
    }

    setIsAnalyzing(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
          courseId,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erreur lors de l'analyse");
      }

      toast.success("Succès", {
        description: "Analyse effectuée avec succès",
      });

      router.refresh();
    } catch (error) {
      console.error("Error analyzing:", error);
      toast.error("Erreur", {
        description:
          error instanceof Error ? error.message : "Une erreur est survenue",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="student">Élève</Label>
        <Select
          value={studentId}
          onValueChange={setStudentId}
          disabled={isAnalyzing || students.length === 0}
        >
          <SelectTrigger id="student" className="mt-1">
            <SelectValue placeholder="Sélectionner un élève" />
          </SelectTrigger>
          <SelectContent>
            {students.map((student) => (
              <SelectItem key={student.id} value={student.id}>
                {student.last_name} {student.first_name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {students.length === 0 && (
          <p className="mt-1 text-xs text-red-500">
            Aucun élève avec des copies disponibles
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="course">Cours</Label>
        <Select
          value={courseId}
          onValueChange={setCourseId}
          disabled={isAnalyzing || courses.length === 0}
        >
          <SelectTrigger id="course" className="mt-1">
            <SelectValue placeholder="Sélectionner un cours" />
          </SelectTrigger>
          <SelectContent>
            {courses.map((course) => (
              <SelectItem key={course.id} value={course.id}>
                {course.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {courses.length === 0 && (
          <p className="mt-1 text-xs text-red-500">Aucun cours disponible</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-[#1C352A] hover:bg-[#152920]"
        disabled={
          isAnalyzing ||
          !studentId ||
          !courseId ||
          students.length === 0 ||
          courses.length === 0
        }
      >
        {isAnalyzing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Analyse en cours...
          </>
        ) : (
          <>
            <BrainCircuit className="mr-2 h-4 w-4" />
            Analyser
          </>
        )}
      </Button>
    </form>
  );
}
