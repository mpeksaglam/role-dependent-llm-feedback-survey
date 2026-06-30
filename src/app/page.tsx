"use client";

import { useSurvey } from "@/survey/engine/helpers/useSurvey";
import { SurveyRenderer } from "@/survey/engine/SurveyRenderer";

export default function Home() {
  const { state } = useSurvey();

  // If still fetching data from server, block the UI
  if (state.isLoading) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-white text-gray-900 font-sans antialiased">
        <div className="space-y-4 text-center select-none animate-pulse">
          <p className="text-xs font-mono tracking-widest text-gray-400 uppercase">
            KIRo4LeMi
          </p>
          <p className="text-sm font-medium text-gray-600">
            Verbindung zum Server wird hergestellt...
          </p>
        </div>
      </div>
    );
  }

  // once is Loading is false, show actual screen
  return <SurveyRenderer />;
}
