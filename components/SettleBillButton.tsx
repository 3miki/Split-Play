interface SettleBillButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function SettleBillButton({
  onClick,
  disabled = false,
}: SettleBillButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-purple-300 text-black rounded-full hover:bg-purple-500 disabled:bg-gray-300"
    >
      Settle Bill
    </button>
  );
}
