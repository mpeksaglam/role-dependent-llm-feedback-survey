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
      <div className="w-1/2">
        <p className="">{text}</p>
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
          name={name}
          scale={scale}
          value={value}
          onChange={onChange}
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
