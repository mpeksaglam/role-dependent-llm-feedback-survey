import { MoveRight } from "lucide-react"

type NextButtonProps = {
  onClick: () => void
  disabled: boolean
  text?: string
}

// TODO roter Text handleDisableClick ?

export function NextButton({
  onClick,
  disabled,
  text = "Weiter",
}: NextButtonProps) {
  return (
      <button
        className="
          flex items-center gap-2
          px-4 py-2
          text-sm font-medium text-black
          cursor-pointer
          transition-all
          disabled:opacity-70 font-normal
        "

        onClick={onClick}
        disabled={disabled}
      >
        {text}
        {/* arrow icon */}
        <MoveRight size={15} /> 
      </button>
  )
}