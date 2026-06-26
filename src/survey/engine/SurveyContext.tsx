import { createContext } from "react";

import {
  AnswerValue,
  ChatMessage,
  ScenarioStepId,
  SurveyState,
} from "@/lib/types";

export interface SurveyContextValue {
  state: SurveyState;

  setAnswer: (questionId: string, value: AnswerValue) => void;

  goNext: () => void;

  goBack: () => void;

  setChatHistory: (scenarioId: ScenarioStepId, messages: ChatMessage[]) => void;
}

export const SurveyContext = createContext<SurveyContextValue | null>(null);
