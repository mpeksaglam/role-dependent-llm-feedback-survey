import { ResponseType } from "@/lib/types";

const SCALE_MAP: Record<ResponseType, number> = {
  likert5: 5,
  likert7: 7,
  freeText: 0,
};

export function scaleLength(type: ResponseType): number {
  return SCALE_MAP[type] ?? 0;
}