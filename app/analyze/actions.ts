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
      id,
      first_name,
      last_name,
      student_documents(count)
    `
    )
    .eq("user_id", user.id)
    .order("last_name", { ascending: true });
  if (error) {
    console.error("Error fetching students:", error);
    return [];
  }
  return (students || []).filter(
    (student) => student.student_documents[0].count > 0
  );
}

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
    .select("*")
    .eq("user_id", user.id)
    .order("name", { ascending: true });
  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
  return courses || [];
}

/**
 * Fetch analyses for the current user. user_id is derived from SSR session.
 */
export async function getAnalyses() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;
  if (!user) return [];
  const { data: analyses, error } = await supabase
    .from("analyses")
    .select(
      `
      *,
      students(first_name, last_name),
      courses(name)
    `
    )
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Error fetching analyses:", error);
    return [];
  }
  return analyses || [];
}
