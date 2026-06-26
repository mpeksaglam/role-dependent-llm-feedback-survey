"use client";

import { ReactNode, useEffect, useState } from "react";

import {
  AnswerValue,
  ChatMessage,
  ScenarioStepId,
  SURVEY_STEPS,
  SurveyState,
} from "@/lib/types";
import { SurveyContext } from "@/survey/engine/SurveyContext";
import {
  buildParticipantFlow,
  randomize,
} from "./helpers/buildParticipantFlow";
import { deriveUserRole } from "./helpers/deriveUserRole";
import { initialSurveyState } from "./initialSurveyState";
import { loadSession } from "../persistence/loadSession";

interface Props {
  children: ReactNode;
}

export function SurveyProvider({ children }: Props) {
  // Initialization of state
  const [state, setState] = useState<SurveyState>(initialSurveyState);

  // runs on first client mount
  useEffect(() => {
    async function initializeSurvey() {
      // Check if participantId exists
      let participantId = localStorage.getItem("participantId");
      let savedSession: SurveyState | null = null;

      // if an id exists, try retrieving previous session from server
      if (participantId) {
        savedSession = await loadSession(participantId);
      }
      // Case A: succes -> restore previous session
      if (savedSession) {
        setState(savedSession);
        return; // initialisation complete
      }

      // Case B: No ID existent OR server did not send savedSession
      // NEW USER
      if (!participantId) {
        participantId = crypto.randomUUID();
        localStorage.setItem("participantId", participantId);
      }

      // Generate new survey data
      // Randomization of conditions
      const conditionOrder = randomize();
      // Build static participant flow for the survey
      const participantFlow = buildParticipantFlow(conditionOrder);
      // Add everything to state
      setState((prev) => ({
        ...prev,
        participantId,
        conditionOrder,
        participantFlow,
      }));
    }
    initializeSurvey();
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
      const userRole = deriveUserRole(state.answers);
      setState((prev) => ({
        ...prev,
        userRole,
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
