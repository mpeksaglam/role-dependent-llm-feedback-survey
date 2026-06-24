import { scenarioConfig } from "@/config/scenarioConfig";
import OpenAI from "openai";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { ChatRequest } from "@/lib/types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const body: ChatRequest = await request.json();

    const { scenarioId, userRole, messages } = body;
    // get system prompt
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

    // build input
    const input = [
      {
        role: "developer" as const,
        content: systemPrompt,
      },
      ...messages.map((message) => ({
        role: message.role as "user" | "assistant",
        content: message.content,
      })),
    ];

    // get response
    const response = await openai.responses.create({
      model: "gpt-5.4-mini-2026-03-17", // TODO change
      input: input,
    });

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
