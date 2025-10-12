interface PickButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function PickButton({
  onClick,
  disabled = false,
}: PickButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-orange-500 text-black rounded hover:bg-orange-600 disabled:bg-gray-300"
    >
      Pick Reward
    </button>
  );
}
