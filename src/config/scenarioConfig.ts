import { SURVEY_STEPS } from "@/lib/types";
import { simulationConfig } from "@/config/simulationConfig";
import { questionConfig } from "./questionConfig";

// References simulationConfig and questionConfig

export const scenarioConfig = {
  [SURVEY_STEPS.GEN_SCEN_1]: {
    title: "Generic Scenario 1", // TODO change to Aufgabenuberschrift/anweisung?
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.scen1GenericQuestions,
      robo_exp: questionConfig.scen1GenericQuestions,
    },
    condition: "gen",
  },

  [SURVEY_STEPS.GEN_SCEN_2]: {
    title: "Generic Scenario 2",
    simulation: simulationConfig.sim_vid1, // sim_vid2 later
    questions: {
      proc_exp: questionConfig.scen2GenericQuestions,
      robo_exp: questionConfig.scen2GenericQuestions,
    },
    condition: "gen",
  },

  [SURVEY_STEPS.GEN_SCEN_3]: {
    title: "Generic Scenario 3",
    simulation: simulationConfig.sim_vids23, // change later
    questions: {
      proc_exp: questionConfig.scen3GenericQuestions,
      robo_exp: questionConfig.scen3GenericQuestions,
    },
    condition: "gen",
  },

  [SURVEY_STEPS.ROLE_SPEC_SCEN_1]: {
    title: "xz",
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.scen1ProcExQuestions,
      robo_exp: questionConfig.scen1RobExQuestions,
    },
    condition: "role_spec",
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_2]: {
    title: "xz",
    simulation: simulationConfig.sim_vid1,
    questions: {
      proc_exp: questionConfig.scen2ProcExQuestions,
      robo_exp: questionConfig.scen2RobExQuestions,
    },
    condition: "role_spec",
  },
  [SURVEY_STEPS.ROLE_SPEC_SCEN_3]: {
    title: "xz",
    simulation: simulationConfig.sim_vids23,
    questions: {
      proc_exp: questionConfig.scen3ProcExQuestions,
      robo_exp: questionConfig.scen3RobExQuestions,
    },
    condition: "role_spec",
  },
};
