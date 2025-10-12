import { Reward, User, Claim } from "../types";
import { useState } from "react";

interface RewardGridProps {
  rewards: Reward[];
  claims: Claim[];
  onPick: (rewardId: number) => void;
  user: User;
  setClaims: (claims: Claim[]) => void;
}

export default function RewardGrid({
  rewards,
  claims,
  onPick,
  user,
  setClaims,
}: RewardGridProps) {
  const [selectedRewardId, setSelectedRewardId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {rewards.map((reward) => {
        const isSelected = selectedRewardId === reward.id;
        const claim = claims.find((c) => c.reward_id === reward.id);
        const claimedBy = claim ? `Claimed by ${claim.user}` : "Available";

        return (
          <div
            key={reward.id}
            className={`flex items-center justify-between p-4 rounded-lg ${
              isSelected ? "bg-blue-100" : "bg-slate-200"
            }`}
          >
            <div>
              <h3 className="text-lg font-semibold">{reward.name}</h3>
              <p className="text-gray-600">{claimedBy}</p>
            </div>
            <button
              onClick={() => {
                if (isSelected) {
                  setSelectedRewardId(null);
                  setClaims(claims.filter((c) => c.reward_id !== reward.id));
                } else {
                  setSelectedRewardId(reward.id);
                  setClaims([
                    ...claims.filter((c) => c.user !== user),
                    { id: claims.length + 1, reward_id: reward.id, user },
                  ]);
                }
              }}
              className={`ml-4 px-4 py-2 rounded ${
                isSelected || claim?.user
                  ? "bg-purple-300 text-black"
                  : "bg-purple-300 text-black hover:bg-purple-600"
              }`}
            >
              {isSelected || claim?.user ? "Selected" : "Pick"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
