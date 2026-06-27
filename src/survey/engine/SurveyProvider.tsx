"use client";

import { ReactNode, useEffect, useState } from "react";

import {
  AnswerValue,
  ChatMessage,
  isScenarioStep,
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
import { saveSession } from "../persistence/saveSession";
import next from "next";

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
    setState((prev) => {
      const nextState = {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: value,
        },
      };
      // send state to backend for persistence
      saveSession(nextState);
      return nextState;
    });
  };
  // navigate to next step
  const goNext = () => {
    // get current step INDEX and next one according to participantFlow
    const currentIndex = state.participantFlow.indexOf(state.currentStepId);
    const nextStep = state.participantFlow[currentIndex + 1];

    // End reached
    if (!nextStep) {
      return;
    }

    // calculate how long user spent on scenarioScreen
    // has to be used / sent to logging before setState or will be lost TODO Math.floor(durationMs/1000)
    const durationMs =
      isScenarioStep(state.currentStepId) &&
      state.scenarioStartTimestamp !== null
        ? Date.now() - state.scenarioStartTimestamp
        : null;

    // LOG goes here TODO

    // Special case 1: User declined consent, go to end
    if (
      state.currentStepId === SURVEY_STEPS.INTRO &&
      state.answers["dsgvo_consent"] === "reject"
    ) {
      setState((prev) => {
        const nextState = {
          ...prev,
          currentStepId: SURVEY_STEPS.OUTRO,
        };
        // send to backend for persistence
        saveSession(nextState);
        return nextState;
      });
    }
    // Special case 2: assign userRole after presurvey
    else if (state.currentStepId === SURVEY_STEPS.PRE_SURVEY) {
      const userRole = deriveUserRole(state.answers);
      setState((prev) => {
        const nextState = {
          ...prev,
          userRole,
          currentStepId: nextStep,
        };
        // send to backend for persistence
        saveSession(nextState);
        return nextState;
      });
    }
    // Standard case goNext()
    else {
      setState((prev) => {
        // change stepId and start timer if nextStep is a scenario
        const nextState = {
          ...prev,
          currentStepId: nextStep,
          scenarioStartTimestamp: isScenarioStep(nextStep) ? Date.now() : null,
        };
        // send to backend for persistence
        saveSession(nextState);
        return nextState;
      });
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

    setState((prev) => {
      const backStep = {
        ...prev,
        currentStepId: previousStep,
      };
      // send to backend for persistence
      saveSession(backStep);
      return backStep;
    });
  };

  // keep chat messages in survey state
  const setChatHistory = (
    scenarioId: ScenarioStepId,
    messages: ChatMessage[],
  ) => {
    setState((prev) => {
      const nextState = {
        ...prev,
        chatHistory: {
          ...prev.chatHistory,
          [scenarioId]: messages,
        },
      };
      // send to backend for persistence
      saveSession(nextState);
      return nextState;
    });
  };

  // TIMERS for scenarios
  // Add startTime to state to time how long it took
  const startScenarioTimer = () => {
    setState((prev) => ({
      ...prev,
      scenarioStartTimestamp: Date.now(),
    }));
  };
  // Stop timer and return duration in ms
  const stopScenarioTimer = () => {
    const duration =
      state.scenarioStartTimestamp === null
        ? null
        : Date.now() - state.scenarioStartTimestamp;

    return duration;
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
