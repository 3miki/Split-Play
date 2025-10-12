import { Bill } from "../types";

interface BillDetailProps {
  bill: Bill;
}

export default function BillDetail({
  bill,
  onSettle,
}: {
  bill: {
    id: number;
    title: string;
    amount: number;
    status: string;
    created_by: string;
    users: { name: string; paid: boolean }[];
  };
  onSettle: () => void;
}) {
  const splitAmount = bill.amount / bill.users.length;
  const unpaidUsers = bill.users.filter((user) => !user.paid);

  const handleMarkAsPaid = (userName: string) => {
    bill.users = bill.users.map((user) =>
      user.name === userName ? { ...user, paid: true } : user
    );
    console.log(`${userName} has paid their share.`);
  };

  return (
    <div className="p-4 bg-slate-200 rounded">
      <h2 className="text-xl font-bold">{bill.title}</h2>
      <p>Total Amount: £{bill.amount.toFixed(2)}</p>
      <p>Split Amount: £{splitAmount.toFixed(2)} per user</p>
      <p>Created By: {bill.created_by}</p>
      <h3 className="text-lg font-semibold mt-4">Unpaid Users:</h3>
      <ul>
        {unpaidUsers.map((user) => (
          <li key={user.name} className="flex justify-between items-center">
            <span>{user.name}</span>
            <button
              onClick={() => handleMarkAsPaid(user.name)}
              className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
            >
              Mark as Paid
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
