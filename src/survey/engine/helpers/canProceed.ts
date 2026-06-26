import { SurveyAnswers } from "@/lib/types";

import { StepId, UserRole } from "@/lib/types";

import { getQuestionsForStep } from "./getQuestionsForStep";

export function canProceed(
  stepId: StepId,
  answers: SurveyAnswers,
  userRole: UserRole | null,
) {
  const group = getQuestionsForStep(stepId, userRole);

  if (!group) {
    return true;
  }

  return group.questions.every(
    (question) =>
      answers[question.id] !== undefined && answers[question.id] !== "",
  );
}
