"use server";

import { supabase } from "@/lib/supabase";

export async function getStudents() {
  const { data, error } = await supabase
    .from("students")
    .select(
      `
      id,
      first_name,
      last_name,
      student_documents(count)
    `
    )
    .order("last_name", { ascending: true });

  if (error) {
    console.error("Error fetching students:", error);
    return [];
  }

  // Only return students who have documents
  return (data || []).filter(
    (student) => student.student_documents[0].count > 0
  );
}

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }

  return data || [];
}

export async function getAnalyses() {
  const { data, error } = await supabase
    .from("analyses")
    .select(
      `
      *,
      students(first_name, last_name),
      courses(name)
    `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching analyses:", error);
    return [];
  }

  return data || [];
}
