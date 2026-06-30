import { questionConfig } from "@/config/questionConfig";

import { QuestionModule } from "@/modules/QuestionModule";

export function ComparisonQuestionsScreen() {
  return (
    <div className="max-w-5xl mx-auto px-10 pt-16 pb-6 space-y-10">
      <h2 className="text-xl font-semibold tracking-tight pb-4 border-b border-gray-100">
        Vergleich der Interfaces
      </h2>

      <p>Bitte vergleichen Sie die beiden zuvor verwendeten Interfaces.</p>

      <QuestionModule group={questionConfig.comparisonQuestions} />
    </div>
  );
}
