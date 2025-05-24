/* eslint-disable react/no-unescaped-entities */

// components/forms/AddStudentForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Loader2, UserPlus } from "lucide-react";

export function AddStudentForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      //   toast({
      //     title: "Erreur",
      //     description: "Veuillez saisir le nom et prénom de l'élève",
      //     variant: "destructive",
      //   });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erreur lors de l'ajout de l'élève");
      }

      //   toast({
      //     title: "Succès",
      //     description: "L'élève a été ajouté avec succès",
      //   });

      router.push("/students");
      router.refresh();
    } catch (error) {
      console.error("Error adding student:", error);
      //   toast({
      //     title: "Erreur",
      //     description:
      //       error instanceof Error ? error.message : "Une erreur est survenue",
      //     variant: "destructive",
      //   });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Dupont"
              className="mt-1"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Jean"
              className="mt-1"
              disabled={isSubmitting}
            />
          </div>
        </div>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/students")}
          disabled={isSubmitting}
        >
          Annuler
        </Button>
        <Button
          type="submit"
          className="bg-[#1C352A] hover:bg-[#152920]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Traitement en cours...
            </>
          ) : (
            <>
              <UserPlus className="mr-2 h-4 w-4" />
              Ajouter l'élève
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
