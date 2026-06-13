import { Condition, StepId, SURVEY_STEPS } from "@/lib/types";

export function buildParticipantFlow(): StepId[] {
  return Math.random() < 0.5 // random allocation
    ? [
        SURVEY_STEPS.INTRO,
        SURVEY_STEPS.PRE_SURVEY,
        SURVEY_STEPS.TRAINING_TASK,
        SURVEY_STEPS.GEN_SCEN_1,
        SURVEY_STEPS.GEN_SCEN_2,
        SURVEY_STEPS.GEN_SCEN_3,
        SURVEY_STEPS.ROLE_SPEC_SCEN_1,
        SURVEY_STEPS.ROLE_SPEC_SCEN_2,
        SURVEY_STEPS.ROLE_SPEC_SCEN_3,
        SURVEY_STEPS.OUTRO,
      ]
    : [
        SURVEY_STEPS.INTRO,
        SURVEY_STEPS.PRE_SURVEY,
        SURVEY_STEPS.TRAINING_TASK,
        SURVEY_STEPS.ROLE_SPEC_SCEN_1,
        SURVEY_STEPS.ROLE_SPEC_SCEN_2,
        SURVEY_STEPS.ROLE_SPEC_SCEN_3,
        SURVEY_STEPS.GEN_SCEN_1,
        SURVEY_STEPS.GEN_SCEN_2,
        SURVEY_STEPS.GEN_SCEN_3,
        SURVEY_STEPS.OUTRO,
      ];
}
