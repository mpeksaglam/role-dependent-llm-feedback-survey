import { SurveyState } from "@/lib/types";

export async function loadSession(
  participantId: string,
): Promise<SurveyState | null> {
  // send participantId to backend to search for saved data
  try {
    const response = await fetch(`/api/survey/session/${participantId}`);

    // if not found, participant is new
    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error("Failed to load survey session.");
    }

    return await response.json();
  } catch (error) {
    console.error("loadSession:", error);
    return null;
  }
}
