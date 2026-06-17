interface FreeTextInputProps {
  width?: string; // have to be Tailwind classes
  height?: string; // also Tailwind
  value: string;
  onChange: (value: string) => void;
}

export function FreeTextInput({
  width,
  height,
  value,
  onChange,
}: FreeTextInputProps) {
  // in case width/height are undefined or "", fallback:
  const finalWidth = width || "w-full";
  const finalHeight = height || "h-auto";
  return (
    <textarea
      className={`
        ${finalWidth} ${finalHeight}
        rounded-sm
        border
        p-2
        text-sm
        `}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
