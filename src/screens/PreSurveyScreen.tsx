import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function PreSurveyScreen() {
  return (
    <div className="p-10 flex flex-col">
      <h1
        className="
          text-lg
          font-semibold
          
          mb-10
        "
      >
        Kurze Vorerhebung
      </h1>
      <p
        className="
          
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
