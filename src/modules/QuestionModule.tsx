import { FreeTextInput } from "@/components/responses/FreeTextInput";
import { LikertRow } from "@/components/responses/LikertRow";
import { RadioGroup } from "@/components/responses/RadioGroup";
import {
  LikertResponseType,
  QuestionGroup,
  SelectionOption,
} from "@/lib/types";
import { useSurvey } from "@/survey/engine/helpers/useSurvey";

interface QuestionModuleProps {
  group: QuestionGroup;
}

// quite hardcoded, has to be changed for other LikertScales
function getScaleLength(type: LikertResponseType) {
  return type === "likert5" ? 5 : 11;
}

export function QuestionModule({ group }: QuestionModuleProps) {
  const { state, setAnswer } = useSurvey();
  return (
    <div className="space-y-6">
      {group.questions.map((q) => {
        switch (q.responseType) {
          case "likert5":
          case "likert11":
            return (
              <LikertRow
                key={q.id}
                name={q.id}
                text={q.text}
                scale={getScaleLength(q.responseType)}
                leftLabel={q.leftLabel}
                rightLabel={q.rightLabel}
                value={state.answers[q.id] as number | undefined}
                onChange={(value) => setAnswer(q.id, value)}
              />
            );

          case "freeTextInput":
            return (
              <FreeTextInput
                key={q.id}
                text={q.text} // question
                value={(state.answers[q.id] as string) ?? ""}
                onSave={(value) => setAnswer(q.id, value)}
              />
            );

          case "singleChoice":
            return (
              <div key={q.id} className="space-y-2">
                {/* Frage */}
                <p className="text-md">{q.text}</p>

                {/* Radio Selection */}
                <RadioGroup
                  name={q.id}
                  value={(state.answers[q.id] as string) ?? ""}
                  onChange={(value) => setAnswer(q.id, value)}
                  options={q.options as SelectionOption[]}
                />
              </div>
            );
          default:
            throw new Error("Unknown responseType"); // new types have to be added
        }
      })}
    </div>
  );
}
