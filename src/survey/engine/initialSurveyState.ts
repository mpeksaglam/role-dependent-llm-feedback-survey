import { SURVEY_STEPS, SurveyState } from "@/lib/types";

export const initialSurveyState: SurveyState = {
  currentStepId: SURVEY_STEPS.INTRO,
  participantId: null,
  answers: {},
  userRole: null,
  conditionOrder: null,
  participantFlow: [],
  chatHistory: {},
  llmResponses: {},
  scenarioStartTimestamp: null,
};
