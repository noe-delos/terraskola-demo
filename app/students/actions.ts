"use server";

import { supabase } from "@/lib/supabase";

export async function getStudents() {
  const { data, error } = await supabase
    .from("students")
    .select(
      `
      *,
      student_documents(*),
      analyses(count)
    `
    )
    .order("last_name", { ascending: true });

  if (error) {
    console.error("Error fetching students:", error);
    return [];
  }

  console.log("&&-students data-&&", data);
  return data || [];
}
