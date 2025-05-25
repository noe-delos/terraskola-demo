"use sever";

import { supabase } from "@/lib/supabase";

export async function getCourses() {
  const { data, error } = await supabase
    .from("courses")
    .select(
      `
      *,
      documents(*)
    `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching courses:", error);
    return [];
  }

  return data || [];
}
