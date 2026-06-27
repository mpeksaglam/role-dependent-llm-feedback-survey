import { NavigationButton } from "@/components/buttons/NavigationButton";
import { SURVEY_STEPS, isScenarioStep } from "@/lib/types";
import { canProceed } from "./helpers/canProceed";
import { useSurvey } from "./helpers/useSurvey";
import { useEffect, useState } from "react";

export function SurveyNavigation() {
  // access survey state and provider functions
  const { state, goBack, goNext } = useSurvey();
  // Boolean for showing message to user (answer all questions before proceeding)
  const [showRequirement, setShowRequirement] = useState(false);
  // Set timer to show requirement message for 5secs
  useEffect(() => {
    if (!showRequirement) return;

    const timer = setTimeout(() => {
      setShowRequirement(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showRequirement]);

  const currentStep = state.currentStepId;
  const conditionOrder = state.conditionOrder;
  if (!conditionOrder) return null; // should not be the case, assigned right at start

  /* special cases (no way back):
      -beginning of survey
      -pre-survey to survey step (user Role assigned) 
      -between scenarios (enforce within-subjects design & keep timing correct)   */

  const noWayBack =
    currentStep === SURVEY_STEPS.INTRO || // TODO change forward button , put on IntroScreen and hideNavigation in surveyRenderer
    currentStep === SURVEY_STEPS.TRAINING_INFO ||
    isScenarioStep(currentStep);

  const isLastStep = currentStep === SURVEY_STEPS.OUTRO;
  // checks if its possible to proceed and gives back potential error message for user
  const proceed = canProceed(
    state.currentStepId,
    state.answers,
    state.userRole,
    state.chatHistory,
  );

  return (
    <div className="mt-auto">
      {/* Tell user to complete questions/chat */}
      <div className="h-6 mb-2 text-sm text-red-800 text-right">
        {showRequirement && !proceed.canProceed && proceed.message}
      </div>

      <div className="flex justify-between">
        <NavigationButton
          action="back"
          label="Zurück"
          onClick={goBack}
          disabled={noWayBack}
        />

        <NavigationButton
          action={isLastStep ? "send_survey" : "forward"} // on last page send instead
          label={isLastStep ? "Absenden" : "Weiter"} // TODO maybe "Umfrage beenden" und anderes icon
          onClick={() => {
            if (proceed.canProceed) {
              goNext();
            } else {
              setShowRequirement(true);
            }
          }}
          disabled={false} // TODO keep always disabled?
        />
      </div>
    </div>
  );
}
