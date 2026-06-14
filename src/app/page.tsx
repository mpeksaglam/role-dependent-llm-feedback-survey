"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NavigationButton } from "@/components/buttons/NavigationButton";
import { RadioGroup } from "@/components/responses/RadioGroup";
import { dsgvoConsent } from "@/config/questionConfig";
import { QuestionModule } from "@/modules/QuestionModule";
import { SurveyRenderer } from "@/survey_engine/SurveyRenderer";

export default function Home() {
  const router = useRouter();

  // const handleNext = () => {
  //   if (canContinue) {
  //     router.push("/survey");
  //   }
  // }; TODO

  {
    /* TODO: PRE-SURVEY : Welcome, DSGVO, Einwilligung => dann /survey */
  }

  return <SurveyRenderer />;
}
