"use client";

import { useState } from "react";
import RewardGrid from "../../components/RewardGrid";
import {
  useRewardStore,
  useScoreStore,
  useRewardSelectionStore,
} from "../../stores";
import { mockRewards, mockClaims, mockUser } from "../../lib/mockData";
import { Reward, Claim } from "../../types";

export default function RewardSelection() {
  const [rewards, setRewards] = useState<Reward[]>(mockRewards);
  const [claims, setClaims] = useState<Claim[]>(mockClaims);
  const { scores } = useScoreStore();
  const { currentUserIndex, setCurrentUserIndex } = useRewardSelectionStore();

  const sortedUsers = scores
    .sort((a, b) => b.points - a.points)
    .map((s) => s.user);
  const currentUser = sortedUsers[currentUserIndex];

  const handleClaim = (rewardId: number) => {
    const newClaim: Claim = {
      id: claims.length + 1,
      reward_id: rewardId,
      user: mockUser,
    };
    setClaims([...claims, newClaim]);

    if (currentUserIndex < sortedUsers.length - 1) {
      setCurrentUserIndex(currentUserIndex + 1);
    } else {
      console.log("All rewards selected");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Reward Selection</h1>
      <p className="mb-4">Current turn: {currentUser}</p>
      <RewardGrid
        rewards={rewards}
        claims={claims}
        onPick={handleClaim}
        user={currentUser}
        setClaims={setClaims}
      />
    </div>
  );
}
