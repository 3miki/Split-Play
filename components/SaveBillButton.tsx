interface SaveBillButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function SaveBillButton({
  onClick,
  disabled = false,
}: SaveBillButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-purple-300 text-black rounded-full hover:bg-green-600 disabled:bg-gray-300"
    >
      Save Bill
    </button>
  );
}
