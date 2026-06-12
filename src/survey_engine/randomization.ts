import { Condition } from "@/lib/types";

export function assignConditionOrder(): [Condition, Condition] {
  return Math.random() < 0.5 ? ["gen", "role_spec"] : ["role_spec", "gen"]
}