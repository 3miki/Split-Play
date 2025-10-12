interface AddButtonProps {
  onClick: () => void;
}

export default function AddButton({ onClick }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-purple-300 text-black rounded hover:bg-green-600"
    >
      Add Bill
    </button>
  );
}
