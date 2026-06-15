import { SurveyAnswers, UserRole } from "@/lib/types";

export function deriveUserRole(answers: SurveyAnswers): UserRole {
  //   const roboExp = Number(answers["prev_robo_experience"] ?? 0);

  //   const simExp = Number(answers["prev_sim_experience"] ?? 0);

  //   const aiExp = Number(answers["prev_ai_experience"] ?? 0);

  //   const score = roboExp + simExp + aiExp;

  //   if (score >= 10) {
  //     return "robo_exp";
  //   }

  const prof_background = String(answers["prof_background"]);

  if (prof_background == "robo_exp") return "robo_exp";

  return "proc_exp";
}
