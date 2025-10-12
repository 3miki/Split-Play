interface AddRewardButtonProps {
  onClick: () => void;
}

export default function AddRewardButton({ onClick }: AddRewardButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-purple-300 text-black rounded-full hover:bg-green-600"
    >
      Add Chore
    </button>
  );
}
