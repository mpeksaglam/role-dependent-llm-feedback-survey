import { questionConfig } from "@/config/questionConfig";
import { StepId, SURVEY_STEPS } from "@/lib/types";
import { QuestionModule } from "@/modules/QuestionModule";

interface QuestionnaireScreenProps {
  stepId: StepId;
}

export function QuestionnaireScreen({ stepId }: QuestionnaireScreenProps) {
  const isA = stepId === SURVEY_STEPS.QUESTIONNAIRES_A;

  // get either questionnaire A or B for all three
  const sus = isA ? questionConfig.susQuestionsA : questionConfig.susQuestionsB;
  const nasa = isA
    ? questionConfig.nasaQuestionsA
    : questionConfig.nasaQuestionsB;
  const roleFit = isA
    ? questionConfig.roleFitQuestionsA
    : questionConfig.roleFitQuestionsB;

  return (
    <div className="max-w-5xl mx-auto px-10 pt-16 pb-6 space-y-12">
      <h2 className="text-xl font-semibold pb-4 border-b border-gray-100">
        Fragebögen
      </h2>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold tracking-tight">
          System Usability Scale
        </h2>

        <QuestionModule group={sus} />
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold tracking-tight">NASA-TLX</h2>

        <QuestionModule group={nasa} />
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold tracking-tight">Role-Fit</h2>

        <QuestionModule group={roleFit} />
      </section>
    </div>
  );
}
