import { SurveyState } from "@/lib/types";

export async function saveSession(state: SurveyState) {
  // nothing to save yet
  if (!state.participantId) {
    throw new Error(
      "failed to allocate participantId but tried to saveSession",
    );
  }
  // send survey state to backend
  try {
    const response = await fetch("/api/survey/session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    if (!response.ok) {
      throw new Error("Failed to save survey session.");
    }
  } catch (error) {
    console.error("saveSession:", error);
  }
}
