interface PayButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function PayButton({
  onClick,
  disabled = false,
}: PayButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-purple-300 text-black rounded hover:bg-purple-600 disabled:bg-gray-300"
    >
      Pay
    </button>
  );
}
