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