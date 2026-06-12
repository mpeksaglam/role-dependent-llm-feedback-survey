"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { NavigationButton } from "@/components/buttons/NavigationButton"
import { RadioGroup } from "@/components/responses/RadioGroup"

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

      <RadioGroup 
        name="consent"
        value={choice}
        onChange={setChoice}
        options={[
          {label: "Ich akzeptiere", value: "accept" },
          {label: "Ich lehne ab", value: "reject" },
        ]}
      />
      
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