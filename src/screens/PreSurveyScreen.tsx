import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function PreSurveyScreen() {
  return (
    <div className="p-10 flex flex-col">
      <h1
        className="
          text-lg
          font-semibold
          text-gray-900
          mb-10
        "
      >
        Kurze Vorerhebung
      </h1>
      <p
        className="
          text-gray-900
          leading-7
          max-w-3xl
        "
      >
        Bitte beantworten Sie folgende Fragen:
      </p>

      <QuestionModule group={questionConfig.preSurveyQuestions} />
    </div>
  );
}
