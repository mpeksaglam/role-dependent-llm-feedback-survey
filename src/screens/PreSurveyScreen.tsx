import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function PreSurveyScreen() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-8 flex flex-col">
      <h1 className="text-lg font-semibold tracking-tight pb-4 border-b border-gray-100">
        Kurze Vorerhebung
      </h1>
      <p className="max-w-3xl">Bitte beantworten Sie folgende Fragen:</p>

      <QuestionModule group={questionConfig.preSurveyQuestions} />
    </div>
  );
}
