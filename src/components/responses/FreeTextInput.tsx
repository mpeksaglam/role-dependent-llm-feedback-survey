import { useEffect, useState } from "react";

interface FreeTextInputProps {
  text: string;
  value: string;
  onSave: (value: string) => void;
}

export function FreeTextInput({ text, value, onSave }: FreeTextInputProps) {
  /* seperate local changes from changes to save
     local changes to show typing to user, but save only when leaving the text field 
     (prevent too many server persistence requests) */
  const [localValue, setLocalValue] = useState(value); // renders on first mount only

  // on change, make sure to rerender (if loaded session from server e.g.)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="mt-10 space-y-3">
      <p
        className="
          
          mx-1 mb-4
          
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

          
          leading-6

          outline-none
          transition

          focus:border-gray-400
          focus:ring-0

          resize-none
        "
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={() => onSave(localValue)} // only save persistence to server when textinput field is left
      />
    </div>
  );
}
