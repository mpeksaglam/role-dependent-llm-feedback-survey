"use client"

import { AcceptButton } from "@/components/buttons/AcceptButton"
import { NextButton } from "@/components/buttons/NextButton"
import { RejectButton } from "@/components/buttons/RejectButton"
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
        <AcceptButton
          onClick={() => {} } // TODO HANDLE
        />

        <RejectButton
          onClick={() => {} }
        />
      </div>
      {/* TODO bottom right of screen max */}
      <div className="flex mt-auto justify-end"> 
        <NextButton
          onClick={() => {} }   // TODO HANDLE!!!
          disabled={false}     // HANDLE
        />
      </div>   

    </main>
  )
}