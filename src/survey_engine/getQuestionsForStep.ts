import { questionConfig } from "@/config/questionConfig";
import { scenarioConfig } from "@/config/scenarioConfig";

import { StepId, SURVEY_STEPS, UserRole, QuestionGroup } from "@/lib/types";

export function getQuestionsForStep(
  stepId: StepId,
  role: UserRole | null, // null if not yet assigned
): QuestionGroup | null {
  switch (stepId) {
    case SURVEY_STEPS.INTRO:
      return questionConfig.dsgvoConsent;

    case SURVEY_STEPS.PRE_SURVEY:
      return questionConfig.preSurveyQuestions;

    case SURVEY_STEPS.GEN_SCEN_1:
    case SURVEY_STEPS.GEN_SCEN_2:
    case SURVEY_STEPS.GEN_SCEN_3:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_1:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_2:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_3:
      if (!role) {
        return null;
      }
      return scenarioConfig[stepId].questions[role];

      // TODO add rest

    default:
      return null;
  }
}
