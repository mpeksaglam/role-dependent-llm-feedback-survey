"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { NavigationButton } from "@/components/buttons/NavigationButton"

export default function Home() {
  const [choice, setChoice] = useState("")
  const router = useRouter()

  const canContinue = choice === "accept"

  const handleNext = () => {
    if (canContinue) {
      router.push("/survey")
    }
  }

  {/* TODO: PRE-SURVEY : Welcome, DSGVO, Einwilligung */}

  return (
    <div className="min-h-screen p-10 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">
        Willkommen zur KIRo4LeMi Feedback Survey
      </h1>

      <p className="mb-6">
        Bitte akzeptiere die DSGVO
      </p>

      <label className="flex items-center gap-2 mb-1.5 cursor-pointer">
        <input
          type="radio"
          name="consent"
          value="accept"
          checked={choice === "accept"}
          onChange={(e) => setChoice(e.target.value)}
        />
        Ich akzeptiere
      </label>

      <label className="flex items-center gap-2 mb-1.5 cursor-pointer">
        <input
          type="radio"
          name="consent"
          value="reject"
          checked={choice === "reject"}
          onChange={(e) => setChoice(e.target.value)}
        />
        Ich lehne ab
      </label>
      <div className="mt-auto flex justify-end">
        <NavigationButton
          action="forward"
          label="Weiter"
          onClick={handleNext}
          disabled={!canContinue}
        />
      </div>      
    </div>
  )

  
}