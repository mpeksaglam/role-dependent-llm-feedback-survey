import { DsgvoInfo } from "@/components/DsgvoInfo";
import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function IntroScreen() {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-6">
        Willkommen zur KIRo4LeMi Feedback Survey
      </h1>
      <div className="mb-8">
        <DsgvoInfo />
      </div>
      <QuestionModule group={questionConfig.dsgvoConsent} />
    </div>
  );
}
