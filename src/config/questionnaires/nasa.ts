import { buildQuestionnaire } from "./buildQuestionnaire";

const NASA_ITEMS = [
  "Wie geistig anstrengend war die Aufgabe?",
  "Wie körperlich anstrengend war die Aufgabe?",
  "Wie hoch war der Zeitdruck?",
  "Wie zufrieden bist du mit deiner Leistung?",
  "Wie viel Anstrengung hat es gekostet, die Aufgabe zu bewältigen?",
  "Wie frustrierend war die Aufgabe?",
] as const;

function createNasa(id: "nasa_a" | "nasa_b") {
  return buildQuestionnaire({
    id,
    title: "NASA TLX",

    scale: 11,

    leftLabel: "sehr gering",
    rightLabel: "sehr hoch",

    questions: NASA_ITEMS.map((text, index) => ({
      id: `${id}_q${index + 1}`,
      text,
    })),
  });
}

export const nasaQuestionsA = createNasa("nasa_a");
export const nasaQuestionsB = createNasa("nasa_b");
