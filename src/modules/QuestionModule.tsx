import { useState } from "react";
import { LikertResponseType, QuestionGroup, SurveyAnswer } from "@/lib/types";
import { LikertRow } from "@/components/responses/LikertRow";


interface QuestionModuleProps {
  group: QuestionGroup;
}

function getScaleLength(
  type: LikertResponseType
) {
  return type === "likert5" ? 5 : 7;
}

export function QuestionModule({
  group,
}: QuestionModuleProps) {

  const [answers, setAnswers] = useState<SurveyAnswer>({});

  return (
    <div className="space-y-6">

      {group.questions.map((q) => {
        if (q.responseType === "freeTextInput") {
          return (
            <div key={q.id} className="space-y-2">
              <p className="text-sm">
                {q.text}
              </p>

              <textarea
                className="w-sm rounded-sm border p-2 text-sm"
                rows={4}
                value={
                  (answers[q.id] as string) ?? ""
                }
                onChange={(e) =>
                  setAnswers((prev) => ({
                    ...prev,
                    [q.id]: e.target.value,
                  }))
                }
              />
            </div>
          );
        }

        return(
          <LikertRow
            key={q.id}
            text={q.text}
            scale={getScaleLength(q.responseType)}
            leftLabel={q.leftLabel}
            rightLabel={q.rightLabel}
            selected={answers[q.id] as number | undefined}
            onSelect={(value) =>
              setAnswers((prev) => ({
                ...prev,
                [q.id]: value,
              }))
            }
          />
        );
    })}
    </div>
  );
}