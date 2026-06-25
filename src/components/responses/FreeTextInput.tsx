interface FreeTextInputProps {
  text: string;
  value: string;
  onChange: (value: string) => void;
}

export function FreeTextInput({ text, value, onChange }: FreeTextInputProps) {
  return (
    <div className="mt-10 space-y-3">
      <p
        className="
          text-sm
          mx-1 mb-4
          text-gray-900
        "
      >
        {text}
      </p>

      <textarea
        className="
          w-full
          max-w-xl

          h-24

          rounded-2xl

          border
          border-gray-300

          bg-white

          px-4
          py-3

          text-sm
          leading-6

          outline-none
          transition

          focus:border-gray-400
          focus:ring-0

          resize-none
        "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
