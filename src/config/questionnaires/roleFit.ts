import { buildQuestionnaire } from "./buildQuestionnaire";

const ROLE_FIT_ITEMS = [
  "Das Interface passte zu meiner Rolle.",
  "Die Begriffe passten zu meiner Arbeitsweise.",
  "Ich konnte mein Fachwissen einbringen.",
  "Das Interface setzte unnötiges Fachwissen voraus.",
  "Die Bewertungskriterien waren sinnvoll.",
] as const;

function createRoleFit(id: "role_fit_a" | "role_fit_b") {
  return buildQuestionnaire({
    id,
    title: "Role Fit",

    scale: 5,

    leftLabel: "stimme gar nicht zu",
    rightLabel: "stimme voll zu",

    questions: ROLE_FIT_ITEMS.map((text, index) => ({
      id: `${id}_q${index + 1}`,
      text,
    })),
  });
}

export const roleFitQuestionsA = createRoleFit("role_fit_a");
export const roleFitQuestionsB = createRoleFit("role_fit_b");
