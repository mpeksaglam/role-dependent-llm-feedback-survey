import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function PreSurveyScreen() {
  return (
    <div className="p-10 flex flex-col">
      <h3 className="text-lg font-bold mb-4">
        Bitte beantworten Sie folgende Fragen.
      </h3>

      <QuestionModule group={questionConfig.preSurveyQuestions} />
    </div>
  );
}
