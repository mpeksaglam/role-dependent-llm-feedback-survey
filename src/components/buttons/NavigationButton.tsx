import { MoveRight } from "lucide-react";
import { MoveLeft } from "lucide-react";
import { NavigationType } from "@/lib/types";

type NavigationButtonProps = {
  action: NavigationType;
  label: string;
  onClick: () => void;
  disabled: boolean;
};

// TODO roter Text handleDisabledClick ?

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
          text-sm font-medium text-black
          cursor-pointer
          transition-all
          disabled:opacity-70 font-normal
        "
      onClick={onClick}
      disabled={disabled}
    >
      {action === "back" && <MoveLeft size={15} />}
      {label}
      {action === "forward" && <MoveRight size={15} />}
    </button>
  );
}
