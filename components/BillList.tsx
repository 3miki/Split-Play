import { Bill, User } from "../types";

interface BillListProps {
  bills: Bill[];
  handlePay: (billId: number) => void;
  user: User;
}

export default function BillList({
  bills,
  handlePay,
  user,
}: {
  bills: Bill[];
  handlePay: (billId: number) => void;
  user: string;
}) {
  return (
    <div className="space-y-4">
      {bills.map((bill) => (
        <div
          key={bill.id}
          className="p-4 bg-slate-200 rounded-lg flex justify-between items-center w-full"
        >
          <div>
            <h2 className="text-lg font-bold">{bill.title}</h2>
            <p>
              £{(bill.amount / (bill.users?.length || 1)).toFixed(2)} per person
              {bill.created_by === user ? "" : ` - ${bill.status}`}
            </p>
          </div>

          {/* {bill.created_by === user && (
            <div className="mt-2">
              <p className="text-sm font-semibold">Unpaid Users:</p>
              <ul className="list-disc list-inside">
                {bill.users
                  .filter((u) => !u.paid)
                  .map((u) => (
                    <li key={u.name}>{u.name}</li>
                  ))}
              </ul>
            </div>
          )} */}
          <button
            onClick={() => {
              handlePay(bill.id);
              console.log("View details for bill:", bill.id);
            }}
            className={`px-4 py-2 rounded-full ${
              bill.users?.some((u) => u.name === user && !u.paid)
                ? "bg-purple-300 text-black hover:bg-purple-500"
                : "bg-purple-300 text-black hover:bg-purple-500"
            }`}
          >
            {bill.users?.some((u) => u.name === user && !u.paid)
              ? "Pay"
              : "View"}
          </button>
        </div>
      ))}
    </div>
  );
}
