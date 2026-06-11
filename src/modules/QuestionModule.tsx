import { useState } from "react";
import { QuestionGroup } from "@/lib/types";
import { QuestionRow } from "@/components/responses/QuestionRow";
import { scaleLength } from "@/lib/scaleLength";


interface QuestionModuleProps {
  group: QuestionGroup;
}

export function QuestionModule({
  group,
}: QuestionModuleProps) {
  const [answers, setAnswers] = useState<
    Record<string, number>
  >({});

  return (
    <div className="space-y-6">

      {group.questions.map((q) => (
        <QuestionRow
          key={q.id}
          text={q.text}
          scale={scaleLength(q.responseType)}
          leftLabel={q.leftLabel}
          rightLabel={q.rightLabel}
          selected={answers[q.id]}
          onSelect={(value) =>
            setAnswers((prev) => ({
              ...prev,
              [q.id]: value,
            }))
          }
        />
      ))}

    </div>
  );
}