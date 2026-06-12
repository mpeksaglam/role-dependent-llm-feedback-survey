"use client"

import { ActionButton } from "@/components/buttons/ActionButton"
import { NavigationButton } from "@/components/buttons/NavigationButton"
import { simulationVideos } from "@/config/simulationConfig"
import { scen1GenericQuestions, scen3GenericQuestions} from "@/config/questionConfig"
import { SimulationModule } from "@/modules/SimulationModule"
import { QuestionModule } from "@/modules/QuestionModule"


{/* TODO : STUDY : Intro, Rollenklärung, Training, Aufgaben, Fragebogen, Abschluss */}


export default function SurveyPage() {
  return (
    <main className=" 
      min-h-screen 
      p-8 
      flex flex-col
      w-full max-w-5xl mx-auto
      ">

      <div className="flex items-center justify-center mb-6">
        <SimulationModule simVid={simulationVideos[0]}/>
      </div>

      <QuestionModule group={scen1GenericQuestions} />


      {/* Navigation, TODO modularize into Module */}

      <div className="mt-auto flex justify-between"> 
        
        <NavigationButton
          action="back"
          label="Zurück"
          onClick={() => {} }
          disabled={false}
        />        
        
        <NavigationButton
          action="forward"
          label="Weiter"
          onClick={() => {} }   // TODO HANDLE!!!
          disabled={false}     // HANDLE
        />
      </div>   

    </main>
  )
}