import { FreeTextInput } from "@/components/responses/FreeTextInput"
import { Question, QuestionGroup } from "@/lib/types"


export const dsgvoConsent: QuestionGroup = {
    id: "dsgvo_consent_qs",
    title: "DSGVO consent",
    questions: [
        {id: "dsgvo_consent", text: "Bitte stimmen Sie der DSGVO zu.", responseType: "singleChoice", 
            options: [
                {label: "Ich stimme zu", value: "accept" },
                {label: "Ich lehne ab", value: "reject"},
        ]}
    ]
}


export const scen1GenericQuestions: QuestionGroup = {
    id: "scen1_gen_qs",
    title: "Scenario 1 Generic Questions",
    questions: [
        {id: "scen1_gen_q1_task_success", text: "Wie erfolgreich wurde die Aufgabe ausgeführt?", responseType: "likert5", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
        {id: "scen1_gen_q2_safety", text: "Wie sicher wurde die Aufgabe ausgeführt?", responseType: "likert5",leftLabel: "Sehr unsicher", rightLabel: "Sehr sicher"},
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
        {id: "scen3_gen_q1_reason_pref", text: "Bitte begründen Sie Ihre Auswahl kurz:", responseType: "freeTextInput"},
        {id: "scen3_gen_q2_task_success_varA", text: "Wie erfolgreich wurde die Aufgabe im linken Video ausgeführt?", responseType: "likert7", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
        {id: "scen3_gen_q3_safety_varA", text: "Wie sicher wurde die Aufgabe im linken Video ausgeführt?", responseType: "likert5", leftLabel: "Sehr unsicher", rightLabel: "Sehr sicher"},
        {id: "scen3_gen_q4_task_success_varB", text: "Wie erfolgreich wurde die Aufgabe im rechten Video ausgeführt?", responseType: "likert5", leftLabel: "Kein Erfolg", rightLabel: "Voller Erfolg"},
        {id: "scen3_gen_q5_safety_varB", text: "Wie sicher wurde die Aufgabe im rechten Video ausgeführt?", responseType: "likert7", leftLabel: "Sehr unsicher", rightLabel: "Sehr sicher"},
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