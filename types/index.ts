export type Bill = {
  id: number;
  title: string;
  amount: number;
  status: "unpaid" | "paid";
  created_by: string;
  users: { name: string; paid: boolean }[];
};

export type Reward = {
  id: number;
  name: string;
};

export type Claim = {
  id: number;
  reward_id: number;
  user: string;
};

export type Score = {
  user: string;
  points: number;
};

export type User = string;
