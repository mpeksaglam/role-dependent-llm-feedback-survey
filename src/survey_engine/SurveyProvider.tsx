"use client";

import { ReactNode, useState } from "react";

import { AnswerValue, StepType } from "@/lib/types";
import { SurveyContext } from "@/survey_engine/SurveyContext";
import { initialSurveyState } from "./initialSurveyState";

interface Props {
  children: ReactNode;
}

export function SurveyProvider({ children }: Props) {
  const [state, setState] = useState(initialSurveyState);

  const setAnswer = (questionId: string, value: AnswerValue) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value,
      },
    }));
  };

  const setCurrentStep = (stepId: StepType) => {
    setState((prev) => ({
      ...prev,
      currentStepId: stepId,
    }));
  };

  return (
    <SurveyContext.Provider
      value={{
        state,
        setAnswer,
        setCurrentStep,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
