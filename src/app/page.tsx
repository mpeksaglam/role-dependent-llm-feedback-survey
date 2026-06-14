"use client";

import { useRouter } from "next/navigation";

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
