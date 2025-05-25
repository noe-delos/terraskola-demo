"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

// app/api/analyze/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { studentId, courseId } = await request.json();

    // Validate inputs
    if (!studentId || !courseId) {
      return NextResponse.json(
        { message: "Student ID and Course ID are required" },
        { status: 400 }
      );
    }

    // Get course documents
    const { data: courseDocuments, error: courseError } = await supabase
      .from("documents")
      .select("*")
      .eq("course_id", courseId);

    if (courseError || !courseDocuments || courseDocuments.length === 0) {
      console.error("Error fetching course documents:", courseError);
      return NextResponse.json(
        { message: "Failed to fetch course documents or no documents found" },
        { status: 500 }
      );
    }

    // Combine course document content
    const courseContent = courseDocuments
      .map((doc) => doc.content)
      .join("\n\n---\n\n");

    // Get student documents
    const { data: studentDocs, error: docsError } = await supabase
      .from("student_documents")
      .select("*")
      .eq("student_id", studentId);

    if (docsError || !studentDocs || studentDocs.length === 0) {
      console.error("Error fetching student documents:", docsError);
      return NextResponse.json(
        { message: "Failed to fetch student documents or no documents found" },
        { status: 500 }
      );
    }

    // Get student info
    const { data: student, error: studentError } = await supabase
      .from("students")
      .select("*")
      .eq("id", studentId)
      .single();

    if (studentError || !student) {
      console.error("Error fetching student:", studentError);
      return NextResponse.json(
        { message: "Failed to fetch student" },
        { status: 500 }
      );
    }

    // Get course info
    const { data: course, error: courseInfoError } = await supabase
      .from("courses")
      .select("name")
      .eq("id", courseId)
      .single();

    if (courseInfoError || !course) {
      console.error("Error fetching course info:", courseInfoError);
      return NextResponse.json(
        { message: "Failed to fetch course information" },
        { status: 500 }
      );
    }

    // Create the client for AWS Bedrock
    const client = new BedrockRuntimeClient({
      region: process.env.AWS_REGION as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    // Format the prompt with the extracted content
    const documentContents = studentDocs
      .map((doc) => doc.content)
      .join("\n\n---\n\n");

    const formattedPrompt = `Tu es un professeur de mathématiques expérimenté qui évalue des copies d'élèves.

### CONTEXTE
Tu vas analyser les copies d'un élève en te basant sur le contenu du cours pour déterminer son niveau de compréhension.

### COURS DE RÉFÉRENCE: ${course.name}
${courseContent}

### COPIES DE L'ÉLÈVE ${student.first_name} ${student.last_name}
${documentContents}

### TÂCHE
1. Analyse en détail les copies de l'élève en te basant sur le contenu du cours.
2. Évalue la compréhension, la rigueur et la maîtrise démontrées dans les copies.
3. Classe l'élève dans l'une des deux catégories principales : "good" (bon niveau) ou "bad" (niveau à renforcer).
4. Crée également une catégorie spécifique plus précise qui décrit les forces ou les points à améliorer de l'élève.
5. Fournis une analyse détaillée qui justifie ton évaluation.

### FORMAT DE RÉPONSE
Retourne uniquement un objet JSON avec la structure suivante :
{
  "main_category": "good" ou "bad",
  "specific_category": "Une brève description spécifique (max 10 mots)",
  "analysis": "Une analyse détaillée justifiant l'évaluation"
}

Ta réponse ne doit contenir AUCUN texte en dehors de cet objet JSON.`;

    // Format the messages
    const messages = [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: formattedPrompt,
          },
        ],
      },
    ];

    // Use reasoning mode
    const reasoningConfig = {
      thinking: {
        type: "enabled",
        budget_tokens: 4000,
      },
    };

    // Create the command
    const command = new ConverseCommand({
      modelId: "eu.anthropic.claude-3-7-sonnet-20250219-v1:0",
      messages: messages as any,
      additionalModelRequestFields: reasoningConfig,
    });

    // Send the command
    const response = await client.send(command);

    // Extract content from response
    let content = "";
    if (response.output?.message?.content) {
      for (const block of response.output.message.content) {
        if ("text" in block) {
          content = block.text || "";
        }
      }
    }

    // Parse the JSON response
    let analysisData;
    try {
      // Clean up the content to ensure it's valid JSON
      const jsonStr = content
        .trim()
        .replace(/```json|```/g, "")
        .trim();
      analysisData = JSON.parse(jsonStr);
    } catch (e) {
      console.error("Error parsing JSON response:", e);
      return NextResponse.json(
        { message: "Failed to parse analysis results" },
        { status: 500 }
      );
    }

    // Store the analysis in the database
    const { data: analysisResult, error: analysisError } = await supabase
      .from("analyses")
      .insert([
        {
          student_id: studentId,
          course_id: courseId,
          main_category: analysisData.main_category,
          specific_category: analysisData.specific_category,
          analysis_details: analysisData.analysis,
        },
      ])
      .select();

    if (analysisError) {
      console.error("Error storing analysis:", analysisError);
      return NextResponse.json(
        { message: "Failed to store analysis results" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Analysis completed successfully",
      analysis: analysisResult[0],
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error: String(error) },
      { status: 500 }
    );
  }
}
