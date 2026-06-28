import { SurveyState } from "@/lib/types";
import { logEvent } from "./logEvent";

export async function logBackNavigation(state: SurveyState) {
  if (!state.participantId) {
    throw new Error("No participantId found in logBackNavigation");
  }

  // log the step that user is leaving
  await logEvent({
    participantId: state.participantId,
    eventType: "user_navigated_back",
    payload: {
      wentBackFrom: state.currentStepId,
    },
  });
}
