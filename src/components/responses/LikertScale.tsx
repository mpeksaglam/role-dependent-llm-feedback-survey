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
    <div className="flex gap-0 items-center cursor-pointer">
      {Array.from({ length: scale }, (_, i) => {
        const optionValue = i + 1; // value of answer options: from 1 to size of scale
        const isChecked = value === optionValue;

        return (
          <label
            key={optionValue}
            className="relative flex flex-col items-center cursor-pointer select-none group w-7.5 py-2 pb-3"
          >
            {/* hidden selection button */}
            <input
              type="radio"
              name={name}
              value={optionValue}
              checked={isChecked}
              onChange={() => onChange?.(optionValue)}
              className="sr-only"
            />

            {/* own selection button */}
            <span
              className={`
                shrink-0 flex w-3.5 h-3.5 items-center justify-center rounded-full border border-gray-800 transition
                ${isChecked ? "bg-gray-800" : ""}
              `}
            />

            {/* Numbers */}
            <span className="absolute top-7.5 text-[10px] text-gray-800 leading-none">
              {optionValue}
            </span>
          </label>
        );
      })}
    </div>
  );
}
