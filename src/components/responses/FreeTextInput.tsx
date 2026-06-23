interface FreeTextInputProps {
  text: string;
  value: string;
  onChange: (value: string) => void;
}

export function FreeTextInput({ text, value, onChange }: FreeTextInputProps) {
  return (
    <div>
      <p className="text-sm">{text}</p>
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
    </div>
  );
}
