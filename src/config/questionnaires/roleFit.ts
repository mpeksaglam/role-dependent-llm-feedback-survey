import { buildQuestionnaire } from "./buildQuestionnaire";

const ROLE_FIT_ITEMS = [
  "Die Interfaces passten zu meiner Rolle.",
  "Die Begriffe in den Interfaces passten zu meiner Arbeitsweise.",
  "Ich konnte mein Fachwissen angemessen einbringen.",
  "Die Interfaces haben unnötiges Fachwissen vorausgesetzt.",
  "Die vorgeschlagenen Bewertungskriterien waren für meine Rolle sinnvoll.",
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
