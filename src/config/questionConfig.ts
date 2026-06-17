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
        leftLabel: "keine Erfahrung",
        rightLabel: "tägliche Nutzung",
      },
      {
        id: "prev_robo_experience",
        text: "Wie viel Erfahrung haben Sie mit Robotik/Cobots?",
        responseType: "likert5",
        leftLabel: "keine Erfahrung",
        rightLabel: "tägliche Nutzung",
      },
      {
        id: "prev_sim_experience",
        text: "Wie viel Erfahrung haben Sie mit Simulationen?",
        responseType: "likert5",
        leftLabel: "keine Erfahrung",
        rightLabel: "tägliche Nutzung",
      },
      {
        id: "prev_ai_experience",
        text: "Wie viel Erfahrung haben Sie mit KI- und Chat-Systemen?",
        responseType: "likert5",
        leftLabel: "keine Erfahrung",
        rightLabel: "tägliche Nutzung",
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
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "training_q2_safety",
        text: "Wie sicher wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
      {
        id: "training_q3_action_acceptable",
        text: "Ist die gezeigte Handlung akzeptabel?",
        responseType: "singleChoice",
        options: [
          { label: "Annehmen", value: "action_accepted" },
          { label: "Ablehnen", value: "action_rejected" },
        ],
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
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "scen1_gen_q2_safety",
        text: "Wie sicher wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
      {
        id: "scen1_gen_q3_action_acceptable",
        text: "Ist die gezeigte Handlung akzeptabel?",
        responseType: "singleChoice",
        options: [
          { label: "Annehmen", value: "action_accepted" },
          { label: "Ablehnen", value: "action_rejected" },
        ],
      },
    ],
  },
  // TODO change scenarios 2 everywhere
  scen2GenericQuestions: {
    id: "scen2_gen_qs",
    title: "Szenario 2 Generische Fragen",
    questions: [
      {
        id: "scen2_gen_q1_task_success",
        text: "Wie erfolgreich wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "scen2_gen_q2_safety",
        text: "Wie sicher wurde die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "Sehr sicher",
      },
    ],
  },

  scen3GenericQuestions: {
    id: "scen3_gen_qs",
    title: "Szenario 3 Generische Fragen",
    questions: [
      {
        id: "scen3_gen_q1_variant_pref",
        text: "Welche Variante ist besser?",
        responseType: "singleChoice",
        options: [
          { label: "Variante A", value: "variant_a_preferred" },
          { label: "Variante B", value: "variant_b_preferred" },
          { label: "Kein klarer Unterschied", value: "no_preference" },
        ],
      },
      {
        id: "scen3_gen_q2_reason_pref",
        text: "Bitte begründen Sie Ihre Auswahl kurz:",
        responseType: "freeTextInput",
      },
      {
        id: "scen3_gen_q3_task_success_varA",
        text: "Wie erfolgreich wurde die Aufgabe im linken Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "scen3_gen_q4_safety_varA",
        text: "Wie sicher wurde die Aufgabe im linken Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
      {
        id: "scen3_gen_q5_task_success_varB",
        text: "Wie erfolgreich wurde die Aufgabe im rechten Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "scen3_gen_q6_safety_varB",
        text: "Wie sicher wurde die Aufgabe im rechten Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
    ],
  },

  scen1ProcExpQuestions: {
    id: "scen1_procexp_qs",
    title: "Szenario 1 Prozessexperte Fragen",
    questions: [
      {
        id: "scen1_procexp_q1_assembly_success",
        text: "Wie erfolgreich war der Montageschritt?",
        responseType: "likert5",
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "scen1_procexp_q2_efficiency",
        text: "Wie effizient war der Ablauf der Aufgabe?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht effizient",
        rightLabel: "sehr effizient",
      },
      {
        id: "scen1_procexp_q3_assembly_safety",
        text: "Wie sicher wurde die Aufgabe im Montagekontext ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
      {
        id: "scen1_procexp_q4_match_with_process",
        text: "Passt dieser Montageschritt zum Prozess?",
        responseType: "singleChoice",
        options: [
          { label: "Prozessschritt passt", value: "process_match" },
          { label: "Prozessschritt anpassen", value: "process_no_match" },
        ],
      },
    ],
  },
  scen2ProcExpQuestions: {
    id: "scen2_procexp_qs",
    title: "Szenario 2 Prozessexperte Fragen",
    questions: [],
  },
  scen3ProcExpQuestions: {
    id: "scen3_procexp_qs",
    title: "Szenario 3 Prozessexperte Fragen",
    questions: [
      {
        id: "scen3_procexp_q1_variant_pref",
        text: "Welche Variante ist aus Prozesssicht besser?",
        responseType: "singleChoice",
        options: [
          { label: "Variante A", value: "variant_a_preferred" },
          { label: "Variante B", value: "variant_b_preferred" },
          { label: "Kein klarer Unterschied", value: "no_preference" },
        ],
      },
      {
        id: "scen3_procexp_q2_reason_pref",
        text: "Bitte begründen Sie Ihre Auswahl aus Prozesssicht kurz:",
        responseType: "freeTextInput",
      },
      {
        id: "scen3_procexp_q3_assembly_success_varA",
        text: "Wie erfolgreich wurde der Montageschritt im linken Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "scen3_procexp_q4_efficiency_varA",
        text: "Wie effizient war der Ablauf im linken Video?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht effizient",
        rightLabel: "sehr effizient",
      },
      {
        id: "scen3_procexp_q5_safety_varA",
        text: "Wie sicher wurde die Aufgabe im Montagekontext im linken Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
      {
        id: "scen3_procexp_q6_assembly_success_varB",
        text: "Wie erfolgreich wurde der Montageschritt im rechten Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt kein Erfolg",
        rightLabel: "bestes Ergebnis",
      },
      {
        id: "scen3_procexp_q7_efficiency_varB",
        text: "Wie effizient war der Ablauf im rechten Video?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht effizient",
        rightLabel: "sehr effizient",
      },
      {
        id: "scen3_procexp_q8_safety_varB",
        text: "Wie sicher wurde die Aufgabe im Montagekontext im rechten Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
    ],
  },

  scen1RoboExpQuestions: {
    id: "scen1_roboexp_qs",
    title: "Szenario 1 Robotikexperte Fragen",
    questions: [
      {
        id: "scen1_roboexp_q1_accuracy_tcp",
        text: "Wie bewerten Sie die Zielgenauigkeit des Tool-Center-Point (TCP)?",
        responseType: "likert5",
        leftLabel: "überhaupt keine Zielgenauigkeit",
        rightLabel: "sehr hohe Zielgenauigkeit",
      },
      {
        id: "scen1_roboexp_q2_movement_quality",
        text: "Wie bewerten Sie die Bewegungsqualität des Roboters?",
        responseType: "likert5",
        leftLabel: "sehr schlechte Bewegungsqualität",
        rightLabel: "sehr hohe Bewegungsqualität",
      },
      {
        id: "scen1_roboexp_q3_robotic_safety",
        text: "Wie sicher hat der Roboter die Aufgabe ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
      {
        id: "scen1_roboexp_q4_movement_acceptable",
        text: "Ist die gezeigte Bewegung technisch akzeptabel?",
        responseType: "singleChoice",
        options: [
          { label: "Bewegung akzeptieren", value: "movement_accepted" },
          { label: "Bewegung anpassen", value: "movement_rejected" },
        ],
      },
    ],
  },
  scen2RoboExpQuestions: {
    id: "scen2_roboexp_qs",
    title: "Szenario 2 Robotikexperte Fragen",
    questions: [],
  },

  scen3RoboExpQuestions: {
    id: "scen3_roboexp_qs",
    title: "Szenario 3 Robotikexperte Fragen",
    questions: [
      {
        id: "scen3_roboexp_q1_variant_pref",
        text: "Welche Variante ist technisch besser?",
        responseType: "singleChoice",
        options: [
          { label: "Variante A", value: "variant_a_preferred" },
          { label: "Variante B", value: "variant_b_preferred" },
          { label: "Kein klarer Unterschied", value: "no_preference" },
        ],
      },
      {
        id: "scen3_roboexp_q2_reason_pref",
        text: "Bitte begründen Sie Ihre Auswahl aus technischer Sicht kurz:",
        responseType: "freeTextInput",
      },
      {
        id: "scen3_roboexp_q3_accuracy_tcp_varA",
        text: "Wie bewerten Sie die Zielgenauigkeit des TCP im linken Video?",
        responseType: "likert5",
        leftLabel: "überhaupt keine Zielgenauigkeit",
        rightLabel: "sehr hohe Zielgenauigkeit",
      },
      {
        id: "scen3_roboexp_q4_efficiency_varA",
        text: "Wie bewerten Sie die Bewegungsqualität des Roboters im linken Video?",
        responseType: "likert5",
        leftLabel: "sehr schlechte Bewegungsqualität",
        rightLabel: "sehr hohe Bewegungsqualität",
      },
      {
        id: "scen3_roboexp_q5_safety_varA",
        text: "Wie sicher hat der Roboter die Aufgabe im linken Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
      {
        id: "scen3_roboexp_q6_accuracy_tcp_varB",
        text: "Wie bewerten Sie die Zielgenauigkeit des TCP im rechten Video?",
        responseType: "likert5",
        leftLabel: "überhaupt keine Zielgenauigkeit",
        rightLabel: "sehr hohe Zielgenauigkeit",
      },
      {
        id: "scen3_roboexp_q7_efficiency_varB",
        text: "Wie bewerten Sie die Bewegungsqualität des Roboters im rechten Video?",
        responseType: "likert5",
        leftLabel: "sehr schlechte Bewegungsqualität",
        rightLabel: "sehr hohe Bewegungsqualität",
      },
      {
        id: "scen3_roboexp_q8_safety_varB",
        text: "Wie sicher hat der Roboter die Aufgabe im rechten Video ausgeführt?",
        responseType: "likert5",
        leftLabel: "überhaupt nicht sicher",
        rightLabel: "sehr sicher",
      },
    ],
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
          { label: "Generisches Interface", value: "gen_int" },
          { label: "Rollenbasiertes Interface", value: "role_int" },
          { label: "Kein Unterschied", value: "none" },
        ],
      },
      {
        id: "comp_3",
        text: "Welches Interface passte besser zu Ihrer Rolle?",
        responseType: "singleChoice",
        options: [
          { label: "Generisches Interface", value: "gen_int" },
          { label: "Rollenbasiertes Interface", value: "role_int" },
          { label: "Kein Unterschied", value: "none" },
        ],
      },
      {
        id: "comp_4",
        text: "Welches Interface würden Sie in der Praxis bevorzugen?",
        responseType: "singleChoice",
        options: [
          { label: "Generisches Interface", value: "gen_int" },
          { label: "Rollenbasiertes Interface", value: "role_int" },
          { label: "Kein Unterschied", value: "none" },
        ],
      },
      {
        id: "comp_5",
        text: "Was war unklar oder störend?",
        responseType: "freeTextInput",
      },
      {
        id: "comp_6",
        text: "Würden Sie eher Buttons, Ratings oder Freitext nutzen?",
        responseType: "freeTextInput",
      },
    ],
  },
} as const satisfies Record<string, QuestionGroup>;
