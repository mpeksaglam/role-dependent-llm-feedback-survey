"use client";

import { useRouter } from "next/navigation";

import { SurveyRenderer } from "@/survey_engine/SurveyRenderer";

export default function Home() {
  return <SurveyRenderer />;
}
