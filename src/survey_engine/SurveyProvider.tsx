"use client";

import { ReactNode, useEffect, useState } from "react";

import {
  AnswerValue,
  ChatMessage,
  Condition,
  ScenarioStepId,
  StepId,
  SURVEY_STEPS,
  SurveyState,
} from "@/lib/types";
import { SurveyContext } from "@/survey_engine/SurveyContext";
import { initialSurveyState } from "./initialSurveyState";
import {
  buildParticipantFlow,
  randomize,
} from "./helpers/buildParticipantFlow";
import { deriveUserRole } from "./helpers/deriveUserRole";

interface Props {
  children: ReactNode;
}

export function SurveyProvider({ children }: Props) {
  // Initialization of static state
  const [state, setState] = useState<SurveyState>(initialSurveyState);
  // TODO maybe use % 2 instead of randomize
  useEffect(() => {
    // client side
    const conditionOrder = randomize();

    setState((prev) => ({
      ...prev,
      conditionOrder,
      participantFlow: buildParticipantFlow(conditionOrder),
    }));
  }, []); // runs once at client start / mount

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

    // Special case 1: User declined consent
    if (
      state.currentStepId === SURVEY_STEPS.INTRO &&
      state.answers["dsgvo_consent"] === "reject"
    ) {
      setState((prev) => ({
        ...prev,
        currentStepId: SURVEY_STEPS.OUTRO,
      }));
    }
    // Special case 2: assign userRole after presurvey
    else if (state.currentStepId === SURVEY_STEPS.PRE_SURVEY) {
      const role = deriveUserRole(state.answers);
      setState((prev) => ({
        ...prev,
        userRole: role,
        currentStepId: nextStep,
      }));
    } // Standard case goNext()
    else {
      setState((prev) => ({
        ...prev,
        currentStepId: nextStep,
      }));
    }
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

  const setChatHistory = (
    scenarioId: ScenarioStepId,
    messages: ChatMessage[],
  ) => {
    setState((prev) => ({
      ...prev,
      chatHistory: {
        ...prev.chatHistory,
        [scenarioId]: messages,
      },
    }));
  };

  return (
    <SurveyContext.Provider
      value={{
        state,
        setAnswer,
        goNext,
        goBack,
        setChatHistory,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
