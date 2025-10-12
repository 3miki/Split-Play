import { create } from "zustand";
import { Bill, Reward, Score } from "../types";
import {
  mockBills,
  mockRewards,
  mockScores,
  mockUser,
  mockClaims,
} from "../lib/mockData";
import { mock } from "node:test";

interface BillStore {
  bills: Bill[];
  addBill: (bill: Bill) => void;
  updateBill: (id: number, updates: Partial<Bill>) => void;
}

export const useBillStore = create<BillStore>((set) => ({
  bills: mockBills,
  addBill: (bill) => set((state) => ({ bills: [...state.bills, bill] })),
  updateBill: (id, updates) =>
    set((state) => ({
      bills: state.bills.map((b) => (b.id === id ? { ...b, ...updates } : b)),
    })),
}));

interface RewardStore {
  rewards: Reward[];
  updateReward: (id: number, updates: Partial<Reward>) => void;
}

export const useRewardStore = create<RewardStore>((set) => ({
  rewards: mockRewards,
  updateReward: (id, updates) =>
    set((state) => ({
      rewards: state.rewards.map((r) =>
        r.id === id ? { ...r, ...updates } : r
      ),
    })),
}));

interface ScoreStore {
  scores: Score[];
  updateScore: (user: string, points: number) => void;
}

export const useScoreStore = create<ScoreStore>((set) => ({
  scores: mockScores,
  updateScore: (user, points) =>
    set((state) => ({
      scores: state.scores.map((s) => (s.user === user ? { ...s, points } : s)),
    })),
}));

interface RewardSelectionStore {
  currentUserIndex: number;
  setCurrentUserIndex: (index: number) => void;
}

export const useRewardSelectionStore = create<RewardSelectionStore>((set) => ({
  currentUserIndex: 0,
  setCurrentUserIndex: (index) => set({ currentUserIndex: index }),
}));

interface UserStore {
  user: string;
}
export const useUserStore = create<UserStore>(() => ({
  user: mockUser,
}));

interface ClaimStore {
  claims: { reward_id: number; user: string }[];
  addClaim: (reward_id: number, user: string) => void;
}
export const useClaimStore = create<ClaimStore>((set) => ({
  claims: mockClaims,
  addClaim: (reward_id, user) =>
    set((state) => ({
      claims: [...state.claims, { reward_id, user }],
    })),
}));

interface NewBillStore {
  newBill: Omit<Bill, "id">;
  setNewBill: (bill: Omit<Bill, "id">) => void;
}

export const useNewBillStore = create<NewBillStore>((set) => ({
  newBill: {
    title: "",
    amount: 0,
    status: "unpaid",
    created_by: "",
    users: [],
  },
  setNewBill: (bill) => set({ newBill: bill }),
}));

interface SettleBillStore {
  settleBill: Bill;
  setSettleBill: (bill: Bill) => void;
}
export const useSettleBillStore = create<SettleBillStore>((set) => ({
  settleBill: mockBills[0],
  setSettleBill: (bill) => set({ settleBill: bill }),
}));
