import { FreeTextInput } from "@/components/responses/FreeTextInput";

// surveyFlow 
export type UserRole = 
  | "generic" 
  | "procExp" 
  | "roboExp" 
  | null;


export type Condition = "generic" | "roleSpecific";

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
  instruments: ("SUS" | "NASA_TLX" | "ROLE_FIT")[];   // TODO remove probably
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

// simulationConfig  
export type SimulationVideo =
  | {
      id: string;
      title: string;
      type: "single";
      videoUrl: string;
    }
  | {
      id: string;
      title: string;
      type: "comparison";
      videoUrls: [string, string];
    };

// Question Types
export type LikertResponseType =
  | "likert5"
  | "likert7";

export type FreeTextResponseType =
  "freeTextInput";

export type ResponseType =
  | LikertResponseType
  | FreeTextResponseType;

export type AnswerValue =
  | number
  | string;

export type SurveyAnswer = 
  Record<string, AnswerValue>;

interface BaseQuestion {
  id: string;
  text: string;
  required?: boolean;
  reverseScored?: boolean;
}

export interface FreeTextQuestion extends BaseQuestion {
  responseType: "freeTextInput";
}

export interface ScaleQuestion extends BaseQuestion {
  responseType: "likert5" | "likert7";
  leftLabel: string;
  rightLabel: string;
}

export type Question = FreeTextQuestion | ScaleQuestion;


export interface QuestionGroup {
  id: string;
  title: string;
  questions: Question[];
}

// Buttons
export type NavigationType =
  | "forward"
  | "back"