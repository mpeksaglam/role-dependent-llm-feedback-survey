import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function IntroScreen() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-3xl p-10">
      <h1 className="text-2xl font-bold mb-4">
        Willkommen zur KIRo4LeMi Feedback Survey
      </h1>

      <QuestionModule group={questionConfig.dsgvoConsent} />
    </div>
  );
}
