import { scenarioConfig } from "@/config/scenarioConfig";
import OpenAI from "openai";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { ChatRequest } from "@/lib/types";

// Request to openAI
export async function POST(request: Request) {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    // receive request
    const body: ChatRequest = await request.json();
    const { scenarioId, userRole, messages, selectedAnswers } = body;

    // find and build system prompt
    const config = scenarioConfig[scenarioId];
    const promptFile = config.systemPromptFile[userRole];

    const promptPath = path.join(process.cwd(), "system_prompts", promptFile);

    const systemPrompt = await fs.readFile(promptPath, "utf8");

    // turn user selected answers into JSON
    const contextPrompt = JSON.stringify(selectedAnswers, null, 2);

    // filter messages not meant for llm
    const llmMessages = messages.filter(
      (message) =>
        message.id !== "welcome" && message.id !== "training_welcome",
    );

    // build input: system prompt + dynamic current user answers
    const input = [
      {
        role: "developer" as const,
        content: `
          ${systemPrompt},

          ### Return ONLY valid JSON. Do not use markdown code fences. Do not wrap the JSON in \`\`\`json.
          ### CURRENT CONTEXT (the answers the user selected):
              Use the following data to set fields in the output JSON if applicable.
              Specifically the given data should help fill in the fields 
              "task_success_rating", "safety_rating", and "decision" where applicable: 
          ${contextPrompt}
        `,
      },
      // input all messages except welcome
      ...llmMessages.map((message) => ({
        role: message.role as "user" | "assistant",
        content: message.content,
      })),
    ];

    // get openAI response
    const openAiResponse = await openai.responses.create({
      model: "gpt-5.4-mini-2026-03-17",
      input,
    });
    // send openAI response back to browser

    return Response.json({
      message: openAiResponse.output_text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Chat request failed",
      },
      {
        status: 500,
      },
    );
  }
}
