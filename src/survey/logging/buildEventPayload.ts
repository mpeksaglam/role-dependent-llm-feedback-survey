import { LogEvent, SurveyState } from "@/lib/types";

import { getQuestionsForStep } from "../engine/helpers/getQuestionsForStep";

interface BuildPayloadParams {
  eventType: LogEvent;
  state: SurveyState;
  durationSeconds?: number;
}

// Builds the payload based on which event is to be logged
export function buildEventPayload({
  eventType,
  state,
  durationSeconds,
}: BuildPayloadParams) {
  switch (eventType) {
    case "survey_started":
      return {
        participantId: state.participantId,
        conditionOrder: state.conditionOrder,
      };
    // only log that event happened, no payload
    case "session_restored":
    case "consent_accepted":
    case "consent_rejected":
    case "training_completed":
      return {};

    case "pre_survey_completed":
    case "scenario_completed":
    case "questionnaire_completed":
    case "comparison_questions_completed": {
      const group = getQuestionsForStep(state.currentStepId, state.userRole);

      const answers =
        group === null
          ? {}
          : Object.fromEntries(
              group.questions.map((question) => [
                question.id,
                state.answers[question.id],
              ]),
            );

      return {
        answers,
        ...(eventType === "pre_survey_completed" && {
          userRole: state.userRole,
        }), // TODO look at this, why ... and correct this way?
        ...(durationSeconds !== undefined && {
          durationSeconds,
        }),
      };
    }

    case "survey_completed":
      return {};

    default:
      return {};
  }
}
