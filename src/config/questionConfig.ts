import { QuestionGroup } from "@/lib/types";

export const questionConfig = {
  // ! Make sure to reference scenario changes in scenarioConfig

  dsgvoConsent: {
    id: "dsgvo_consent_qs",
    title: "DSGVO consent",
    questions: [
      {
        id: "dsgvo_consent",
        text: "Erklärung zur Teilnahme und zum Datenschutz:",
        responseType: "singleChoice",
        options: [
          {
            label:
              "Ich stimme der Einwilligungserklärung zu und möchte an der Studie teilnehmen",
            value: "accept",
          },
          {
            label: "Ich stimme nicht zu und lehne die Teilnahme ab",
            value: "reject",
          },
        ],
      },
    ],
  },

  preSurveyQuestions: {
    id: "pre_survey_qs",
    title: "Pre-Survey Questions",
    questions: [
      {
        id: "prof_background",
        text: "Was ist Ihr beruflicher Hintergrund?",
        responseType: "singleChoice",
        options: [
          { label: "Prozessexperte", value: "proc_exp" },
          { label: "Roboterexperte", value: "robo_exp" },
        ],
      },
      {
        id: "prev_assembly_experience",
        text: "Wie viel Erfahrung haben Sie mit Montageprozessen?",
        responseType: "likert5",
        leftLabel: "Keine Erfahrung",
        rightLabel: "Tägliche Nutzung",
      },
      {
        id: "prev_robo_experience",
        text: "Wie viel Erfahrung haben Sie mit Robotik/Cobots?",
        responseType: "likert5",
        leftLabel: "Keine Erfahrung",
        rightLabel: "Tägliche Nutzung",
      },
      {
        id: "prev_sim_experience",
        text: "Wie viel Erfahrung haben Sie mit Simulationen?",
        responseType: "likert5",
        leftLabel: "Keine Erfahrung",
        rightLabel: "Tägliche Nutzung",
      },
      {
        id: "prev_ai_experience",
        text: "Wie viel Erfahrung haben Sie mit KI- und Chat-Systemen?",
        responseType: "likert5",
        leftLabel: "Keine Erfahrung",
        rightLabel: "Tägliche Nutzung",
      },
    ],
  },
  trainingQuestions: {
    id: "training_qs",
    title: "Training Questions",
    questions: [
      {
        id: "training_q1_task_success",
        text: "Wie erfolgreich wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "Kein Erfolg",
        rightLabel: "Voller Erfolg",
      },
      {
        id: "training_q2_safety",
        text: "Wie sicher wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "Sehr unsicher",
        rightLabel: "Sehr sicher",
      },
    ],
  },

  scen1GenericQuestions: {
    id: "scen1_gen_qs",
    title: "Scenario 1 Generic Questions",
    questions: [
      {
        id: "scen1_gen_q1_task_success",
        text: "Wie erfolgreich wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "Kein Erfolg",
        rightLabel: "Voller Erfolg",
      },
      {
        id: "scen1_gen_q2_safety",
        text: "Wie sicher wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "Sehr unsicher",
        rightLabel: "Sehr sicher",
      },
    ],
  },

  scen2GenericQuestions: {
    id: "scen2_gen_qs",
    title: "Scenario 2 Generic Questions",
    questions: [
      {
        id: "scen2_gen_q1_task_success",
        text: "Wie erfolgreich wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "Kein Erfolg",
        rightLabel: "Voller Erfolg",
      },
      {
        id: "scen2_gen_q2_safety",
        text: "Wie sicher wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "Sehr unsicher",
        rightLabel: "Sehr sicher",
      },
    ],
  },

  scen3GenericQuestions: {
    id: "scen3_gen_qs",
    title: "Scenario 3 Generic Questions",
    questions: [
      {
        id: "scen3_gen_q1_reason_pref",
        text: "Bitte begründen Sie Ihre Auswahl kurz:",
        responseType: "freeTextInput",
      },
      {
        id: "scen3_gen_q2_task_success_varA",
        text: "Wie erfolgreich wurde die Aufgabe im linken Video ausgeführt?",
        responseType: "likert7",
        leftLabel: "Kein Erfolg",
        rightLabel: "Voller Erfolg",
      },
      {
        id: "scen3_gen_q3_safety_varA",
        text: "Wie sicher wurde die Aufgabe im linken Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "Sehr unsicher",
        rightLabel: "Sehr sicher",
      },
      {
        id: "scen3_gen_q4_task_success_varB",
        text: "Wie erfolgreich wurde die Aufgabe im rechten Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "Kein Erfolg",
        rightLabel: "Voller Erfolg",
      },
      {
        id: "scen3_gen_q5_safety_varB",
        text: "Wie sicher wurde die Aufgabe im rechten Video ausgeführt?",
        responseType: "likert7",
        leftLabel: "Sehr unsicher",
        rightLabel: "Sehr sicher",
      },
    ],
  },

  scen1ProcExQuestions: {
    id: "scen1_procex_qs",
    title: "Scenario 1 Process Expert Questions",
    questions: [],
  },
  scen2ProcExQuestions: {
    id: "scen2_procex_qs",
    title: "Scenario 2 Process Expert Questions",
    questions: [],
  },
  scen3ProcExQuestions: {
    id: "scen3_procex_qs",
    title: "Scenario 3 Process Expert Questions",
    questions: [],
  },

  scen1RobExQuestions: {
    id: "scen1_robex_qs",
    title: "Scenario 1 Robot Expert Questions",
    questions: [],
  },
  scen2RobExQuestions: {
    id: "scen2_robex_qs",
    title: "Scenario 2 Robot Expert Questions",
    questions: [],
  },

  scen3RobExQuestions: {
    id: "scen3_robex_qs",
    title: "Scenario 3 Robot Expert Questions",
    questions: [],
  },

  susQuestions: {
    id: "sus_qs",
    title: "System Usability Scale",
    questions: [],
  },

  nasaQuestions: {
    id: "nasa_tlx_qs",
    title: "NASA TLX",
    questions: [],
  },
} as const satisfies Record<string, QuestionGroup>;
