
export type UserRole = 
  | "generic" 
  | "procExp" 
  | "roboExp" 
  | null

// A == generic, B == role-specific
export type Condition = "A" | "B"

export type StepType =
  | "intro"
  | "roleSelection"
  | "trainingTask"
  | "taskBlock"
  | "questionnaire"
  | "comparison";

export interface SurveyStepBase {
  id: string;
  type: StepType;
}

export interface IntroStep extends SurveyStepBase {
  type: "intro";
}

export interface RoleSelectionStep extends SurveyStepBase {
  type: "roleSelection";
}

export interface TrainingTaskStep extends SurveyStepBase {
  type: "trainingTask";
}

export interface TaskBlockStep extends SurveyStepBase {
  type: "taskBlock";
  condition: Condition;
  taskCount: number; // hier: 3
}

export interface QuestionnaireStep extends SurveyStepBase {
  type: "questionnaire";
  condition: Condition;
  instruments: ("SUS" | "NASA_TLX" | "ROLE_FIT")[];
}

export interface ComparisonStep extends SurveyStepBase {
  type: "comparison";
}

export type SurveyStep =
  | IntroStep
  | RoleSelectionStep
  | TrainingTaskStep
  | TaskBlockStep
  | QuestionnaireStep
  | ComparisonStep;


export function assignConditionOrder(): [Condition, Condition] {
  return Math.random() < 0.5 ? ["A", "B"] : ["B", "A"]
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

    // Block 1 (A oder B)
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

    // Block 2 (A oder B)
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