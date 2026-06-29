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
import { logCurrentStep } from "../logging/logCurrentStep";
import { logEvent } from "../logging/logEvent";
import { loadSession } from "../persistence/loadSession";
import { saveSession } from "../persistence/saveSession";
import {
  buildParticipantFlow,
  randomize,
} from "./helpers/buildParticipantFlow";
import { deriveUserRole } from "./helpers/deriveUserRole";
import { initialSurveyState } from "./initialSurveyState";
import { logBackNavigation } from "../logging/logBackNavigation";

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
      // Case A: success -> restore previous session
      if (savedSession) {
        setState(savedSession);

        if (!savedSession.participantId) {
          throw new Error("Restored previous session without participantId");
        }
        // void to not await response
        // only case where session_restore event can happen
        // manual calling because of initializeSurvey no state existent yet!
        void logEvent({
          participantId: savedSession.participantId,
          eventType: "session_restored",
          payload: {},
        });
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

      // side effects always outside of setState!
      // only case where survey_started event can occur
      // manual calling because of initializeSurvey no state existent yet!
      void logEvent({
        participantId,
        eventType: "survey_started",
        payload: {
          conditionOrder,
          participantFlow,
        },
      });

      // prev used here since we're in an async function
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
    // send state to backend for persistence
    void saveSession(nextState);
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
    // startTimestamp was set before (further down), this happens at end of scenarioScreen before nextStep is set
    // calculate scenario duration
    const durationSeconds =
      isScenarioStep(state.currentStepId) &&
      state.scenarioStartTimestamp !== null
        ? Math.round((Date.now() - state.scenarioStartTimestamp) / 1000) // convert from ms to seconds
        : undefined;

    // log current completed step before moving on (end snapshot)
    // pre survey excluded because it is handled in Special Case 2
    if (state.currentStepId !== SURVEY_STEPS.PRE_SURVEY) {
      void logCurrentStep(state, durationSeconds);
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
      // send to backend for persistence
      void saveSession(nextState);
      // log again because end reached, no interaction happening anymore
      void logCurrentStep(nextState);
      return;
    }
    // Special case 2: assign userRole after presurvey
    else if (state.currentStepId === SURVEY_STEPS.PRE_SURVEY) {
      const userRole = deriveUserRole(state.answers);

      // for logging purposes
      const stateWithRole = {
        ...state,
        userRole,
      };
      void logCurrentStep(stateWithRole);

      // set next state
      const nextState = {
        ...state,
        userRole,
        currentStepId: nextStep,
      };
      setState(nextState);
      // send to backend for persistence
      void saveSession(nextState);
      return;
    }
    // Standard case goNext()
    else {
      // change stepId and start timer if nextStep is a scenario
      const nextState = {
        ...state,
        currentStepId: nextStep,
        scenarioStartTimestamp: isScenarioStep(nextStep) ? Date.now() : null,
      };
      setState(nextState);

      // send to backend for persistence
      void saveSession(nextState);
      return;
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

    // log that user went back
    void logBackNavigation(state);

    // calculate the new (previous) Step
    const backStep = {
      ...state,
      currentStepId: previousStep,
    };

    // set previous state
    setState(backStep);
    // send to backend for persistence
    void saveSession(backStep);
    return;
  };

  // keep chat messages in survey state
  const setChatHistory = (
    scenarioId: ScenarioStepId,
    messages: ChatMessage[],
  ) => {
    const nextState = {
      ...state,
      chatHistory: {
        ...state.chatHistory,
        [scenarioId]: messages,
      },
    };
    setState(nextState);

    // send to backend for persistence
    void saveSession(nextState);
    return;
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
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
}
