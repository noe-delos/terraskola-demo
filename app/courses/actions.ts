"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

/**
 * Fetch courses for the current user. user_id is derived from SSR session.
 */
export async function getCourses() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) return [];
  const { data: courses, error } = await supabase
    .from("courses")
    .select(
      `
      *,
      documents(*)
    `
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
  return courses || [];
}

/**
 * Delete a course by id for the current user.
 */
export async function deleteCourse(courseId: string) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) throw new Error("Not authenticated");
  // Optionally, you may want to delete related documents, etc.
  const { error } = await supabase
    .from("courses")
    .delete()
    .eq("id", courseId)
    .eq("user_id", user.id);
  if (error) {
    throw new Error(error.message || "Failed to delete course");
  }
  revalidatePath("/courses");
}
