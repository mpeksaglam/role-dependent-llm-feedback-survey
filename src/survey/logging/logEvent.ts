import { LogEvent } from "@/lib/types";

interface LogPayload {
  participantId: string;
  eventType: LogEvent;
  payload?: unknown;
}

export async function logEvent({
  participantId,
  eventType,
  payload,
}: LogPayload) {
  try {
    const response = await fetch("/api/survey/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        participantId,
        eventType,
        payload,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to log event.");
    }
  } catch (error) {
    console.error("logEvent:", error);
  }
}
