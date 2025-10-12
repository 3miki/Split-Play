"use client";

import { useRouter } from "next/navigation";
import NewBillForm from "../../components/NewBillForm";
import { Bill } from "../../types";
import { useBillStore } from "../../stores";

export default function AddBill() {
  const router = useRouter();
  const { addBill } = useBillStore();

  const handleSubmit = (billData: Omit<Bill, "id">) => {
    const newBill: Bill = { ...billData, id: Date.now() };
    addBill(newBill);
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Add New Bill</h1>
      <NewBillForm onSubmit={handleSubmit} />
    </div>
  );
}
