import { useState } from "react";
import { LikertResponseType, QuestionGroup, SurveyAnswers, SelectionOption } from "@/lib/types";
import { LikertRow } from "@/components/responses/LikertRow";
import { RadioGroup } from "@/components/responses/RadioGroup";


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

  const [answers, setAnswers] = useState<SurveyAnswers>({});

  return (
    <div className="space-y-6">

      {group.questions.map((q) => {
        switch (q.responseType) {
          case "likert5": case "likert7":

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
          
          case "freeTextInput":
            return (
              <div key={q.id} className="space-y-2">
                <p className="text-sm">
                  {q.text}
                </p>
                {/* TODO replace by FreeTextInput module ?? */}
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

          case "singleChoice":
            return (
                <div key={q.id} className="space-y-2">
                  
                  {/* Frage */}
                  <p className="text-sm">
                    {q.text}
                  </p>

                  {/* Radio Selection */}
                  <RadioGroup
                    name={q.id}
                    value={answers[q.id] as string ?? ""}
                    onChange={(value) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [q.id]: value,
                      }))
                    }
                    options={q.options as SelectionOption[]}
                  />
                </div>
              );
        }
      })}
    </div>
  );
}