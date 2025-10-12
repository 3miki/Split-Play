"use client";
import { useBillStore } from "../../stores";
import BillDetail from "../../components/BillDetail";
import { mockSettleBill } from "../../lib/mockData";

export default function SettleBill() {
  const { updateBill } = useBillStore();

  const handleSettle = () => {
    updateBill(mockSettleBill.id, { status: "paid" });
    console.log(`Bill with ID ${mockSettleBill.id} has been settled.`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Settle Bill</h1>
      <BillDetail bill={mockSettleBill} onSettle={handleSettle} />
    </div>
  );
}
