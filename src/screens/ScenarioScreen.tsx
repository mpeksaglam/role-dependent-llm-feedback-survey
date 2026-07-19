import { ScenarioStepId, SURVEY_STEPS } from "@/lib/types";

import { scenarioConfig } from "@/config/scenarioConfig";

import { ChatModule } from "@/modules/ChatModule";
import { QuestionModule } from "@/modules/QuestionModule";
import { SimulationModule } from "@/modules/SimulationModule";
import { useSurvey } from "@/survey/engine/helpers/useSurvey";
import { useEffect, useRef } from "react";
import { simulationConfig } from "@/config/simulationConfig";

interface ScenarioScreenProps {
  stepId: ScenarioStepId;
}

export function ScenarioScreen({ stepId }: ScenarioScreenProps) {
  // get UserRole for rendering correct role-specific UI
  const { state } = useSurvey();
  const userRole = state.userRole;
  // Null checks (should not be null!)
  if (!userRole) throw new Error("userRole missing in ScenarioScreen");
  if (!state.conditionOrder)
    throw new Error("conditionOrder missing in ScenarioScreen");
  // get questions and videos
  const config = scenarioConfig[stepId];
  const questions = config.questions[userRole];
  // Different case for training, otherwise get round1 videos or round2 videos
  const simulation =
    config.scenarioKey === "training"
      ? simulationConfig.training
      : simulationConfig[
          state.conditionOrder[0] === config.condition ? "round1" : "round2"
        ][config.scenarioKey];
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

  // chat task description for training
  const chatTask =
    stepId === SURVEY_STEPS.TRAINING_TASK
      ? "Was genau finden Sie an der Handlung (nicht) akzeptabel?"
      : null;
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
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-6 space-y-10">
      {/* Title */}
      <h2 className="text-xl font-semibold tracking-tight pb-4 border-b border-gray-100">
        {config.title[userRole]}
      </h2>

      {/* Task description */}
      <p className="max-w-3xl">{config.taskDescr[userRole]}</p>

      <div className="w-full">
        <SimulationModule key={stepId} simVid={simulation} />
      </div>
      <div className="pt-4">
        <QuestionModule group={questions} />
      </div>
      {showChat && (
        <div ref={chatRef} className="w-full mt-8 scroll-mt-6">
          {chatTask && <p className="mb-3 font-semibold">{chatTask}</p>}
          <ChatModule key={stepId} scenarioId={stepId} userRole={userRole} />
        </div>
      )}
    </div>
  );
}
