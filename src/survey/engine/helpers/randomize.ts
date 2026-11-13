import { Condition } from "@/lib/types";

export function randomize(): [Condition, Condition] {
  return Math.random() < 0.5 ? ["gen", "role_spec"] : ["role_spec", "gen"];
}
