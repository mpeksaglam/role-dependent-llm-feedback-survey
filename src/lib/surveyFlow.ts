
import type {
    Condition, 
    SurveyStep,
} from "@/lib/types"


export function assignConditionOrder(): [Condition, Condition] {
  return Math.random() < 0.5 ? ["generic", "roleSpecific"] : ["roleSpecific", "generic"]
}

export function buildSurveyFlow(
  conditionOrder: [Condition, Condition]
): SurveyStep[] {
  const [first, second] = conditionOrder

  return [
    {
      id: "intro",
      type: "intro",
    },

    {
      id: "role-selection",
      type: "roleSelection",
    },

    {
      id: "training",
      type: "trainingTask",
    },

    // Block 1 (generic oder roleSpecific)
    {
      id: "task-block-1",
      type: "taskBlock",
      condition: first,
      taskCount: 3,
    },

    {
      id: "questionnaire-1",
      type: "questionnaire",
      condition: first,
      instruments: ["SUS", "NASA_TLX", "ROLE_FIT"],
    },

    // Block 2 (complement zu Block 1)
    {
      id: "task-block-2",
      type: "taskBlock",
      condition: second,
      taskCount: 3,
    },

    {
      id: "questionnaire-2",
      type: "questionnaire",
      condition: second,
      instruments: ["SUS", "NASA_TLX", "ROLE_FIT"],
    },

    {
      id: "comparison",
      type: "comparison",
    },
  ]
}