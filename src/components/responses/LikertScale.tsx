interface LikertScaleProps {
  name: string; // questionId
  scale: number;
  value?: number; // the currently selected value
  onChange?: (value: number) => void;
}

export function LikertScale({
  name,
  scale,
  value,
  onChange,
}: LikertScaleProps) {
  return (
    <div className="flex gap-3 items-center cursor-pointer">
      {Array.from({ length: scale }, (_, i) => {
        const optionValue = i + 1; // value of answer options: from 1 to size of scale

        return (
          <label
            key={optionValue}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* RADIO */}
            <input
              type="radio"
              name={name}
              value={optionValue}
              checked={value === optionValue}
              onChange={() => onChange?.(optionValue)}
              className="hidden"
            />

            {/* Kreis */}
            <span
              className={`
                w-3 h-3 rounded-full border
                ${value === optionValue ? "bg-black" : ""}
              `}
            />

            {/* Zahlen */}
            <span className="text-[10px] mt-2 leading-none">{optionValue}</span>
          </label>
        );
      })}
    </div>
  );
}
