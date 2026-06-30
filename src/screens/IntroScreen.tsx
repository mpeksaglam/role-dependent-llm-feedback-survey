import { DsgvoInfo } from "@/components/DsgvoInfo";
import { questionConfig } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export function IntroScreen() {
  return (
    <div className="max-w-4xl mx-auto px-10 py-12 space-y-10">
      <h1 className="text-xl font-semibold tracking-tight pb-4 border-b border-gray-100">
        Belehrung über die Datenschutzgrundverordnung
      </h1>
      <div>
        <DsgvoInfo />
      </div>
      <div>
        <QuestionModule group={questionConfig.dsgvoConsent} />
      </div>
    </div>
  );
}
