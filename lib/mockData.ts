import { User, Bill, Claim, Reward, Score } from "../types";

export const mockUser: User = "Grace";

export const mockBills: Bill[] = [
  {
    id: 1,
    title: "Washing up liquid",
    amount: 2.4,
    status: "unpaid",
    created_by: "Miki",
    users: [
      { name: "Miki", paid: true },
      { name: "Grace", paid: false },
      { name: "Batman", paid: false },
    ],
  },
  {
    id: 2,
    title: "Water Bill",
    amount: 30,
    status: "unpaid",
    created_by: "Grace",
    users: [
      { name: "Grace", paid: true },
      { name: "Miki", paid: false },
      { name: "Batman", paid: false },
    ],
  },
  {
    id: 3,
    title: "Electric Bill",
    amount: 20,
    status: "paid",
    created_by: "Miki",
    users: [
      { name: "Miki", paid: true },
      { name: "Grace", paid: true },
      { name: "Batman", paid: false },
    ],
  },
];

export const mockRewards: Reward[] = [
  {
    id: 1,
    name: "Do the dishes",
  },
  {
    id: 2,
    name: "Take out trash",
  },
  {
    id: 3,
    name: "Vacuum living room",
  },
];

export const mockClaims: Claim[] = [
  {
    id: 1,
    reward_id: 1,
    user: "Grace",
  },
];

export const mockScores: Score[] = [
  {
    user: "Grace",
    points: 120,
  },
  {
    user: "Miki",
    points: 100,
  },
  {
    user: "Batman",
    points: 10,
  },
];
