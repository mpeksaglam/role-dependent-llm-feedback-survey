import { MoveRight } from "lucide-react"

type NextButtonProps = {
  onClick: () => void
  disabled: boolean
  text?: string
}

export function NextButton({
  onClick,
  disabled,
  text = "Weiter",
}: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        fixed bottom-6 right-6
        flex items-center gap-2
        px-4 py-2
        rounded-xl
        text-sm font-medium
        shadow-md
        transition-all
        ${
          !disabled
            ? "bg-gray-500 hover:bg-gray-600 hover:shadow-lg"
            : "bg-gray-400 cursor-not-allowed"
        }
        text-white
      `}
    >
      {text}
      <MoveRight size={15} />
    </button>
  )
}