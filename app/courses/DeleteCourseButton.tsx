/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { Trash2 } from "lucide-react";
import { deleteCourse } from "./actions";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

export function DeleteCourseButton({ courseId }: { courseId: string }) {
  const { pending } = useFormStatus();

  return (
    <form
      action={async (formData) => {
        try {
          await deleteCourse(courseId);
          toast.success("Cours supprimé");
        } catch (e: any) {
          toast.error(e.message || "Erreur lors de la suppression du cours");
        }
      }}
    >
      <input type="hidden" name="courseId" value={courseId} />
      <button
        type="submit"
        className="text-red-600 hover:bg-red-50 hover:text-red-700 flex items-center gap-2 text-sm px-2 py-1 rounded"
        disabled={pending}
      >
        <Trash2 className="mr-1 h-4 w-4" />
        Supprimer
      </button>
    </form>
  );
}
