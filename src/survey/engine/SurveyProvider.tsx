"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import {
  AnswerValue,
  ChatMessage,
  isScenarioStep,
  LlmResponse,
  ScenarioStepId,
  SURVEY_STEPS,
  SurveyState,
} from "@/lib/types";
import { SurveyContext } from "@/survey/engine/SurveyContext";
import { logBackNavigation } from "../logging/logBackNavigation";
import { logCurrentStep } from "../logging/logCurrentStep";
import { logEvent } from "../logging/logEvent";
import { loadSession } from "../persistence/loadSession";
import { saveSession } from "../persistence/saveSession";
import { buildParticipantFlow } from "./helpers/buildParticipantFlow";
import { deriveUserRole } from "./helpers/deriveUserRole";
import { fetchConditionOrder } from "./helpers/fetchConditionOrder";
import { initialSurveyState } from "./initialSurveyState";
import { randomize } from "./helpers/randomize";

interface Props {
  children: ReactNode;
}

export function SurveyProvider({ children }: Props) {
  // Initialization of state
  const [state, setState] = useState<SurveyState>(initialSurveyState);
  const navigationLockRef = useRef(false);

  // runs on first client mount
  useEffect(() => {
    // ParticipantID
    // retrieve if existent
    let participantId = localStorage.getItem("participantId");
    // else generate new one
    if (!participantId) {
      participantId = crypto.randomUUID();

      localStorage.setItem("participantId", participantId);
    }

    // Randomization of conditions
    const conditionOrder = randomize();
    const participantFlow = buildParticipantFlow(conditionOrder);
    // Add everything to state
    setState((prev) => ({
      ...prev,
      participantId,
      conditionOrder,
      participantFlow,
      isLoading: false,
    }));
  }, []); // runs once at client start / mount

  // keep track of answers in current survey state
  const setAnswer = (questionId: string, value: AnswerValue) => {
    // no (prev) needed since no async function
    // fix nextState
    const nextState = {
      ...state,
      answers: {
        ...state.answers,
        [questionId]: value,
      },
    };
    // set nextState
    setState(nextState);
  };
  // navigate to next step
  const goNext = () => {
    // do not navigate when locked
    if (navigationLockRef.current) return;
    // get current step INDEX and next one according to participantFlow
    const currentIndex = state.participantFlow.indexOf(state.currentStepId);
    const nextStep = state.participantFlow[currentIndex + 1];

    // End reached
    if (!nextStep) {
      return;
    }

    // Special case 1: User declined consent, go to end
    if (
      state.currentStepId === SURVEY_STEPS.INTRO &&
      state.answers["dsgvo_consent"] === "reject"
    ) {
      const nextState = {
        ...state,
        currentStepId: SURVEY_STEPS.OUTRO,
      };
      setState(nextState);
      return;
    }
    // Special case 2: assign userRole after presurvey
    else if (state.currentStepId === SURVEY_STEPS.PRE_SURVEY) {
      const userRole = deriveUserRole(state.answers);

      // set next state
      const nextState = {
        ...state,
        userRole,
        currentStepId: nextStep,
      };
      setState(nextState);
      return;
    }
    // Standard case goNext()
    else {
      // change stepId
      const nextState = {
        ...state,
        currentStepId: nextStep,
      };
      setState(nextState);
      return;
    }
  };

  // navigate to previous step
  const goBack = () => {
    // do not navigate when locked
    if (navigationLockRef.current) return;
    const currentIndex = state.participantFlow.indexOf(state.currentStepId);
    const previousStep = state.participantFlow[currentIndex - 1];

    // No previousStep available
    if (!previousStep) {
      return;
    }

    // calculate the new (previous) Step
    const backStep = {
      ...state,
      currentStepId: previousStep,
    };

    // set previous state
    setState(backStep);
    return;
  };

  // add chat message to display in ChatModule
  const setChatHistory = (
    scenarioId: ScenarioStepId,
    messages: ChatMessage[],
  ) =>
    setState((prev) => ({
      ...prev,
      chatHistory: {
        ...prev.chatHistory,
        [scenarioId]: messages,
      },
    }));

  // keep chat messages in survey state and add complete llm response for log
  const setChatData = (
    scenarioId: ScenarioStepId,
    messages: ChatMessage[],
    response: LlmResponse,
  ) =>
    setState((prev) => ({
      ...prev,
      chatHistory: {
        ...prev.chatHistory,
        [scenarioId]: messages,
      },
      llmResponses: {
        ...prev.llmResponses,
        [scenarioId]: [...(prev.llmResponses[scenarioId] ?? []), response],
      },
    }));

  const lockNavigation = () => {
    navigationLockRef.current = true;
  };
  const unlockNavigation = () => {
    navigationLockRef.current = false;
  };

  // set scroll position to top on each new stepId render
  useEffect(() => {
    // browser window
    window.scrollTo(0, 0);
    // safety net, scroll to top as well
    document.documentElement.scrollTo(0, 0);
  }, [state.currentStepId]); // on stepId change

  return (
    <SurveyContext.Provider
      value={{
        state,
        setAnswer,
        goNext,
        goBack,
        setChatHistory,
        setChatData,
        lockNavigation,
        unlockNavigation,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
