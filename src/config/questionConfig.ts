import { Question, QuestionGroup } from "@/lib/types"


export const scen1GenericQuestions: QuestionGroup = {
    id: "scen1_gen_qs",
    title: "Scenario 1 Generic Questions",
    questions: [
        {id: "scen1_gen_q1_aufgabenerfolg", text: "Wie erfolgreich wurde die Aufgabe ausgeführt?", responseType: "likert5", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
        {id: "scen1_gen_q2_sicherheit", text: "Wie sicher wurde die Aufgabe ausgeführt?", responseType: "likert5",leftLabel: "Sehr unsicher", rightLabel: "Sehr sicher"},
    ],
}

{/* NONEXISTENT?
export const scen2GenericQuestions: QuestionGroup = {
    id: "scen2_gen_qs",
    title: "Scenario 2 Generic Questions",
    questions: [],
}
    */}

export const scen3GenericQuestions: QuestionGroup = {
    id: "scen3_gen_qs",
    title: "Scenario 3 Generic Questions",
    questions: [
        {id: "scen3_gen_q1_aufgabenerfolg_varA", text: "Wie erfolgreich wurde die Aufgabe ausgeführt?", responseType: "likert5", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
        {id: "scen3_gen_q2_sicherheit_varA", text: "Wie sicher wurde die Aufgabe ausgeführt?", responseType: "likert5", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
        {id: "scen3_gen_q1_aufgabenerfolg_varB", text: "Aufgabenerfolg", responseType: "likert5", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
        {id: "scen3_gen_q2_sicherheit_varB", text: "Wie sicher wurde die Aufgabe ausgeführt?", responseType: "likert5", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
    ],
}

export const scen1ProcExQuestions: QuestionGroup = {
    id: "scen1_procex_qs",
    title: "Scenario 1 Process Expert Questions" ,
    questions: [],
}

{/* NONEXISTENT?
export const scen2ProcExQuestions: QuestionGroup = {
    id: "scen2_procex_qs",
    title: "Scenario 2 Process Expert Questions" ,
    questions: [],
} */}

export const scen3ProcExQuestions: QuestionGroup = {
    id: "scen3_procex_qs",
    title: "Scenario 3 Process Expert Questions" ,
    questions: [],
}

export const scen1RobExQuestions: QuestionGroup = {
    id: "scen1_robex_qs",
    title: "Scenario 1 Process Expert Questions",
    questions: [],
}

{/* NONEXISTENT?
export const scen2RobExQuestions: QuestionGroup = {
    id: "scen2_robex_qs",
    title: "Scenario 2 Process Expert Questions",
    questions: [],
} */}

export const scen3RobExQuestions: QuestionGroup = {
    id: "scen3_robex_qs",
    title: "Scenario 3 Process Expert Questions",
    questions: [],
}



export const susQuestions: QuestionGroup = {
    id: "",
    title: "",
    questions: [],
}

export const nasaQuestions: QuestionGroup = {
    id: "",
    title: "",
    questions: [],
}