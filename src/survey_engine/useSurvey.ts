import {
  useContext,
} from "react";

import {
  SurveyContext,
} from "@/survey_engine/SurveyContext";

export const useSurvey = () => {
  const context =
    useContext(SurveyContext);

  if (context === null) {
    throw new Error(
      "useSurvey must be used within SurveyProvider"
    );
  }

  return context;
};