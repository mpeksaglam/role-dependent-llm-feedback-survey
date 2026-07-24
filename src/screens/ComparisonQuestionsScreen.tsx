import { questionConfig } from "@/config/questionConfig";

import { QuestionModule } from "@/modules/QuestionModule";

export function ComparisonQuestionsScreen() {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-6 space-y-10">
      <h2 className="text-xl font-semibold tracking-tight pb-4 border-b border-gray-100">
        Vergleich der Interfaces
      </h2>

      <p>
        Bitte vergleichen Sie die verwendeten Eingabeformen (z. B. Ratings,
        Buttons oder Chatfenster), im Folgenden als Interfaces bezeichnet, sowie
        die dort verwendete Sprache. Im Mittelpunkt steht die Frage, welche
        Eingabeform sich aus Ihrer Sicht besser eignet, um Rückmeldungen zu
        einem Roboterablauf abzugeben.
      </p>

      <QuestionModule group={questionConfig.comparisonQuestions} />
    </div>
  );
}
