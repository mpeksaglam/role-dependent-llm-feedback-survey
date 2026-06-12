import { createContext } from "react";

import {
  AnswerValue,
  StepType,
  SurveyState,
} from "@/lib/types";

export interface SurveyContextValue {
  state: SurveyState;

  setAnswer: (
    questionId: string,
    value: AnswerValue
  ) => void;

  setCurrentStep: (
    stepId: StepType
  ) => void;
}

export const SurveyContext =
  createContext<SurveyContextValue | null>(null);