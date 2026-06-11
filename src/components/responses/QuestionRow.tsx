import { LikertScale } from "@/components/responses/LikertScale";

interface QuestionRowProps {
  text: string;

  scale: number;

  leftLabel: string;
  rightLabel: string;

  selected?: number;
  onSelect?: (value: number) => void;
}

export function QuestionRow({
  text,
  scale,
  leftLabel,
  rightLabel,
  selected,
  onSelect,
}: QuestionRowProps) {
  return (
    <div className="flex items-center justify-between py-5 gap-6">

      {/* Frage */}
      <div className="w-1/2">
        <p className="text-sm">
          {text}
        </p>
      </div>

      {/* Antwortbereich */}
      <div className="w-1/2 flex items-start justify-end gap-3">

        {/* LEFT LABEL */}
        {leftLabel && (
          <span className="text-xs text-black-500 self-center">
            {leftLabel}
          </span>
        )}

        {/* SCALE */}
        <LikertScale
          scale={scale}
          selected={selected}
          onSelect={onSelect}
        />

        {/* RIGHT LABEL */}
        {rightLabel && (
          <span className="text-xs text-black-500 self-center">
            {rightLabel}
          </span>
        )}

      </div>
    </div>
  );
}