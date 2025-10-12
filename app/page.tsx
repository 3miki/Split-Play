"use client";

import BillList from "../components/BillList";
import AddButton from "../components/AddButton";
import { useBillStore, useUserStore } from "../stores";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TaskBoard() {
  const { bills, updateBill } = useBillStore();
  const { user } = useUserStore();
  const router = useRouter();

  const handlePay = (billId: number) => {
    router.push(`/settlement?billId=${billId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Hi Grace👋</h1>
      <BillList
        bills={bills.filter((bill) => bill.status !== "paid")}
        handlePay={handlePay}
        user={user}
      />

      <div className="mt-4">
        <Link href="/newbill">
          <AddButton onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}
