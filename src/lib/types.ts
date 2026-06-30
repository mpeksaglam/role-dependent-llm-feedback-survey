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
      videoUrls: readonly [string, string];
    };

// Question Types
export type LikertResponseType = "likert5" | "likert11";

export type FreeTextResponseType = "freeTextInput";

export type SelectionResponseType = "singleChoice";

export type ResponseType =
  LikertResponseType | FreeTextResponseType | SelectionResponseType;

interface BaseQuestion {
  id: string;
  text: string;
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
// Options for SelectionQuestion
export type SelectionOption = {
  label: string;
  value: string;
};

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
export type NavigationType = "forward" | "back" | "send_survey";

// Participants
export type UserRole = "proc_exp" | "robo_exp";

export type Condition = "gen" | "role_spec";

// Survey Engine
export type AnswerValue = number | string;

export type SurveyAnswers = Record<string, AnswerValue>;

// ! adjust buildParticipantFlow, logs if changed !
export const SURVEY_STEPS = {
  INTRO: "intro",
  PRE_SURVEY: "pre_survey",
  TRAINING_INFO: "training_info",
  TRAINING_TASK: "training_task",
  TRAINING_FINISHED: "training_finished",

  GEN_SCEN_1: "gen_scen_1",
  GEN_SCEN_2: "gen_scen_2",
  GEN_SCEN_3: "gen_scen_3",
  CONDITION_SWITCH: "condition_switch",
  ROLE_SPEC_SCEN_1: "role_spec_scen_1",
  ROLE_SPEC_SCEN_2: "role_spec_scen_2",
  ROLE_SPEC_SCEN_3: "role_spec_scen_3",

  QUESTIONNAIRES_A: "questionnaire_A", // after condition A and B respectively
  QUESTIONNAIRES_B: "questionnaire_B",

  COMPARISON_QUESTIONS: "comparison_questions",
  OUTRO: "outro",
} as const;

export type StepId = (typeof SURVEY_STEPS)[keyof typeof SURVEY_STEPS];

// TRAINING_TASK included here because rendering is similar to scenarioScreen
export type ScenarioStepId =
  | typeof SURVEY_STEPS.TRAINING_TASK
  | typeof SURVEY_STEPS.GEN_SCEN_1
  | typeof SURVEY_STEPS.GEN_SCEN_2
  | typeof SURVEY_STEPS.GEN_SCEN_3
  | typeof SURVEY_STEPS.ROLE_SPEC_SCEN_1
  | typeof SURVEY_STEPS.ROLE_SPEC_SCEN_2
  | typeof SURVEY_STEPS.ROLE_SPEC_SCEN_3;

const SCENARIO_STEPS = [
  SURVEY_STEPS.TRAINING_TASK,
  SURVEY_STEPS.GEN_SCEN_1,
  SURVEY_STEPS.GEN_SCEN_2,
  SURVEY_STEPS.GEN_SCEN_3,
  SURVEY_STEPS.ROLE_SPEC_SCEN_1,
  SURVEY_STEPS.ROLE_SPEC_SCEN_2,
  SURVEY_STEPS.ROLE_SPEC_SCEN_3,
] as const;
// function to check if a step is a REAL scenarioStep (not TRAINING_TASK)
export function isScenarioStep(stepId: StepId): stepId is ScenarioStepId {
  return (
    stepId !== SURVEY_STEPS.TRAINING_TASK &&
    SCENARIO_STEPS.includes(stepId as ScenarioStepId)
  );
}

export interface SurveyState {
  currentStepId: StepId;
  participantId: string | null;
  answers: SurveyAnswers;
  userRole: UserRole | null; // allocated after presurvey
  conditionOrder: [Condition, Condition] | null; // [gen, role_spec || role_spec , gen]
  participantFlow: StepId[];
  chatHistory: Partial<Record<ScenarioStepId, ChatMessage[]>>;
  llmResponses: Partial<Record<ScenarioStepId, LlmResponse[]>>;
  scenarioStartTimestamp: number | null;
}

// Chat
export interface ChatMessage {
  id: string;
  role: "user" | "assistant"; // "role" used for openAI API, user or LLM
  content: string;
}

export type ChatMode = "none" | "always" | "onReject";

export type ChatRequest = {
  scenarioId: ScenarioStepId;
  userRole: UserRole;
  messages: ChatMessage[];
  selectedAnswers: Record<string, unknown>; // answers are <q.id, string || number>
};

export type ChatResponse = {
  message: string;
};

export interface LlmResponse {
  [key: string]: unknown;
}

// Logging
export type LogEvent =
  | "survey_started"
  | "session_restored"
  | "consent_accepted"
  | "consent_rejected"
  | "pre_survey_completed"
  | "training_completed"
  | "scenario_completed"
  | "questionnaire_completed"
  | "comparison_questions_completed"
  | "survey_completed"
  | "user_navigated_back";
