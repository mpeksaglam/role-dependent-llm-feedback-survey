import { useEffect, useState } from "react";

interface FreeTextInputProps {
  text: string;
  value: string;
  onSave: (value: string) => void;
}

export function FreeTextInput({ text, value, onSave }: FreeTextInputProps) {
  /* separate local changes from changes to save
     local changes to show typing to user, but save only when leaving the text field 
     (prevent too many server persistence requests) */
  const [localValue, setLocalValue] = useState(value); // renders on first mount only

  // on change, make sure to rerender (if loaded session from server e.g.)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="pt-4 space-y-3">
      <p className="mb-4 font-medium">{text}</p>

      <textarea
        className="
          w-2xl
          h-24
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-3
          leading-relaxed
          outline-none
          transition
          focus:border-gray-400
          resize-none
        "
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={() => onSave(localValue)} // only save persistence to server when textinput field is left
      />
    </div>
  );
}
