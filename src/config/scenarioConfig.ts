import { SURVEY_STEPS } from "@/lib/types";
import { simulationConfig } from "@/config/simulationConfig";
import { questionConfig } from "./questionConfig";

// References simulationConfig and questionConfig
export const scenarioConfig = {
  [SURVEY_STEPS.TRAINING_TASK]: {
    title: {
      proc_exp: "Trainingsaufgabe",
      robo_exp: "Trainingsaufgabe",
    },
    taskDescr: {
      proc_exp: "Bitte machen Sie sich mit der Umgebung vertraut.",
      robo_exp: "Bitte machen Sie sich mit der Umgebung vertraut.",
    },
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.trainingQuestions,
      robo_exp: questionConfig.trainingQuestions,
    },
    condition: "gen",
    chatMode: "always",
    rejectQuestionIds: {
      proc_exp: undefined,
      robo_exp: undefined,
    },
    systemPromptFile: {
      proc_exp: "",
      robo_exp: "",
    },
  },

  [SURVEY_STEPS.GEN_SCEN_1]: {
    title: {
      proc_exp: "Feedback zur Roboterhandlung",
      robo_exp: "Feedback zur Roboterhandlung",
    },
    taskDescr: {
      proc_exp: "Bitte bewerten Sie die gezeigte Handlung.",
      robo_exp: "Bitte bewerten Sie die gezeigte Handlung.",
    },
    simulation: simulationConfig.sim_vid1,
    questions: {
      // Always same in generic condition
      proc_exp: questionConfig.scen1GenericQuestions,
      robo_exp: questionConfig.scen1GenericQuestions,
    },
    condition: "gen",
    chatMode: "onReject",
    rejectQuestionIds: {
      proc_exp: "scen1_gen_q3_action_acceptable",
      robo_exp: "scen1_gen_q3_action_acceptable",
    },
    systemPromptFile: {
      proc_exp: "system_prompts_generic_scenario1.txt",
      robo_exp: "system_prompts_generic_scenario1.txt",
    },
  },

  [SURVEY_STEPS.GEN_SCEN_2]: {
    title: {
      proc_exp: "Korrektur der Roboterhandlung",
      robo_exp: "Korrektur der Roboterhandlung",
    },
    taskDescr: {
      proc_exp:
        "Beschreiben Sie, was an der gezeigten Handlung angepasst werden sollte.",
      robo_exp:
        "Beschreiben Sie, was an der gezeigten Handlung angepasst werden sollte.",
    },
    simulation: simulationConfig.sim_vid1, // sim_vid2 later
    questions: {
      proc_exp: questionConfig.scen2GenericQuestions,
      robo_exp: questionConfig.scen2GenericQuestions,
    },
    condition: "gen",
    chatMode: "always",
    rejectQuestionIds: {
      proc_exp: undefined,
      robo_exp: undefined,
    },
    systemPromptFile: {
      proc_exp: "system_prompts_generic_scenario2.txt",
      robo_exp: "system_prompts_generic_scenario2.txt",
    },
  },

  [SURVEY_STEPS.GEN_SCEN_3]: {
    title: {
      proc_exp: "Präferenz zwischen zwei Varianten",
      robo_exp: "Präferenz zwischen zwei Varianten",
    },
    taskDescr: {
      proc_exp:
        "Vergleichen Sie die beiden Varianten und wählen Sie die Ausführung, die sich besser eignet.",
      robo_exp:
        "Vergleichen Sie die beiden Varianten und wählen Sie die Ausführung, die sich besser eignet.",
    },
    simulation: simulationConfig.sim_vids23, // change later
    questions: {
      proc_exp: questionConfig.scen3GenericQuestions,
      robo_exp: questionConfig.scen3GenericQuestions,
    },
    condition: "gen",
    chatMode: "none",
    rejectQuestionIds: {
      proc_exp: undefined,
      robo_exp: undefined,
    },
    systemPromptFile: {
      proc_exp: "system_prompts_generic_scenario3.txt",
      robo_exp: "system_prompts_generic_scenario3.txt",
    },
  },

  [SURVEY_STEPS.ROLE_SPEC_SCEN_1]: {
    title: {
      proc_exp: "Prozessfeedback zur Montagehandlung",
      robo_exp: "Technisches Feedback zur Roboterbewegung",
    },
    taskDescr: {
      proc_exp:
        "Bewerten Sie, ob der gezeigte Montageschritt aus Prozesssicht sinnvoll, sicher und praktikabel ist.",
      robo_exp:
        "Bewerten Sie, ob die Bewegung technisch geeignet und sicher ausführbar ist.",
    },
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.scen1ProcExpQuestions,
      robo_exp: questionConfig.scen1RoboExpQuestions,
    },
    condition: "role_spec",
    chatMode: "onReject",
    rejectQuestionIds: {
      proc_exp: "scen1_procexp_q4_match_with_process",
      robo_exp: "scen1_roboexp_q4_movement_acceptable",
    },
    systemPromptFile: {
      proc_exp: "system_prompts_processexpert_scenario1.txt",
      robo_exp: "system_prompts_robotexpert_scenario1.txt",
    },
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_2]: {
    title: {
      proc_exp: "Prozesskorrektur zur Montagehandlung",
      robo_exp: "Technische Korrektur zur Roboterbewegung",
    },
    taskDescr: {
      proc_exp:
        "Beschreiben Sie, was aus Prozesssicht angepasst werden sollte.",
      robo_exp: "Beschreiben Sie, was technisch angepasst werden sollte.",
    },
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.scen2ProcExpQuestions,
      robo_exp: questionConfig.scen2RoboExpQuestions,
    },
    condition: "role_spec",
    chatMode: "always",
    rejectQuestionIds: {
      proc_exp: undefined,
      robo_exp: undefined,
    },
    systemPromptFile: {
      proc_exp: "system_prompts_processexpert_scenario2.txt",
      robo_exp: "system_prompts_robotexpert_scenario2.txt",
    },
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_3]: {
    title: {
      proc_exp: "Prozesspräferenz zwischen zwei Montagevarianten",
      robo_exp: "Technische Präferenz zwischen zwei Montagevarianten",
    },
    taskDescr: {
      proc_exp:
        "Vergleichen Sie die beiden Varianten aus Prozesssicht für die Montage.",
      robo_exp: "Vergleichen Sie die beiden Varianten aus technischer Sicht.",
    },
    simulation: simulationConfig.sim_vids23,
    questions: {
      proc_exp: questionConfig.scen3ProcExpQuestions,
      robo_exp: questionConfig.scen3RoboExpQuestions,
    },
    condition: "role_spec",
    chatMode: "none",
    rejectQuestionIds: {
      proc_exp: undefined,
      robo_exp: undefined,
    },
    systemPromptFile: {
      proc_exp: "system_prompts_processexpert_scenario3.txt",
      robo_exp: "system_prompts_robotexpert_scenario3.txt",
    },
  },
};
