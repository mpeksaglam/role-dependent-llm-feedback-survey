"use client";

import { ReactNode, useEffect, useState } from "react";

import { AnswerValue, Condition, StepId } from "@/lib/types";
import { SurveyContext } from "@/survey_engine/SurveyContext";
import { initialSurveyState } from "./initialSurveyState";
import { buildParticipantFlow, randomize } from "./buildParticipantFlow";

interface Props {
  children: ReactNode;
}

export function SurveyProvider({ children }: Props) {
  // Initialization with lambda function
  const [state, setState] = useState(() => {
    // Randomize order and build participantFlow
    const conditionOrder = randomize();

    return {
      ...initialSurveyState,

      conditionOrder,

      participantFlow: buildParticipantFlow(conditionOrder),
    };
  });

  // keep track of answers in current survey state
  const setAnswer = (questionId: string, value: AnswerValue) => {
    setState((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: value,
      },
    }));
  };
  // navigate to next step
  const goNext = () => {
    const currentIndex = state.participantFlow.indexOf(state.currentStepId);
    const nextStep = state.participantFlow[currentIndex + 1];

    // End reached
    if (!nextStep) {
      return;
    }

    setState((prev) => ({
      ...prev,
      currentStepId: nextStep,
    }));
  };
  // navigate to previous step
  const goBack = () => {
    const currentIndex = state.participantFlow.indexOf(state.currentStepId);
    const previousStep = state.participantFlow[currentIndex - 1];

    // No previousStep available
    if (!previousStep) {
      return;
    }

    setState((prev) => ({
      ...prev,
      currentStepId: previousStep,
    }));
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
