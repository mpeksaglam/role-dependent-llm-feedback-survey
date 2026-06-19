import { SURVEY_STEPS } from "@/lib/types";
import { simulationConfig } from "@/config/simulationConfig";
import { questionConfig } from "./questionConfig";

// References simulationConfig and questionConfig
// Title is rendered into UI
// TODO add aufgabenbeschreibung
export const scenarioConfig = {
  [SURVEY_STEPS.TRAINING_TASK]: {
    title: "Trainingsaufgabe",
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
  },

  [SURVEY_STEPS.GEN_SCEN_1]: {
    title: "Szenario 1", // TODO change to Aufgabenuberschrift/anweisung?
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
  },

  [SURVEY_STEPS.GEN_SCEN_2]: {
    title: "Szenario 2",
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
  },

  [SURVEY_STEPS.GEN_SCEN_3]: {
    title: "Szenario 3",
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
  },

  [SURVEY_STEPS.ROLE_SPEC_SCEN_1]: {
    title: "Rollenspezifisches Interface",
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
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_2]: {
    title: "Rollenspez szen 2",
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
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_3]: {
    title: "Rollenspezifisch szen 3",
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
  },
};
