"use server";

import { createClient } from "@/lib/supabase/server";

/**
 * Fetch a student for the current user. user_id is derived from SSR session.
 */
export async function getStudent(id: string) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) return null;
  const { data: student, error } = await supabase
    .from("students")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();
  if (error || !student) {
    return null;
  }
  return student;
}
