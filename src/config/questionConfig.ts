import { QuestionGroup } from "@/lib/types";
import { susQuestionsA, susQuestionsB } from "./questionnaires/sus";
import { nasaQuestionsA, nasaQuestionsB } from "./questionnaires/nasa";
import { roleFitQuestionsA, roleFitQuestionsB } from "./questionnaires/roleFit";

export const questionConfig = {
  // ! Make sure to adjust scenarioConfig if making changes for scenarios !
  dsgvoConsent: {
    id: "dsgvo_consent_qs",
    title: "DSGVO Zustimmung",
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
    title: "Vorerhebung und Rollenklärung",
    questions: [
      {
        id: "prof_background",
        text: "Was ist Ihr beruflicher Hintergrund?",
        responseType: "freeTextInput",
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
  // ! Make sure to adjust scenarioConfig if making changes for scenarios !
  trainingQuestions: {
    id: "training_qs",
    title: "Trainingsfragen",
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
    title: "Szenario 1 Generische Fragen",
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
    title: "Szenario 2 Generische Fragen",
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
    title: "Szenario 3 Generische Fragen",
    questions: [
      {
        id: "scen3_gen_q1_reason_pref",
        text: "Bitte begründen Sie Ihre Auswahl kurz:",
        responseType: "freeTextInput",
      },
      {
        id: "scen3_gen_q2_task_success_varA",
        text: "Wie erfolgreich wurde die Aufgabe im linken Video ausgeführt?",
        responseType: "likert5",
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
        responseType: "likert5",
        leftLabel: "Sehr unsicher",
        rightLabel: "Sehr sicher",
      },
    ],
  },

  scen1ProcExQuestions: {
    id: "scen1_procex_qs",
    title: "Szenario 1 Prozessexperte Fragen",
    questions: [],
  },
  scen2ProcExQuestions: {
    id: "scen2_procex_qs",
    title: "Szenario 2 Prozessexperte Fragen",
    questions: [],
  },
  scen3ProcExQuestions: {
    id: "scen3_procex_qs",
    title: "Szenario 3 Prozessexperte Fragen",
    questions: [],
  },

  scen1RobExQuestions: {
    id: "scen1_robex_qs",
    title: "Szenario 1 Robotikexperte Fragen",
    questions: [],
  },
  scen2RobExQuestions: {
    id: "scen2_robex_qs",
    title: "Szenario 2 Robotikexperte Fragen",
    questions: [],
  },

  scen3RobExQuestions: {
    id: "scen3_robex_qs",
    title: "Szenario 3 Robotikexperte Fragen",
    questions: [],
  },
  questionnairesAQuestions: {
    id: "quest_a_qs",
    title: "Fragebögen A Fragen",
    questions: [
      ...susQuestionsA.questions,
      ...nasaQuestionsA.questions,
      ...roleFitQuestionsA.questions,
    ],
  },
  questionnairesBQuestions: {
    id: "quest_b_qs",
    title: "Fragebögen B Fragen",
    questions: [
      ...susQuestionsB.questions,
      ...nasaQuestionsB.questions,
      ...roleFitQuestionsB.questions,
    ],
  },

  susQuestionsA: susQuestionsA,
  susQuestionsB: susQuestionsB,
  nasaQuestionsA: nasaQuestionsA,
  nasaQuestionsB: nasaQuestionsB,
  roleFitQuestionsA: roleFitQuestionsA,
  roleFitQuestionsB: roleFitQuestionsB,

  comparisonQuestions: {
    id: "comparison_qs",
    title: "Vergleichsfragen",
    questions: [
      {
        id: "comp_1",
        text: "Welches Interface war insgesamt hilfreicher?",
        responseType: "singleChoice",
        options: [
          { label: "Generisches Interface", value: "gen_int" },
          { label: "Rollenbasiertes Interface", value: "role_int" },
          { label: "Kein Unterschied", value: "none" },
        ],
      },
      {
        id: "comp_2",
        text: "Mit welchem Interface konnten Sie Feedback schneller geben?",
        responseType: "singleChoice",
        options: [
          { label: "Generisch", value: "gen_int" },
          { label: "Rollenbasiert", value: "role_int" },
          { label: "Kein Unterschied", value: "none" },
        ],
      },
      {
        id: "comp_3",
        text: "Welches Interface passte besser zu Ihrer Rolle?",
        responseType: "singleChoice",
        options: [
          { label: "Generisch", value: "gen_int" },
          { label: "Rollenbasiert", value: "role_int" },
          { label: "Kein Unterschied", value: "none" },
        ],
      },
      {
        id: "comp_4",
        text: "Welches Interface würden Sie in der Praxis bevorzugen?",
        responseType: "singleChoice",
        options: [
          { label: "Generisch", value: "gen_int" },
          { label: "Rollenbasiert", value: "role_int" },
          { label: "Kein Unterschied", value: "none" },
        ],
      },
    ],
  },
} as const satisfies Record<string, QuestionGroup>;
