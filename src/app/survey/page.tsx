"use client"

import { ActionButton } from "@/components/buttons/ActionButton"
import { NavigationButton } from "@/components/buttons/NavigationButton"
import { simulationVideos } from "@/config/simulationConfig"
import { SimulationModule } from "@/modules/simulation/SimulationModule"
import Image from "next/image"



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
        <SimulationModule simVid={simulationVideos[1]}/>
      </div>

      <div className="flex gap-6 justify-center">
        <ActionButton
          label="Annehmen"
          onClick={() => {} } // TODO HANDLE
        />

        <ActionButton
          label="Reject"
          onClick={() => {} }
        />
      </div>

      {/* NavigationButtons Div */}

      {/* TODO bottom right of screen max? */}
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