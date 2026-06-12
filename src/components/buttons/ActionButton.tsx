type ActionButtonProps = {
  label: string;
  onClick: () => void;
};

export function ActionButton({ label, onClick }: ActionButtonProps) {
  return (
    <button
      className="
            rounded-lg
            px-6 py-3
            text-black font-medium
            cursor-pointer
          "
      onClick={onClick}
    >
      {label}
    </button>
  );
}
