interface LikertScaleProps {
  questionId: string;
  scale: number;
  selected?: number;
  onSelect?: (value: number) => void;
}

export function LikertScale({
  questionId,
  scale,
  selected,
  onSelect,
}: LikertScaleProps) {
  return (
    <div className="flex gap-3 items-center cursor-pointer">
      {Array.from({ length: scale }, (_, i) => {
        const value = i + 1;

        return (
          <label
            key={value}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* RADIO */}
            <input
              type="radio"
              name={questionId}
              value={value}
              checked={selected === value}
              onChange={() => onSelect?.(value)}
              className="hidden"
            />

            {/* Kreis */}
            <span
              className={`
                w-3 h-3 rounded-full border
                ${selected === value ? "bg-black" : ""}
              `}
            />

            {/* Zahlen */}
            <span className="text-[10px] mt-2 leading-none">{value}</span>
          </label>
        );
      })}
    </div>
  );
}
