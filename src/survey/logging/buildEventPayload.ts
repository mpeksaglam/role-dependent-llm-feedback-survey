import {
  isScenarioStep,
  LogEvent,
  SURVEY_STEPS,
  SurveyState,
} from "@/lib/types";

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
  // HELPERS
  // returns one object with all questions {q.id: answer,} from the respective screen
  function getAnswers() {
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
    return answers;
  }
  // returns the chat corresponding to current step
  function getChatHistory() {
    if (!isScenarioStep(state.currentStepId)) {
      return [];
    }
    return state.chatHistory[state.currentStepId] ?? [];
  }
  function getLlmResponses() {
    if (!isScenarioStep(state.currentStepId)) {
      return [];
    }
    return state.llmResponses[state.currentStepId] ?? [];
  }
  // FUNCTION CODE
  // find the appropriate payload based on event
  switch (eventType) {
    /* case survey_started and case session_restored:
       called manually in SurveyProvider and can't be called via this function
       case user_navigated_back as well called in different function
       included here for exhaustiveCheck (never) */

    // only log that event happened, no payload
    case "survey_started":
    case "session_restored":
    case "user_navigated_back":
    case "consent_accepted":
    case "consent_rejected":
    case "training_completed":
    case "survey_completed":
      return {};

    case "pre_survey_completed":
      return {
        answers: getAnswers(),
        userRole: state.userRole,
      };
    case "scenario_completed": {
      if (durationSeconds === undefined) {
        throw new Error(
          "Timer undefined for scenario completion in buildEventPayload",
        );
      }
      return {
        answers: getAnswers(),
        durationSeconds, // should not be undefined in this case
        chatHistory: getChatHistory(),
        llmResponses: getLlmResponses(),
      };
    }
    case "questionnaire_completed":
      return {
        questionnaire:
          state.currentStepId === SURVEY_STEPS.QUESTIONNAIRES_A ? "A" : "B",
        answers: getAnswers(),
      };

    case "comparison_questions_completed":
      return {
        answers: getAnswers(),
      };
    default: {
      const exhaustiveCheck: never = eventType;
      throw new Error(`Unhandled event: ${exhaustiveCheck}`);
    }
  }
}
