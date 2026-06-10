"use client"

import Image from "next/image"



{/* TODO : STUDY : Intro, Rollenklärung, Training, Aufgaben, Fragebogen, Abschluss */}


export default function SurveyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">

      <div className="mb-8">
        <Image
          src="/cat.png"
          alt="Survey Scenario"
          width={800}
          height={450}
          className="rounded-lg shadow-lg"
          priority
        />
      </div>

      <div className="flex gap-4">
        <button
          className="
            rounded-lg
            bg-green-600
            px-6
            py-3
            text-white
            font-semibold
            hover:bg-green-700
          "
        >
          Annehmen
        </button>

        <button
          className="
            rounded-lg
            bg-red-600
            px-6
            py-3
            text-white
            font-semibold
            hover:bg-red-700
          "
        >
          Ablehnen
        </button>
      </div>

    </main>
  )
}