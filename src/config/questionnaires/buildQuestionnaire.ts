import { QuestionGroup } from "@/lib/types";

type Params = {
  id: string;
  title: string;
  scale: 5 | 11;
  leftLabel: string;
  rightLabel: string;
  questions: {
    id: string;
    text: string;
  }[];
};

export function buildQuestionnaire({
  id,
  title,
  scale,
  leftLabel,
  rightLabel,
  questions,
}: Params): QuestionGroup {
  return {
    id,
    title,
    questions: questions.map((q) => ({
      id: q.id,
      text: q.text,
      responseType: `likert${scale}` as const,
      leftLabel,
      rightLabel,
    })),
  };
}
