import { FreeTextInput } from "@/components/responses/FreeTextInput";
import { Option } from "lucide-react";

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
  
export type SelectionResponseType =
  "singleChoice";

// Options for Selection Choice
export type SelectionOption = {
  label: string;
  value: string;
};

export type ResponseType =
  | LikertResponseType
  | FreeTextResponseType
  | SelectionResponseType;


interface BaseQuestion {
  id: string;
  text: string;
  required?: boolean;
}

export interface LikertQuestion extends BaseQuestion {
  responseType: LikertResponseType;
  leftLabel: string;
  rightLabel: string;
  reverseScored?: boolean;
}

export interface FreeTextQuestion extends BaseQuestion {
  responseType: FreeTextResponseType;
}

export interface SelectionQuestion extends BaseQuestion {
  responseType: SelectionResponseType;
  options: SelectionOption[];
}

export type Question =
  | LikertQuestion 
  | FreeTextQuestion 
  | SelectionQuestion;


export interface QuestionGroup {
  id: string;
  title: string;
  questions: Question[];
}

// Question State
export type AnswerValue =
  | number
  | string;

export type SurveyAnswers = 
  Record<string, AnswerValue>;

// Buttons
export type NavigationType =
  | "forward"
  | "back"