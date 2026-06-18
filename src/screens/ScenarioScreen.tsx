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
  const role = state.userRole;
  if (!role) return null; // should not be null at this point
  // get questions and video URLs
  const config = scenarioConfig[stepId];
  const questions = config.questions[role];

  return (
    <div className="space-y-8 p-10">
      {/* Titel */}
      <h1 className="text-lg font-bold">{config.title}</h1>

      {/* TODO add kurze Aufgabenbeschreibung */}

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <SimulationModule simVid={config.simulation} />
        </div>
        <div className="flex-1">
          <ChatModule />
        </div>
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
