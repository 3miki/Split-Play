import { useState } from "react";
import { Bill } from "../types";

interface NewBillFormProps {
  onSubmit: (bill: Omit<Bill, "id">) => void;
  initialData?: Partial<Omit<Bill, "id">>;
}

export default function NewBillForm({
  onSubmit,
  initialData,
}: NewBillFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [amount, setAmount] = useState(initialData?.amount?.toString() || "");
  const [createdBy, setCreatedBy] = useState(initialData?.created_by || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      amount: parseFloat(amount),
      status: "unpaid",
      created_by: createdBy,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 bg-slate-200 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Amount</label>
        <input
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 bg-slate-200 rounded"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Created By</label>
        <input
          type="text"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="w-full p-2 bg-slate-200 rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-purple-300 text-black rounded-full hover:bg-purple-500"
      >
        Save Bill
      </button>
    </form>
  );
}
