

type AcceptButtonProps = {
    onClick: () => void
    text?: string
}

export function AcceptButton({
    onClick,
    text = "Annehmen",
}: AcceptButtonProps) {
    return(
        <button
          className="
            rounded-lg
            px-6 py-3
            text-black font-medium
            cursor-pointer
          "
        >
          {text}
        </button>
    )
}