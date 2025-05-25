// app/api/students/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName } = await request.json();

    // Get user from Supabase session (SSR pattern)
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

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
          user_id: user.id,
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
