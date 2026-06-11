

type RejectButtonProps = {
    onClick: () => void
    text?: string
}


export function RejectButton({
    onClick,
    text="Ablehnen",
}: RejectButtonProps) {
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