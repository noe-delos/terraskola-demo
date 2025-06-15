/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@/lib/supabase/server";
import { edhec_2001_exam, edhec_2003_exam } from "@/data/edhec";
import {
  bce_hec_essec_2020_exam,
  bce_hec_essec_2021_fourier_exam,
} from "@/data/hec";

// Initialize Anthropic
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
  timeout: 900000,
});

// Helper function to extract JSON from text
function extractJSON(text: string): string {
  console.log("🔍 Attempting to extract JSON from text");

  // Check if response is wrapped in a code block
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (jsonMatch && jsonMatch[1]) {
    console.log("✅ Found JSON in code block");
    return jsonMatch[1].trim();
  }

  // Remove any text before or after the JSON object
  const jsonObjectMatch = text.match(/\{[\s\S]*\}/);
  if (jsonObjectMatch) {
    console.log("✅ Found JSON object in text");
    return jsonObjectMatch[0];
  }

  console.log("⚠️ No JSON pattern found, returning original text");
  return text;
}

// Helper function to call Claude with streaming
async function callClaudeWithStreaming(prompt: string): Promise<string> {
  console.log("🌊 Starting Claude streaming call");

  let accumulatedResponse = "";
  let thinkingContent = "";
  let mainContent = "";

  try {
    const stream = await anthropic.messages.create({
      model: "claude-3-7-sonnet-20250219",
      max_tokens: 64000,
      temperature: 1,
      messages: [{ role: "user", content: prompt }],
      thinking: {
        type: "enabled",
        budget_tokens: 16000,
      },
      stream: true,
    });

    console.log("📡 Claude stream created, processing chunks");

    for await (const chunk of stream as any) {
      console.log("📦 Chunk received:", chunk.type);

      if (chunk.type === "content_block_start") {
        console.log(
          `🚀 Content block started - Index: ${chunk.index}, Type: ${chunk.content_block.type}`
        );
      } else if (chunk.type === "content_block_delta") {
        console.log(
          `📝 Content block delta - Index: ${chunk.index}, Text length: ${
            chunk.delta.text?.length || 0
          }`
        );

        if (chunk.index === 0) {
          // This is the thinking content
          thinkingContent += chunk.delta.text || "";
          console.log(
            `🧠 Thinking chunk: ${chunk.delta.text?.substring(0, 100)}...`
          );
        } else if (chunk.index === 1) {
          // This is the main response content
          const deltaText = chunk.delta.text || "";
          mainContent += deltaText;
          accumulatedResponse += deltaText;
          console.log(
            `💬 Main content chunk: ${deltaText.substring(0, 100)}...`
          );
        }
      } else if (chunk.type === "content_block_stop") {
        console.log(`🛑 Content block stopped - Index: ${chunk.index}`);
      } else if (chunk.type === "message_start") {
        console.log("🎬 Message started");
      } else if (chunk.type === "message_delta") {
        console.log("📊 Message delta:", chunk.delta);
      } else if (chunk.type === "message_stop") {
        console.log("🏁 Message stopped");
      }
    }

    console.log("✅ Streaming completed");
    console.log(`🧠 Total thinking content length: ${thinkingContent.length}`);
    console.log(`💬 Total main content length: ${mainContent.length}`);

    return mainContent;
  } catch (error) {
    console.error("❌ Error during streaming:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log("🚀 Starting exercise generation...");

    // Get user from Supabase JWT
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      console.log("❌ User not authenticated");
      return NextResponse.json(
        { message: "Not authenticated" },
        { status: 401 }
      );
    }

    console.log("✅ User authenticated:", user.email);

    const { school, numberOfExercises, difficulty, mode } =
      await request.json();

    console.log("📝 Request parameters:", {
      school,
      numberOfExercises,
      difficulty,
      mode,
    });

    // Validate inputs
    if (!school || !numberOfExercises || !difficulty || !mode) {
      console.log("❌ Missing required parameters");
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Cap the number of exercises at 2 for performance
    const cappedNumberOfExercises = Math.min(numberOfExercises, 2);
    if (cappedNumberOfExercises !== numberOfExercises) {
      console.log(
        `⚠️ Number of exercises capped from ${numberOfExercises} to ${cappedNumberOfExercises}`
      );
    }

    // Get school data
    const schoolDataMap: Record<string, string[]> = {
      hec: [bce_hec_essec_2020_exam, bce_hec_essec_2021_fourier_exam],
      edhec: [edhec_2001_exam, edhec_2003_exam],
    };

    const schoolData = schoolDataMap[school];

    if (!schoolData) {
      console.log("❌ Invalid school:", school);
      return NextResponse.json({ message: "Invalid school" }, { status: 400 });
    }

    console.log(
      "📚 School data loaded for:",
      school,
      "- Number of exams:",
      schoolData.length
    );

    // Combine school exam data
    const examContent = schoolData.join("\n\n---EXAMEN SUIVANT---\n\n");
    console.log(
      "📄 Combined exam content length:",
      examContent.length,
      "characters"
    );

    const difficultyDescriptions = {
      easy: "niveau facile (concepts de base, calculs simples)",
      medium: "niveau moyen (raisonnements standards, techniques classiques)",
      hard: "niveau difficile (problèmes complexes, techniques avancées)",
    };

    const modeDescriptions = {
      modify:
        "Modifie et adapte des exercices existants des annales en changeant les valeurs numériques, les contextes ou en simplifiant/complexifiant selon le niveau demandé.",
      create:
        "Crée des exercices entièrement nouveaux en s'inspirant du style, des thèmes et des techniques des annales, mais avec des énoncés originaux.",
    };

    const schoolNames = {
      hec: "HEC/ESSEC (Banque Commune d'Épreuves)",
      edhec: "EDHEC (École de Hautes Études Commerciales du Nord)",
    };

    const formattedPrompt = `Tu es un professeur de mathématiques expert spécialisé dans la préparation aux concours des grandes écoles de commerce.

### CONTEXTE
Tu vas générer ${cappedNumberOfExercises} exercice${
      cappedNumberOfExercises > 1 ? "s" : ""
    } de mathématiques de ${
      difficultyDescriptions[difficulty as keyof typeof difficultyDescriptions]
    } pour des étudiants préparant le concours ${
      schoolNames[school as keyof typeof schoolNames]
    }.

### MODE DE GÉNÉRATION
${modeDescriptions[mode as keyof typeof modeDescriptions]}

### ANNALES DE RÉFÉRENCE - ${schoolNames[school as keyof typeof schoolNames]}
${examContent}

### INSTRUCTIONS SPÉCIFIQUES

1. **Nombre d'exercices** : Génère exactement ${cappedNumberOfExercises} exercice${
      cappedNumberOfExercises > 1 ? "s" : ""
    } complet${cappedNumberOfExercises > 1 ? "s" : ""}

2. **Niveau de difficulté** : ${
      difficultyDescriptions[difficulty as keyof typeof difficultyDescriptions]
    }

3. **Style et format** :
   - Respecte le style et la présentation des annales ${
     schoolNames[school as keyof typeof schoolNames]
   }
   - Inclus les consignes habituelles (présentation, lisibilité, etc.)
   - Utilise la même terminologie et les mêmes conventions
   - Structure similaire aux examens de référence

4. **Contenu mathématique** :
   - Couvre les thèmes typiques des annales (analyse, algèbre, probabilités, etc.)
   - Utilise des techniques et méthodes appropriées au niveau demandé
   - Assure-toi que les exercices sont cohérents et solvables

5. **Solutions détaillées** :
   - Fournis une solution complète et détaillée pour chaque exercice
   - Explique les étapes de raisonnement
   - Indique les techniques utilisées
   - Mentionne les points clés et les pièges à éviter

### FORMATAGE MARKDOWN STRICT
- Utilise ## pour les titres d'exercices
- Utilise ### pour les sous-parties
- Utilise **texte** pour les points importants
- Utilise *texte* pour les concepts clés
- Pour les formules mathématiques : EXCLUSIVEMENT $$ formule $$ (doubles dollars)
- Sépare clairement les exercices et leurs solutions
- Utilise des listes à puces pour les étapes de résolution

### STRUCTURE ATTENDUE

## Exercice 1
[Énoncé complet de l'exercice 1]

### Solution de l'exercice 1
[Solution détaillée avec explications]

## Exercice 2
[Énoncé complet de l'exercice 2]

### Solution de l'exercice 2
[Solution détaillée avec explications]

[Continue pour tous les exercices...]

### FORMAT DE RÉPONSE
Retourne uniquement un objet JSON avec la structure suivante :
{
  "exercises": [
    {
      "title": "Exercice 1",
      "content": "Énoncé complet au format Markdown",
      "solution": "Solution détaillée au format Markdown"
    },
    {
      "title": "Exercice 2", 
      "content": "Énoncé complet au format Markdown",
      "solution": "Solution détaillée au format Markdown"
    }
  ],
  "metadata": {
    "school": "${school}",
    "difficulty": "${difficulty}",
    "mode": "${mode}",
    "numberOfExercises": ${cappedNumberOfExercises}
  }
}

IMPORTANT : Respecte EXACTEMENT le formatage Markdown spécifié et assure-toi que les exercices sont de qualité professionnelle, dignes des concours ${
      schoolNames[school as keyof typeof schoolNames]
    }.

Ta réponse ne doit contenir AUCUN texte en dehors de cet objet JSON.`;

    console.log(
      "📝 Prompt created, length:",
      formattedPrompt.length,
      "characters"
    );

    console.log("🤖 Sending request to Claude with streaming...");

    // Use Claude with streaming
    let rawResponse = "";
    try {
      rawResponse = await callClaudeWithStreaming(formattedPrompt);
      console.log("✅ Claude streaming completed");
      console.log(`📄 Raw response length: ${rawResponse.length}`);

      // Extract JSON from the response
      rawResponse = extractJSON(rawResponse);
    } catch (error) {
      console.error("❌ Error in Claude streaming process:", error);
      throw error;
    }

    console.log(
      "📄 Extracted content length:",
      rawResponse.length,
      "characters"
    );
    console.log(
      "🔍 First 200 characters of response:",
      rawResponse.substring(0, 200)
    );

    // Parse the JSON response
    let exercisesData;
    try {
      // Clean up the content to ensure it's valid JSON
      const jsonStr = rawResponse
        .trim()
        .replace(/```json|```/g, "")
        .trim();

      console.log("🧹 Cleaned JSON string length:", jsonStr.length);
      console.log(
        "🔍 First 200 characters of cleaned JSON:",
        jsonStr.substring(0, 200)
      );

      exercisesData = JSON.parse(jsonStr);
      console.log("✅ Successfully parsed JSON");
      console.log(
        "📊 Number of exercises generated:",
        exercisesData.exercises?.length || 0
      );
    } catch (e) {
      console.error("❌ Error parsing JSON response:", e);
      console.error("🔍 Raw content:", rawResponse);
      return NextResponse.json(
        { message: "Failed to parse exercises results" },
        { status: 500 }
      );
    }

    console.log("🎉 Exercise generation completed successfully");

    return NextResponse.json({
      message: "Exercises generated successfully",
      exercises: exercisesData,
    });
  } catch (error) {
    console.error("💥 Unexpected error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred", error: String(error) },
      { status: 500 }
    );
  }
}
