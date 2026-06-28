import { ScenarioStepId } from "@/lib/types";

import { scenarioConfig } from "@/config/scenarioConfig";

import { ChatModule } from "@/modules/ChatModule";
import { QuestionModule } from "@/modules/QuestionModule";
import { SimulationModule } from "@/modules/SimulationModule";
import { useSurvey } from "@/survey/engine/helpers/useSurvey";

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

  return (
    <div
      className="
        max-w-6xl
        mx-auto
        px-6
        py-8
        space-y-10
      "
    >
      {/* Titel */}
      <h1
        className="
          text-lg
          font-semibold
          text-gray-900
        "
      >
        {config.title[userRole]}
      </h1>

      {/* kurze Aufgabenbeschreibung */}
      <p
        className="
          text-sm
          text-gray-900
          leading-6
          max-w-3xl
        "
      >
        {config.taskDescr[userRole]}
      </p>

      <div className="max-w-5xl mx-auto">
        <SimulationModule key={stepId} simVid={config.simulation} />
      </div>
      <div className="">
        {/* TODO spacing? */}
        <QuestionModule group={questions} />
      </div>
      {showChat && (
        <div className="max-w-6xl mx-auto mt-8">
          <ChatModule key={stepId} scenarioId={stepId} userRole={userRole} />
        </div>
      )}
    </div>
  );
}
