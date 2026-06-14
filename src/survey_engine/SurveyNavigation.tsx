import { NavigationButton } from "@/components/buttons/NavigationButton";
import { useSurvey } from "./useSurvey";

export function SurveyNavigation() {
  const { state, goBack, goNext } = useSurvey();

  const currentIndex = state.participantFlow.indexOf(state.currentStepId);

  const isFirstStep = currentIndex === 0;

  const isLastStep = currentIndex === state.participantFlow.length - 1;

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
        disabled={isFirstStep}
      />

      <NavigationButton
        action="forward"
        label="Weiter"
        onClick={goNext}
        disabled={isLastStep} // TODO add noch nicht alle fragen beantwortet
      />
    </div>
  );
}
