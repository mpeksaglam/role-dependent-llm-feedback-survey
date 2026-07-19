import { DsgvoInfo } from "@/components/DsgvoInfo";
import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function IntroScreen() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-6 space-y-10">
      <h2 className="text-xl font-semibold tracking-tight pb-4 border-b border-gray-100">
        Informationen zur Datenschutzgrundverordnung
      </h2>
      <div>
        <DsgvoInfo />
      </div>
      <div>
        <QuestionModule group={questionConfig.dsgvoConsent} />
      </div>
    </div>
  );
}
