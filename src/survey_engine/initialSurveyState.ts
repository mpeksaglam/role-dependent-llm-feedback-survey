import { SURVEY_STEPS, SurveyState } from "@/lib/types";
import { buildParticipantFlow } from "./helpers/buildParticipantFlow";

export const initialSurveyState: SurveyState = {
  currentStepId: SURVEY_STEPS.INTRO,
  answers: {},
  userRole: null,
  conditionOrder: null,
  participantFlow: [],
  chatHistory: {},
};
