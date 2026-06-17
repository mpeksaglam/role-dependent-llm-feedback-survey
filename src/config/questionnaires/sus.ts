import { create } from "domain";
import { buildQuestionnaire } from "./buildQuestionnaire";

const SUS_ITEMS = [
  "Ich würde dieses System gerne regelmäßig nutzen.",
  "Ich fand das System unnötig kompliziert.",
  "Ich fand das System einfach zu benutzen.",
  "Ich glaube, ich bräuchte Unterstützung, um das System nutzen zu können.",
  "Die Funktionen des Systems sind gut aufeinander abgestimmt.",
  "Ich fand das System uneinheitlich.",
  "Ich denke, dass die meisten Menschen den Umgang mit dem System schnell lernen würden.",
  "Ich fand das System umständlich zu benutzen.",
  "Ich fühlte mich sicher im Umgang mit dem System.",
  "Ich musste viele Dinge lernen, bevor ich mit dem System arbeiten konnte.",
] as const;

function createSus(id: "sus_a" | "sus_b") {
  return buildQuestionnaire({
    id,
    title: "System Usability Scale",

    scale: 5,
    leftLabel: "stimme gar nicht zu",
    rightLabel: "stimme voll zu",

    questions: SUS_ITEMS.map((text, index) => ({
      id: `${id}_q${index + 1}`,
      text,
    })),
  });
}

export const susQuestionsA = createSus("sus_a");
export const susQuestionsB = createSus("sus_b");
