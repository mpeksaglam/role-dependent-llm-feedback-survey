import { SURVEY_STEPS, SurveyState } from "@/lib/types";

export const initialSurveyState: SurveyState = {
  currentStepId: SURVEY_STEPS.INTRO,
  answers: {},
  userRole: undefined,
  conditionOrder: undefined,
  participantFlow: undefined,
};
