import { SURVEY_STEPS, SurveyState } from "@/lib/types";
import { buildParticipantFlow } from "./buildParticipantFlow";

export const initialSurveyState: SurveyState = {
  currentStepId: SURVEY_STEPS.INTRO,
  prevStepIds: [],
  answers: {},
  userRole: null,
  conditionOrder: undefined,
  participantFlow: buildParticipantFlow(),
};
