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
  },

  [SURVEY_STEPS.GEN_SCEN_2]: {
    title: "Szenario 2",
    simulation: simulationConfig.sim_vid1, // sim_vid2 later
    questions: {
      proc_exp: questionConfig.scen2GenericQuestions,
      robo_exp: questionConfig.scen2GenericQuestions,
    },
    condition: "gen",
  },

  [SURVEY_STEPS.GEN_SCEN_3]: {
    title: "Szenario 3",
    simulation: simulationConfig.sim_vids23, // change later
    questions: {
      proc_exp: questionConfig.scen3GenericQuestions,
      robo_exp: questionConfig.scen3GenericQuestions,
    },
    condition: "gen",
  },

  [SURVEY_STEPS.ROLE_SPEC_SCEN_1]: {
    title: "Rollenspezifisches Interface",
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.scen1ProcExpQuestions,
      robo_exp: questionConfig.scen1RoboExpQuestions,
    },
    condition: "role_spec",
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_2]: {
    title: "Rollenspez szen 2",
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.scen2ProcExpQuestions,
      robo_exp: questionConfig.scen2RoboExpQuestions,
    },
    condition: "role_spec",
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_3]: {
    title: "Rollenspezifisch szen 3",
    simulation: simulationConfig.sim_vids23,
    questions: {
      proc_exp: questionConfig.scen3ProcExpQuestions,
      robo_exp: questionConfig.scen3RoboExpQuestions,
    },
    condition: "role_spec",
  },
};
