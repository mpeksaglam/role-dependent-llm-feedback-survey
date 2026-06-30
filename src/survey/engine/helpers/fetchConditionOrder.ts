import { Condition } from "@/lib/types";
// takes participantId and fetches the randomized condition from server
export async function fetchConditionOrder(
  participantId: string,
): Promise<[Condition, Condition]> {
  const response = await fetch("/api/survey/condition", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ participantId }),
  });

  if (!response.ok) {
    throw new Error("Could not fetch synchronized condition order matrix");
  }

  const data = await response.json();
  return data.conditionOrder;
}
