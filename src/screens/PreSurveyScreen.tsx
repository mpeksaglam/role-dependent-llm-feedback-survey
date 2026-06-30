import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function PreSurveyScreen() {
  return (
    <div className="max-w-5xl mx-auto px-10 pt-16 pb-6 space-y-8">
      <h1 className="text-xl font-semibold tracking-tight pb-4 border-b border-gray-100">
        Technische Vorerfahrung
      </h1>
      <p className="max-w-3xl py-10">
        Die folgenden Fragen erfassen Ihre bisherige Erfahrung in technischen
        und digitalen Arbeitsbereichen.
      </p>
      <div className="pt-2">
        <QuestionModule group={questionConfig.preSurveyQuestions} />
      </div>
    </div>
  );
}
