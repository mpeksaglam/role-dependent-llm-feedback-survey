import { NavigationType } from "@/lib/types";
import { ArrowUpFromLine, MoveLeft, MoveRight } from "lucide-react";

type NavigationButtonProps = {
  action: NavigationType;
  label: string;
  onClick: () => void;
  disabled: boolean;
};

export function NavigationButton({
  action,
  label,
  onClick,
  disabled,
}: NavigationButtonProps) {
  return (
    <button
      className="
          flex items-center gap-2
          px-4 py-2
          font-medium text-black
          cursor-pointer
          transition-all
          disabled:opacity-0
          disabled:pointer-events-none
        "
      onClick={onClick}
      disabled={disabled}
    >
      {action === "back" && <MoveLeft size={15} />}
      {label}
      {action === "forward" && <MoveRight size={15} />}
      {action === "send_survey" && <ArrowUpFromLine size={17} />}
    </button>
  );
}
