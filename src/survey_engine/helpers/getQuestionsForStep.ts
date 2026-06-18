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
    case SURVEY_STEPS.TRAINING_INFO:
      return null;
    case SURVEY_STEPS.TRAINING_TASK:
      return questionConfig.trainingQuestions;
    case SURVEY_STEPS.GEN_SCEN_1:
    case SURVEY_STEPS.GEN_SCEN_2:
    case SURVEY_STEPS.GEN_SCEN_3:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_1:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_2:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_3:
      if (!role) {
        throw new Error("User role not assigned but made it to scenarios");
      }
      return scenarioConfig[stepId].questions[role];
    case SURVEY_STEPS.QUESTIONNAIRES_A:
      return questionConfig.questionnairesAQuestions;
    case SURVEY_STEPS.QUESTIONNAIRES_B:
      return questionConfig.questionnairesBQuestions;
    case SURVEY_STEPS.COMPARISON_QUESTIONS:
      return questionConfig.comparisonQuestions;
    case SURVEY_STEPS.OUTRO:
      return null;
    default:
      throw new Error("Unknown survey step"); // new survey steps have to be added
  }
}
