import { ScenarioStepId, StepId } from "@/lib/types";

import { scenarioConfig } from "@/config/scenarioConfig";

import { SimulationModule } from "@/modules/SimulationModule";
import { QuestionModule } from "@/modules/QuestionModule";
import { useSurvey } from "@/survey_engine/helpers/useSurvey";
import { ChatModule } from "@/modules/ChatModule";

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
  // get scenario questions where chat could be necessary
  // (user rejected acceptability of robot action)
  const rejectQuestionId = config.rejectQuestionIds[userRole];

  const rejectAnswer = rejectQuestionId
    ? state.answers[rejectQuestionId]
    : undefined;

  const showChat =
    config.chatMode === "always" ||
    (config.chatMode === "onReject" && rejectAnswer === "action_rejected");

  return (
    <div className="space-y-8 p-10">
      {/* Titel */}
      <h1 className="text-lg font-bold">{config.title}</h1>

      {/* TODO add kurze Aufgabenbeschreibung */}

      <div
        className={`
        flex gap-6 h-[500px] 
        ${showChat ? "lg:flex-row" : "justify-center"}
        `}
      >
        <div className={showChat ? "flex-1" : "w-full max-w-3xl"}>
          <SimulationModule simVid={config.simulation} />
        </div>
        {showChat && (
          <div className="flex-1 min-h-0">
            <ChatModule key={stepId} scenarioId={stepId} userRole={userRole} />
          </div>
        )}
      </div>

      <QuestionModule group={questions} />
    </div>
  );
}

/*  Taken from survey/page.tsx previous styling TODO

    <main
      className=" 
      p-8 
      flex flex-col
      w-full max-w-5xl mx-auto
      "
    >
      <div className="flex items-center justify-center mb-6">
        <SimulationModule simVid={simulationVideos[0]} />
      </div>

      <QuestionModule group={scen1GenericQuestions} />
    </main> */
