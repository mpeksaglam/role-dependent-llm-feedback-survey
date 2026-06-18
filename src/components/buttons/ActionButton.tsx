type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

export function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button
      className="
            rounded-md
            px-4
            text-black font-medium
            cursor-pointer
          "
      onClick={onClick}
    >
      {label}
    </button>
  );
}
