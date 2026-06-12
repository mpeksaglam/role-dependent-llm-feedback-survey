"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NavigationButton } from "@/components/buttons/NavigationButton";
import { RadioGroup } from "@/components/responses/RadioGroup";
import { dsgvoConsent } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";

export default function Home() {
  const [choice, setChoice] = useState("");
  const router = useRouter();

  const canContinue = choice === "accept";

  const handleNext = () => {
    if (canContinue) {
      router.push("/survey");
    }
  };

  {
    /* TODO: PRE-SURVEY : Welcome, DSGVO, Einwilligung */
  }

  return (
    <div className="min-h-screen p-10 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">
        Willkommen zur KIRo4LeMi Feedback Survey
      </h1>

      <QuestionModule group={dsgvoConsent} />

      {/* NAVIGATION  */}
      <div className="mt-auto flex justify-end">
        <NavigationButton
          action="forward"
          label="Weiter"
          onClick={handleNext}
          disabled={!canContinue}
        />
      </div>
    </div>
  );
}
