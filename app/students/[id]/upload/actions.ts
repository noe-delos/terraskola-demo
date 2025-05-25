"use server";

import { supabase } from "@/lib/supabase";

export async function getStudent(id: string) {
  const { data, error } = await supabase
    .from("students")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}
