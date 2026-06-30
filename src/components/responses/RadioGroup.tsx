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
    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-3 select-none cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={(e) => onChange(e.target.value)}
            className="sr-only"
          />
          <span
            className={`
              w-3 h-3 rounded-full border border-gray-800
              ${value === opt.value ? "bg-gray-800" : ""}
            `}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
