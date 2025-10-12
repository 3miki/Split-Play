"use client";

import BillList from "../components/BillList";
import AddButton from "../components/AddButton";
import { useBillStore, useUserStore } from "../stores";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TaskBoard() {
  const { bills } = useBillStore();
  const { user } = useUserStore();
  const router = useRouter();

  // Filter bills where the current user needs to pay
  const payBills = bills.filter(
    (bill) =>
      bill.status === "unpaid" &&
      bill.users.some((u) => u.name === user && !u.paid)
  );

  // Filter bills created by the current user
  const createdBills = bills.filter((bill) => bill.created_by === user);

  const handlePay = (billId: number) => {
    router.push(`/settlement?billId=${billId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Hi {user} 👋</h1>

      {/* Pay Bills Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Pay Bills</h2>
        {payBills.length > 0 ? (
          <BillList bills={payBills} handlePay={handlePay} user={user} />
        ) : (
          <p className="text-gray-500">No bills to pay.</p>
        )}
      </div>

      {/* View Details Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Created Bills</h2>
        {createdBills.length > 0 ? (
          <BillList bills={createdBills} handlePay={handlePay} user={user} />
        ) : (
          <p className="text-gray-500">No created bills.</p>
        )}
      </div>

      {/* Add New Bill */}
      <div className="mt-4">
        <Link href="/newbill">
          <AddButton onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
}