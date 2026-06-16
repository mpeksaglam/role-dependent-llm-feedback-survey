import { NavigationButton } from "@/components/buttons/NavigationButton";
import { useSurvey } from "./helpers/useSurvey";
import { SURVEY_STEPS } from "@/lib/types";
import { canProceed } from "./helpers/canProceed";

export function SurveyNavigation() {
  const { state, goBack, goNext } = useSurvey();

  const currentStep = state.currentStepId;
  const conditionOrder = state.conditionOrder;
  if (!conditionOrder) return null; // should not be the case, assigned right at start

  /* special cases (no way back):
      -beginning of survey
      -pre-survey to survey step (user Role assigned) 
      -between scenarios (enforce within-subjects design)    */

  const firstCondDone =
    conditionOrder[0] === "gen"
      ? currentStep === SURVEY_STEPS.ROLE_SPEC_SCEN_1
      : currentStep === SURVEY_STEPS.GEN_SCEN_1;

  const noWayBack =
    currentStep === SURVEY_STEPS.INTRO ||
    currentStep === SURVEY_STEPS.TRAINING_TASK ||
    firstCondDone;

  const isLastStep = currentStep === SURVEY_STEPS.OUTRO;

  const canGoNext = canProceed(
    state.currentStepId,
    state.answers,
    state.userRole,
  );

  return (
    <div
      className="
        mt-auto
        flex
        justify-between
      "
    >
      <NavigationButton
        action="back"
        label="Zurück"
        onClick={goBack}
        disabled={noWayBack}
      />

      <NavigationButton
        action={isLastStep ? "send_survey" : "forward"} // on last page send
        label={isLastStep ? "Absenden" : "Weiter"}
        onClick={goNext}
        disabled={!canGoNext}
      />
    </div>
  );
}
