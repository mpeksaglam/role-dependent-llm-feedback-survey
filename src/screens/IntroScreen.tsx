import { dsgvoConsent } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function IntroScreen() {
  return (
    <div className="min-h-screen p-10 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">
        Willkommen zur KIRo4LeMi Feedback Survey
      </h1>

      <QuestionModule group={dsgvoConsent} />
    </div>
  );
}
