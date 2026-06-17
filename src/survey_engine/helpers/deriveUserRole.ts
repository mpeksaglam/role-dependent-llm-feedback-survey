import { SurveyAnswers, UserRole } from "@/lib/types";

export function deriveUserRole(answers: SurveyAnswers): UserRole {
  const roboExp = Number(answers["prev_robo_experience"] ?? 0);

  // if participant chose 3 or more for robotic experience, robotics expert
  if (roboExp >= 3) {
    return "robo_exp";
  }
  // else process expert
  return "proc_exp";
}
