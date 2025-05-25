"use server";

/* eslint-disable @typescript-eslint/no-unused-vars */

// app/api/courses/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { supabase } from "@/lib/supabase";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const file = formData.get("file") as File;

    // Validate inputs
    if (!name || !file) {
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

    // Generate a unique filename
    const fileExt = file.name.split(".").pop();
    const fileName = `course_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 7)}.${fileExt}`;

    // Create folder for course if it doesn't exist
    let courseId;

    // Find existing course with same name
    const { data: existingCourses, error: fetchError } = await supabase
      .from("courses")
      .select("id")
      .eq("name", name);

    if (fetchError) {
      console.error("Error checking for existing course:", fetchError);
      return NextResponse.json(
        { message: "Failed to check for existing course" },
        { status: 500 }
      );
    }

    if (existingCourses && existingCourses.length > 0) {
      courseId = existingCourses[0].id;
    } else {
      // Create new course
      const { data: newCourse, error: insertError } = await supabase
        .from("courses")
        .insert([{ name }])
        .select();

      if (insertError) {
        console.error("Error inserting new course:", insertError);
        return NextResponse.json(
          { message: "Failed to create new course" },
          { status: 500 }
        );
      }

      courseId = newCourse[0].id;
    }

    // Create folder path with course ID
    const folderPath = `courses/${courseId}`;
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
                  text: "Please extract all the text content from this document. Maintain the structure as best as possible. If there are mathematical equations, represent them in LaTeX format.",
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
                  text: "Please extract all the text content from this image. If this is a math document, represent any equations in LaTeX format. Be thorough and capture all visible content.",
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

    // Store document in the documents table
    const { data: documentData, error: documentError } = await supabase
      .from("documents")
      .insert([
        {
          course_id: courseId,
          file_url: fileUrl,
          file_type: isPdf ? "pdf" : "image",
          content,
        },
      ])
      .select();

    if (documentError) {
      console.error("Error inserting document:", documentError);
      return NextResponse.json(
        { message: "Failed to store document data" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Document added to course successfully",
      courseId,
      documentId: documentData[0].id,
      fileUrl,
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error: String(error) },
      { status: 500 }
    );
  }
}
