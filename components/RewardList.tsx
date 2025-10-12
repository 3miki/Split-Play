import { useState } from "react";

export default function RewardList({
  rewards,
  editingRewardId,
  setEditingRewardId,
  newName,
  setNewName,
}: {
  rewards: { id: number; name: string }[];
  editingRewardId: number | null;
  setEditingRewardId: (id: number | null) => void;
  newName: string;
  setNewName: (name: string) => void;
}) {
  const updateRewardName = (id: number, newName: string) => {
    const rewardIndex = rewards.findIndex((reward) => reward.id === id);
    if (rewardIndex !== -1) {
      rewards[rewardIndex].name = newName;
      console.log(`Updated reward with id ${id} to new name: ${newName}`);
    }
    setEditingRewardId(null);
  };

  return (
    <div className="space-y-4">
      {rewards.map((reward) => (
        <div
          key={reward.id}
          className="p-4 bg-slate-200 rounded-lg flex items-center justify-between"
        >
          {editingRewardId === reward.id ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="bg-white px-2 py-1 rounded-full"
              />
              <button
                className="px-4 py-2 bg-purple-300 text-black rounded-full hover:bg-green-600"
                onClick={() => updateRewardName(reward.id, newName)}
              >
                Save
              </button>
            </>
          ) : (
            <>
              <h3 className="text-lg font-semibold">{reward.name}</h3>
              <button
                className="px-4 py-2 bg-purple-300 text-black rounded-full hover:bg-purple-600"
                onClick={() => {
                  setEditingRewardId(reward.id);
                  setNewName(reward.name);
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
