import { LikertScale } from "@/components/responses/LikertScale";

interface LikertRowProps {
  name: string;
  text: string;
  scale: number;
  leftLabel: string;
  rightLabel: string;
  value?: number;
  onChange?: (value: number) => void;
}

export function LikertRow({
  name,
  text,
  scale,
  leftLabel,
  rightLabel,
  value,
  onChange,
}: LikertRowProps) {
  return (
    <div className="flex items-center justify-between py-5 gap-6">
      {/* Frage */}
      <div className="flex-1 min-w-0">
        <p>{text}</p>
      </div>

      {/* Antwortbereich */}
      <div className="flex items-center justify-end shrink-0">
        {/* LEFT LABEL */}
        {leftLabel && (
          <span className="text-xs select-none w-36 text-right pr-4 leading-tight">
            {leftLabel}
          </span>
        )}

        {/* SCALE */}
        <LikertScale
          name={name}
          scale={scale}
          value={value}
          onChange={onChange}
        />

        {/* RIGHT LABEL */}
        {rightLabel && (
          <span className="text-xs select-none w-36 text-left pl-4 leading-tight">
            {rightLabel}
          </span>
        )}
      </div>
    </div>
  );
}
