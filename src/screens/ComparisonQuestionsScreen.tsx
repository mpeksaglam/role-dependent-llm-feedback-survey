import { questionConfig } from "@/config/questionConfig";

import { QuestionModule } from "@/modules/QuestionModule";

export function ComparisonQuestionsScreen() {
  return (
    <div className="space-y-8 p-10">
      <h1 className="text-lg font-semibold">Vergleich der Interfaces</h1>

      <p className=" ">
        Bitte vergleichen Sie die beiden zuvor verwendeten Interfaces.
      </p>

      <QuestionModule group={questionConfig.comparisonQuestions} />
    </div>
  );
}
