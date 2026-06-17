interface FreeTextInputProps {
  width?: string; // have to be Tailwind classes
  height?: string; // also Tailwind
  value: string;
  onChange: (value: string) => void;
}

export function FreeTextInput({ value, onChange }: FreeTextInputProps) {
  return (
    <textarea
      className="
        w-sm h-24
        rounded-sm
        border
        p-2
        text-sm
        "
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
