// import { scenarioConfig } from "@/config/scenarioConfig";
// import { simulationConfig } from "@/config/simulationConfig";
// import { questionConfig } from "@/config/questionConfig";

// import { SimulationModule } from "@/modules/SimulationModule";
// import { QuestionModule } from "@/modules/QuestionModule";

// import { StepId } from "@/lib/types";

// interface ScenarioScreenProps {
//   stepId: StepId;
// }

// export function ScenarioScreen({
//   stepId,
// }: ScenarioScreenProps) {

//   const config =
//     scenarioConfig[stepId];

//   const simulation =
//     simulationConfig[
//       config.simulationId
//     ];

//   const questions =
//     questionConfig[
//       config.questionGroupId
//     ];

//   return (
//     <>
//       <h1>{config.title}</h1>

//       <SimulationModule
//         simulation={simulation}
//       />

//       <QuestionModule
//         group={questions}
//       />
//     </>
//   );
// }

/*  Taken from survey/page.tsx previous styling

    <main
      className=" 
      min-h-screen 
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
