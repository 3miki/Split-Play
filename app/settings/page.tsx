"use client";

import RewardList from "../../components/RewardList";
import AddRewardButton from "../../components/AddRewardButton";
import { useRewardStore } from "../../stores";
import { useState } from "react";

export default function Settings() {
  const { rewards } = useRewardStore();
  const [editingRewardId, setEditingRewardId] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>("");

  const handleAddReward = () => {
    const newReward = { id: Date.now(), name: "" };
    useRewardStore.setState({
      rewards: [...rewards, newReward],
    });
    setEditingRewardId(newReward.id);
    setNewName("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Chore List 🧺</h1>
      <RewardList
        rewards={rewards}
        editingRewardId={editingRewardId}
        setEditingRewardId={setEditingRewardId}
        newName={newName}
        setNewName={setNewName}
      />
      <div className="mt-4">
        <AddRewardButton onClick={handleAddReward} />
      </div>
    </div>
  );
}
