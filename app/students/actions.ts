"use server";
import { createClient } from "@/lib/supabase/server";
/**
 * Fetch students for the current user. user_id is derived from SSR session.
 */
export async function getStudents() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) return [];
  const { data: students, error } = await supabase
    .from("students")
    .select(
      `
      *,
      student_documents(*),
      analyses(count)
    `
    )
    .eq("user_id", user.id)
    .order("last_name", { ascending: true });
  if (error) {
    console.error("Error fetching students:", error);
    return [];
  }
  return students || [];
}
