import { scenarioConfig } from "@/config/scenarioConfig";
import OpenAI from "openai";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { ChatRequest } from "@/lib/types";

// Backend server

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    // receive request
    const body: ChatRequest = await request.json();
    const { scenarioId, userRole, messages, selectedAnswers } = body;
    // find and build system prompt
    const config = scenarioConfig[scenarioId];
    const promptFile = config.systemPromptFile[userRole];
    // routeDir: .../src/app/api/chat
    const routeDir = path.dirname(fileURLToPath(import.meta.url));
    const promptPath = path.join(
      routeDir,
      "../../../config/system_prompts",
      promptFile,
    );
    const systemPrompt = await fs.readFile(promptPath, "utf8");

    // turn user selected answers into JSON
    const contextPrompt = JSON.stringify(selectedAnswers, null, 2);

    // build input: system prompt + dynamic current user answers
    const input = [
      {
        role: "developer" as const,
        content: `
          ${systemPrompt},

          ### CURRENT CONTEXT (the answers the user selected):
              Use the following data to set fields in the output JSON if applicable.
              Specifically the given data should help fill in the fields 
              "task_success_rating", "safety_rating", and "decision" where applicable: 
          ${contextPrompt}
        `,
      },
      ...messages.map((message) => ({
        role: message.role as "user" | "assistant",
        content: message.content,
      })),
    ];

    // get openAI response
    const response = await openai.responses.create({
      model: "gpt-5.4-mini-2026-03-17", // TODO change
      input,
    });
    // send openAI response back to browser
    return Response.json({
      message: response.output_text,
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
