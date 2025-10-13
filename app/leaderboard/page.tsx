"use client";

import LeaderboardTable from "../../components/LeaderboardTable";
import { useScoreStore } from "../../stores";
import { useRouter } from "next/navigation";

export default function Leaderboard() {
  const { scores } = useScoreStore();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(`/rewards`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Leaderboard</h1>
      <div className="m-4 flex justify-center space-x-4">
        <button className="bg-purple-300 text-black px-4 py-2 rounded-full hover:bg-purple-500">
          This week
        </button>
        <button className="bg-purple-500 text-black px-4 py-2 rounded-full hover:bg-purple-500">
          All time
        </button>
      </div>
      <LeaderboardTable scores={scores} />
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => handleButtonClick()}
          className="bg-purple-300 text-black px-4 py-2 rounded-full hover:bg-purple-500"
        >
          Go to Chore Selection
        </button>
      </div>
    </div>
  );
}
