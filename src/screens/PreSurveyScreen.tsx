import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function PreSurveyScreen() {
  return (
    <div className="min-h-screen p-10 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">
        Bitte beantworten Sie folgende Fragen.
      </h1>

      <QuestionModule group={questionConfig.preSurveyQuestions} />
    </div>
  );
}
