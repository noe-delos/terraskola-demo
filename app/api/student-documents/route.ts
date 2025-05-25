/* eslint-disable @typescript-eslint/no-unused-vars */

// app/api/student-documents/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { createClient } from "@/lib/supabase/server";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
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

    // Parse form data
    const formData = await request.formData();
    const studentId = formData.get("studentId") as string;
    const file = formData.get("file") as File;

    // Validate inputs
    if (!studentId || !file) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check file type
    const isPdf = file.type === "application/pdf";
    const isImage =
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png";

    if (!isPdf && !isImage) {
      return NextResponse.json(
        { message: "Invalid file type. Only PDF, JPG, and PNG are supported." },
        { status: 400 }
      );
    }

    // Check if student exists
    const { data: student, error: studentError } = await supabase
      .from("students")
      .select("id")
      .eq("id", studentId)
      .single();

    if (studentError || !student) {
      console.error("Error checking student:", studentError);
      return NextResponse.json(
        { message: "Student not found" },
        { status: 404 }
      );
    }

    // Generate a unique filename
    const fileExt = file.name.split(".").pop();
    const fileName = `assignment_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 7)}.${fileExt}`;

    // Create folder path with student ID
    const folderPath = `students/${studentId}`;
    const filePath = `${folderPath}/${fileName}`;

    // Upload file to Supabase storage
    const buffer = await file.arrayBuffer();
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("documents")
      .upload(filePath, buffer, {
        contentType: file.type,
        upsert: false,
      });

    if (uploadError) {
      console.error("Error uploading file to storage:", uploadError);
      return NextResponse.json(
        { message: "Failed to upload file to storage" },
        { status: 500 }
      );
    }

    // Get the public URL for the uploaded file
    const { data: publicUrlData } = supabase.storage
      .from("documents")
      .getPublicUrl(filePath);

    const fileUrl = publicUrlData.publicUrl;

    // Extract content from the file using OpenAI
    let content = "";
    try {
      // Convert file to base64
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const base64String = buffer.toString("base64");

      // Different handling for PDFs and images
      if (isPdf) {
        // For PDFs, use the file input
        const response = await openai.responses.create({
          model: "gpt-4.1",
          input: [
            {
              role: "user",
              content: [
                {
                  type: "input_file",
                  filename: file.name,
                  file_data: `data:application/pdf;base64,${base64String}`,
                },
                {
                  type: "input_text",
                  text: "Please extract all the text content from this document. This is a student's math assignment. Maintain the structure as best as possible. If there are mathematical equations, represent them in LaTeX format.",
                },
              ],
            },
          ],
        });

        content = response.output_text || "";
      } else if (isImage) {
        // For images, use the vision capability
        const mimeType = file.type;
        const response = await openai.responses.create({
          model: "gpt-4.1",
          input: [
            {
              role: "user",
              content: [
                {
                  type: "input_text",
                  text: "Please extract all the text content from this image. This is a student's math assignment. If this contains math exercises, represent any equations in LaTeX format. Be thorough and capture all visible content.",
                },
                {
                  type: "input_image",
                  image_url: `data:${mimeType};base64,${base64String}`,
                  detail: "high",
                },
              ],
            },
          ],
        });

        content = response.output_text || "";
      }
    } catch (error) {
      console.error("Error extracting content with OpenAI:", error);
      // If content extraction fails, we'll continue with empty content
      content = "Failed to extract content";
    }

    // Store in Supabase database
    const { data, error } = await supabase
      .from("student_documents")
      .insert([
        {
          student_id: studentId,
          file_url: fileUrl,
          content,
          user_id: user.id,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting into database:", error);
      return NextResponse.json(
        { message: "Failed to store document data" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Document added successfully",
      document: data[0],
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error: String(error) },
      { status: 500 }
    );
  }
}
