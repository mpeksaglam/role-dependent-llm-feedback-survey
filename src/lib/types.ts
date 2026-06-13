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
export type LikertResponseType = "likert5" | "likert7";

export type FreeTextResponseType = "freeTextInput";

export type SelectionResponseType = "singleChoice";

// Options for SelectionResponseType
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

export type Question = LikertQuestion | FreeTextQuestion | SelectionQuestion;

export interface QuestionGroup {
  id: string;
  title: string;
  questions: Question[];
}

// NavigationButtons
export type NavigationType = "forward" | "back";

// Participants
export type UserRole = "proc_exp" | "robo_exp";

export type Condition = "gen" | "role_spec";

// Survey Engine
export type AnswerValue = number | string;

export type SurveyAnswers = Record<string, AnswerValue>;

export const SURVEY_STEPS = {
  INTRO: "intro",
  PRE_SURVEY: "pre_survey",

  TRAINING_TASK: "training_task",

  GEN_SCEN_1: "gen_scen_1",
  GEN_SCEN_2: "gen_scen_2",
  GEN_SCEN_3: "gen_scen_3",

  ROLE_SPEC_SCEN_1: "role_spec_scen_1",
  ROLE_SPEC_SCEN_2: "role_spec_scen_2",
  ROLE_SPEC_SCEN_3: "role_spec_scen_3",

  OUTRO: "outro",
} as const;

export type StepId = (typeof SURVEY_STEPS)[keyof typeof SURVEY_STEPS];

export interface SurveyState {
  currentStepId: StepId;
  prevStepIds: StepId[];
  answers: SurveyAnswers;
  userRole: UserRole | null;
  conditionOrder?: [Condition, Condition]; // A, B || B , A ;; is set right after initialization
  participantFlow: StepId[];
}

// TODO logging
export type SurveyEventType =
  | "condition_assigned"
  | "answer"
  | "next"
  | "back"
  | "role_selected"
  | "training_completed"
  | "scenario_started";
