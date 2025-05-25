"use server";

// app/api/students/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName } = await request.json();

    // Validate inputs
    if (!firstName || !lastName) {
      return NextResponse.json(
        { message: "First name and last name are required" },
        { status: 400 }
      );
    }

    // Insert into database
    const { data, error } = await supabase
      .from("students")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting into database:", error);
      return NextResponse.json(
        { message: "Failed to add student" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Student added successfully",
      student: data[0],
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
