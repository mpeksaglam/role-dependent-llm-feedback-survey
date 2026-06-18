import { useState } from "react";
import {
  LikertResponseType,
  QuestionGroup,
  SurveyAnswers,
  SelectionOption,
} from "@/lib/types";
import { LikertRow } from "@/components/responses/LikertRow";
import { RadioGroup } from "@/components/responses/RadioGroup";
import { useSurvey } from "@/survey_engine/helpers/useSurvey";
import { FreeTextInput } from "@/components/responses/FreeTextInput";

interface QuestionModuleProps {
  group: QuestionGroup;
}

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
                questionId={q.id}
                text={q.text}
                scale={getScaleLength(q.responseType)}
                leftLabel={q.leftLabel}
                rightLabel={q.rightLabel}
                selected={state.answers[q.id] as number | undefined}
                onSelect={(value) => setAnswer(q.id, value)}
              />
            );

          case "freeTextInput":
            return (
              // TODO add question above textInput box
              <FreeTextInput
                key={q.id}
                value={(state.answers[q.id] as string) ?? ""}
                onChange={(value) => setAnswer(q.id, value)}
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
