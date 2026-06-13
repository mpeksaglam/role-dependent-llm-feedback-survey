import { createContext } from "react";

import { AnswerValue, StepId, SurveyState } from "@/lib/types";

export interface SurveyContextValue {
  state: SurveyState;

  setAnswer: (questionId: string, value: AnswerValue) => void;

  goNext: () => void;

  goBack: () => void;
}

export const SurveyContext = createContext<SurveyContextValue | null>(null);
