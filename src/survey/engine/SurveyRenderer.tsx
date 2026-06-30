import { StepId, SURVEY_STEPS } from "@/lib/types";
import { ComparisonQuestionsScreen } from "@/screens/ComparisonQuestionsScreen";
import { IntroScreen } from "@/screens/IntroScreen";
import { OutroScreen } from "@/screens/OutroScreen";
import { PreSurveyScreen } from "@/screens/PreSurveyScreen";
import { QuestionnaireScreen } from "@/screens/QuestionnaireScreen";
import { ScenarioScreen } from "@/screens/ScenarioScreen";
import { TrainingInfoScreen } from "@/screens/TrainingInfoScreen";
import { useSurvey } from "./helpers/useSurvey";
import { SurveyNavigation } from "./SurveyNavigation";
import { MessageScreen } from "@/screens/MessageScreen";

export function SurveyRenderer() {
  const { state } = useSurvey();
  const currentStep = state.currentStepId;
  const hideNavigation = currentStep === SURVEY_STEPS.OUTRO;

  return (
    <main className="min-h-screen flex flex-col w-full bg-white">
      {/* Show current screen + Navigation buttons most of the time */}
      <div className="flex-1 flex flex-col w-full">
        {renderCurrentStep(currentStep)}
        {!hideNavigation && <SurveyNavigation />}
      </div>
    </main>
  );
}

function renderCurrentStep(stepId: StepId) {
  switch (stepId) {
    case SURVEY_STEPS.INTRO:
      return <IntroScreen />;
    case SURVEY_STEPS.PRE_SURVEY:
      return <PreSurveyScreen />;
    case SURVEY_STEPS.TRAINING_INFO:
      return <TrainingInfoScreen />;
    case SURVEY_STEPS.TRAINING_FINISHED: // comes after training_task
      return <MessageScreen type="trainingFinished" />;
    case SURVEY_STEPS.TRAINING_TASK:
    case SURVEY_STEPS.GEN_SCEN_1:
    case SURVEY_STEPS.GEN_SCEN_2:
    case SURVEY_STEPS.GEN_SCEN_3:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_1:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_2:
    case SURVEY_STEPS.ROLE_SPEC_SCEN_3:
      return <ScenarioScreen stepId={stepId} />;
    case SURVEY_STEPS.QUESTIONNAIRES_A:
    case SURVEY_STEPS.QUESTIONNAIRES_B:
      return <QuestionnaireScreen stepId={stepId} />;
    case SURVEY_STEPS.CONDITION_SWITCH:
      return <MessageScreen type="conditionSwitch" />;
    case SURVEY_STEPS.COMPARISON_QUESTIONS:
      return <ComparisonQuestionsScreen />;
    case SURVEY_STEPS.OUTRO:
      return <OutroScreen />;
    default: {
      const exhaustiveCheck: never = stepId;
      throw new Error(`Unhandled survey step: ${exhaustiveCheck}`);
    }
  }
}
