import { createContext } from "react";

import {
  AnswerValue,
  ChatMessage,
  LlmResponse,
  ScenarioStepId,
  SurveyState,
} from "@/lib/types";

export interface SurveyContextValue {
  state: SurveyState;

  setAnswer: (questionId: string, value: AnswerValue) => void;

  goNext: () => void;

  goBack: () => void;

  setChatHistory: (ScenarioId: ScenarioStepId, messages: ChatMessage[]) => void;

  setChatData: (
    scenarioId: ScenarioStepId,
    messages: ChatMessage[],
    response: LlmResponse,
  ) => void;

  lockNavigation: () => void;
  unlockNavigation: () => void;
}

export const SurveyContext = createContext<SurveyContextValue | null>(null);
