import {
  ChatMessage,
  isScenarioStep,
  ScenarioStepId,
  SurveyAnswers,
} from "@/lib/types";

import { StepId, UserRole } from "@/lib/types";

import { scenarioConfig } from "@/config/scenarioConfig";
import { getQuestionsForStep } from "./getQuestionsForStep";

// maps the reason for not proceeding, so surveyNavigation can display correct requirement to proceed
type ProceedResult = {
  canProceed: boolean;
  message: string;
};

export function canProceed(
  stepId: StepId,
  answers: SurveyAnswers,
  userRole: UserRole | null,
  chatHistory: Partial<Record<ScenarioStepId, ChatMessage[]>>,
): ProceedResult {
  // get all questions that have to be answered on that screen
  const group = getQuestionsForStep(stepId, userRole);

  // null case, no questions existent in some screens
  if (!group) {
    return { canProceed: true, message: "" };
  }
  // check if questions still have to be answered on that screen
  const missingQuestions = group.questions.some((question) => {
    const answer = answers[question.id];
    return answer === undefined || answer === "";
  });

  // check if message still missing in chat (at least one message should be sent)
  let missingChat = false;
  // only possible in scenarios
  // Chat not possible if userRole === null
  if (userRole !== null && isScenarioStep(stepId)) {
    const config = scenarioConfig[stepId];
    let requiresChat = false;
    // watch out magic strings
    if (config.chatMode === "always") {
      requiresChat = true;
    } // chat is only required if person rejected the robot action
    else if (config.chatMode === "onReject") {
      const rejectQuestionId = config.rejectQuestionIds[userRole];
      if (rejectQuestionId) {
        requiresChat = answers[rejectQuestionId] === "action_rejected";
      }
    }
    // if chat is required and some message sent by "user", its okay to proceed
    if (requiresChat) {
      missingChat = !chatHistory[stepId]?.some(
        (message) => message.role === "user",
      );
    }
  }

  // return message logic based on what is missing
  let message = "";
  if (missingQuestions && missingChat) {
    message =
      "Bitte beantworten Sie alle Fragen und teilen Sie dem Chat-Assistenten Ihre Anpassung mit, bevor Sie fortfahren.";
  } else if (missingQuestions) {
    message = "Bitte beantworten Sie alle Fragen, bevor Sie fortfahren.";
  } else if (missingChat) {
    message =
      "Bitte teilen Sie dem Chat-Assistenten Ihre Anpassung mit, bevor Sie fortfahren.";
  }

  return {
    canProceed: !missingQuestions && !missingChat,
    message,
  };
}
