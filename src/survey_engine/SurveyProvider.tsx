"use client";

import { ReactNode, useEffect, useState } from "react";

import { AnswerValue, StepId } from "@/lib/types";
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

  const goNext = () => {
    const currentIndex = state.participantFlow.indexOf(state.currentStepId);
    const nextStep = state.participantFlow[currentIndex + 1];

    setState((prev) => ({
      ...prev,
      prevStepIds: [...prev.prevStepIds, prev.currentStepId],

      currentStepId: nextStep,
    }));
  };

  const goBack = () => {
    if (state.prevStepIds.length === 0)
      // TODO wirklich so handlen?
      return;
  };

  return (
    <SurveyContext.Provider
      value={{
        state,
        setAnswer,
        goNext,
        goBack,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
