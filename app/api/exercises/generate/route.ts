/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";
import {
  BedrockRuntimeClient,
  ConverseCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { createClient } from "@/lib/supabase/server";
import { edhec_2001_exam, edhec_2003_exam } from "@/data/edhec";
import {
  bce_hec_essec_2020_exam,
  bce_hec_essec_2021_fourier_exam,
} from "@/data/hec";

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

    // Cap the number of exercises at 1 for performance
    const cappedNumberOfExercises = 1;
    console.log(`📝 Generating exactly 1 exercise`);

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
Tu vas générer 1 exercice de mathématiques de ${
      difficultyDescriptions[difficulty as keyof typeof difficultyDescriptions]
    } pour des étudiants préparant le concours ${
      schoolNames[school as keyof typeof schoolNames]
    }.

### MODE DE GÉNÉRATION
${modeDescriptions[mode as keyof typeof modeDescriptions]}

### ANNALES DE RÉFÉRENCE - ${schoolNames[school as keyof typeof schoolNames]}
${examContent}

### INSTRUCTIONS SPÉCIFIQUES

1. **Nombre d'exercices** : Génère exactement 1 exercice complet

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
   - Assure-toi que l'exercice est cohérent et solvable

5. **Solutions détaillées** :
   - Fournis une solution complète et détaillée pour l'exercice
   - Explique les étapes de raisonnement
   - Indique les techniques utilisées
   - Mentionne les points clés et les pièges à éviter

### FORMATAGE MARKDOWN ET LATEX STRICT
- Utilise ## pour les titres d'exercices
- Utilise ### pour les sous-parties
- Utilise **texte** pour les points importants
- Utilise *texte* pour les concepts clés
- **FORMULES MATHÉMATIQUES** : 
  - Pour les formules en ligne : $formule$
  - Pour les formules centrées : $$formule$$
  - Utilise la syntaxe LaTeX correcte : \\frac{a}{b}, \\sqrt{x}, \\int, \\sum, \\lim, etc.
  - Pour les matrices : \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}
  - Pour les systèmes : \\begin{cases} equation1 \\\\ equation2 \\end{cases}
  - Échappe les caractères spéciaux : \\{, \\}, \\_, etc.
- Sépare clairement l'exercice et sa solution
- Utilise des listes à puces pour les étapes de résolution

### STRUCTURE ATTENDUE

## Exercice 1
[Énoncé complet de l'exercice 1 avec formules LaTeX correctement formatées]

### Solution de l'exercice 1
[Solution détaillée avec explications et formules LaTeX correctement formatées]

### FORMAT DE RÉPONSE
Retourne uniquement un objet JSON avec la structure suivante :
{
  "exercises": [
    {
      "title": "Exercice 1",
      "content": "Énoncé complet au format Markdown avec LaTeX",
      "solution": "Solution détaillée au format Markdown avec LaTeX"
    }
  ],
  "metadata": {
    "school": "${school}",
    "difficulty": "${difficulty}",
    "mode": "${mode}",
    "numberOfExercises": 1
  }
}

IMPORTANT : 
- Respecte EXACTEMENT le formatage Markdown et LaTeX spécifié
- Assure-toi que toutes les formules mathématiques utilisent la syntaxe LaTeX correcte
- L'exercice doit être de qualité professionnelle, digne des concours ${
      schoolNames[school as keyof typeof schoolNames]
    }
- Vérifie que les formules LaTeX sont bien échappées et syntaxiquement correctes

Ta réponse ne doit contenir AUCUN texte en dehors de cet objet JSON.`;

    console.log(
      "📝 Prompt created, length:",
      formattedPrompt.length,
      "characters"
    );

    // Create the AWS Bedrock client
    const client = new BedrockRuntimeClient({
      region: process.env.AWS_REGION as string,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
      },
    });

    console.log("🤖 Calling Claude via AWS Bedrock with thinking mode...");

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

    // Use thinking mode with higher budget for complex exercise generation
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
      inferenceConfig: {
        maxTokens: 64000,
        temperature: 1,
      },
    });

    // Send the command and get response
    let rawResponse = "";
    try {
      console.log("📡 Sending request to AWS Bedrock...");
      const response = await client.send(command);
      console.log("✅ Received response from AWS Bedrock");

      // Extract content from response
      if (response.output?.message?.content) {
        for (const block of response.output.message.content) {
          if ("text" in block) {
            rawResponse = block.text || "";
            break;
          }
        }
      }

      console.log(`📄 Raw response length: ${rawResponse.length}`);

      // Verify we have a substantial response
      if (!rawResponse || rawResponse.trim().length < 50) {
        throw new Error("Response too short or empty");
      }

      // Extract JSON from the response
      rawResponse = extractJSON(rawResponse);

      // Verify JSON extraction was successful
      if (!rawResponse || rawResponse.trim().length === 0) {
        throw new Error("Failed to extract JSON from response");
      }
    } catch (error) {
      console.error("❌ Error in AWS Bedrock process:", error);
      return NextResponse.json(
        { message: "Failed to generate exercises", error: String(error) },
        { status: 500 }
      );
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

      // Validate the structure
      if (!exercisesData.exercises || !Array.isArray(exercisesData.exercises)) {
        throw new Error("Invalid exercises structure");
      }

      if (exercisesData.exercises.length === 0) {
        throw new Error("No exercises generated");
      }

      // Validate each exercise has required fields
      for (let i = 0; i < exercisesData.exercises.length; i++) {
        const exercise = exercisesData.exercises[i];
        if (!exercise.title || !exercise.content || !exercise.solution) {
          throw new Error(`Exercise ${i + 1} is missing required fields`);
        }
      }

      console.log("✅ Exercise data validation passed");
    } catch (e) {
      console.error("❌ Error parsing or validating JSON response:", e);
      console.error("🔍 Raw content:", rawResponse);
      return NextResponse.json(
        {
          message: "Failed to parse or validate exercises results",
          error: String(e),
        },
        { status: 500 }
      );
    }

    console.log(
      "🎉 Exercise generation completed successfully - returning complete response"
    );

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
