import { SurveyAnswers } from "@/lib/types";

import { StepId, UserRole } from "@/lib/types";

import { getQuestionsForStep } from "./getQuestionsForStep";

export function canProceed(
  stepId: StepId,
  answers: SurveyAnswers,
  role: UserRole | null,
) {
  const group = getQuestionsForStep(stepId, role);

  if (!group) {
    return true;
  }

  return group.questions.every(
    (question) =>
      answers[question.id] !== undefined && answers[question.id] !== "",
  );
}
