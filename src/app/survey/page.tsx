"use client"

import { NextButton } from "@/components/buttons/NextButton"
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

      <div className="flex gap-2 justify-center">
        <button
          className="
            rounded-lg
            px-6
            py-3
            text-black
            font-semibold
          "
        >
          Annehmen
        </button>

        <button
          className="
            rounded-lg
            px-6
            py-3
            text-black
            font-semibold
          "
        >
          Ablehnen
        </button>       
      </div>

      <div className="flex mt-auto justify-end">
        <NextButton
          onClick={() => {} }   // TODO HANDLE!!!
          disabled={false}     // HANDLE
        />
      </div>   

    </main>
  )
}