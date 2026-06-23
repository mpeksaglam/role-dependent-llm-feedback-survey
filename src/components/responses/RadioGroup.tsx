import { SelectionOption } from "@/lib/types";

interface RadioGroupProps {
  name: string;
  options: SelectionOption[]; // Answer options
  value: string; // selected Answer
  onChange: (value: string) => void;
}

export function RadioGroup({
  name,
  options,
  value,
  onChange,
}: RadioGroupProps) {
  return (
    <div>
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-2 mb-1.5 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={(e) => onChange(e.target.value)}
            className="hidden"
          />
          <span
            className={`
              w-3 h-3 rounded-full border
              ${value === opt.value ? "bg-black" : ""}
            `}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
