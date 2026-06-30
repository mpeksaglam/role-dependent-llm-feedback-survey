import { ScenarioStepId, SURVEY_STEPS } from "@/lib/types";

import { scenarioConfig } from "@/config/scenarioConfig";

import { ChatModule } from "@/modules/ChatModule";
import { QuestionModule } from "@/modules/QuestionModule";
import { SimulationModule } from "@/modules/SimulationModule";
import { useSurvey } from "@/survey/engine/helpers/useSurvey";
import { useEffect, useRef } from "react";

interface ScenarioScreenProps {
  stepId: ScenarioStepId;
}

export function ScenarioScreen({ stepId }: ScenarioScreenProps) {
  // get UserRole for rendering correct role-specific UI
  const { state } = useSurvey();
  const userRole = state.userRole;
  if (!userRole) throw new Error("userRole missing in ScenarioScreen"); // should not be null at this point
  // get questions and video URLs
  const config = scenarioConfig[stepId];
  const questions = config.questions[userRole];
  // get scenario questions where chat is an option
  // (user deems robot action improvable)
  const rejectQuestionId = config.rejectQuestionIds[userRole];
  const rejectAnswer = rejectQuestionId
    ? state.answers[rejectQuestionId]
    : undefined;

  // decide when to render chat
  const showChat =
    config.chatMode === "always" ||
    (config.chatMode === "onReject" && rejectAnswer === "action_rejected");
  // ref for chat element to scroll to
  const chatRef = useRef<HTMLDivElement>(null);
  // auto scroll to chat on popup
  useEffect(() => {
    // not in training screen
    if (stepId === SURVEY_STEPS.TRAINING_TASK) {
      return;
    }
    // does not happen in scenario 2 since showChat always true (no change)
    if (showChat && config.chatMode === "onReject" && chatRef.current) {
      // small time out to give time to render until scroll
      const timer = setTimeout(() => {
        chatRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [showChat, stepId, config.chatMode]); // upon showChat change from false to true, scroll down

  return (
    <div className="max-w-5xl mx-auto px-10 pt-16 pb-6 space-y-10">
      {/* Titel */}
      <h2 className="text-xl font-semibold tracking-tight pb-4 border-b border-gray-100">
        {config.title[userRole]}
      </h2>

      {/* kurze Aufgabenbeschreibung */}
      <p className="max-w-3xl">{config.taskDescr[userRole]}</p>

      <div className="w-full">
        <SimulationModule key={stepId} simVid={config.simulation} />
      </div>
      <div className="pt-4">
        <QuestionModule group={questions} />
      </div>
      {showChat && (
        <div ref={chatRef} className="w-full mt-8 scroll-mt-6">
          <ChatModule key={stepId} scenarioId={stepId} userRole={userRole} />
        </div>
      )}
    </div>
  );
}
