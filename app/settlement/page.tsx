"use client";

import { useSearchParams } from "next/navigation";
import { useBillStore } from "../../stores";
import BillDetail from "../../components/BillDetail";
import { mockBills, mockUser } from "../../lib/mockData";
import { useRouter } from "next/navigation";

export default function SettleBill() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const billId = searchParams.get("billId");
  const { updateBill } = useBillStore();

  const bill = mockBills.find((b) => b.id === Number(billId));

  const handleSettle = (user: string) => {
    if (bill) {
      const updatedUsers = bill.users.map((u) =>
        u.name === user ? { ...u, paid: true } : u
      );

      updateBill(bill.id, { users: updatedUsers });
      console.log(
        `User "${user}" has settled their share for the bill "${bill.title}".`
      );
      //   window.location.href = "/";
      router.push("/");
    }
  };

  if (!bill) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Bill Not Found</h1>
        <p className="text-center">
          The bill you are trying to view does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Settle Bill</h1>
      <BillDetail
        bill={bill}
        onSettle={() => handleSettle(mockUser)}
        user={mockUser}
      />
    </div>
  );
}