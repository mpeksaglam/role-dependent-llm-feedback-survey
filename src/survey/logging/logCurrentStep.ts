import { LogEvent, SURVEY_STEPS, SurveyState } from "@/lib/types";

import { buildEventPayload } from "./buildEventPayload";
import { logEvent } from "./logEvent";

// Logs the current survey step
// make sure to cover all steps/cases from SURVEY_STEPS here
export async function logCurrentStep(
  state: SurveyState,
  durationSeconds?: number,
) {
  if (!state.participantId) {
    throw new Error("No participant id found in logCurrentStep");
  }
  // decide which event should be logged based on current Step
  let eventType: LogEvent | null = null;

  switch (state.currentStepId) {
    case SURVEY_STEPS.INTRO:
      eventType =
        state.answers["dsgvo_consent"] === "accept"
          ? "consent_accepted"
          : "consent_rejected";
      break;

    case SURVEY_STEPS.PRE_SURVEY:
      eventType = "pre_survey_completed";
      break;

    case SURVEY_STEPS.TRAINING_FINISHED:
      eventType = "training_completed";
      break;

    case SURVEY_STEPS.GEN_SCEN_1:
    case SURVEY_STEPS.GEN_SCEN_2:
    case SURVEY_STEPS.GEN_SCEN_3:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_1:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_2:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_3:
      eventType = "scenario_completed";
      break;

    case SURVEY_STEPS.QUESTIONNAIRES_A:
    case SURVEY_STEPS.QUESTIONNAIRES_B:
      eventType = "questionnaire_completed";
      break;

    case SURVEY_STEPS.COMPARISON_QUESTIONS:
      eventType = "comparison_questions_completed";
      break;

    case SURVEY_STEPS.OUTRO:
      eventType = "survey_completed";
      break;
    // no logging happening in this case (info screens)
    case SURVEY_STEPS.TRAINING_INFO:
    case SURVEY_STEPS.TRAINING_TASK:
    case SURVEY_STEPS.CONDITION_SWITCH:
      return;
    default: {
      const exhaustiveCheck: never = state.currentStepId;
      throw new Error(`Unhandled survey step: ${exhaustiveCheck}`);
    }
  }

  // Fill with payload and send to backend
  await logEvent({
    participantId: state.participantId,
    eventType,
    payload: buildEventPayload({
      eventType,
      state,
      durationSeconds,
    }),
  });
}
