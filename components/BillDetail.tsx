import { Bill } from "../types";
import SettleBillButton from "./SettleBillButton";

interface BillDetailProps {
  bill: Bill;
  onSettle: () => void;
  user: string;
}

export default function BillDetail({ bill, onSettle, user }: BillDetailProps) {
  const allUsers = bill.users?.length || 1;
  const totalAmount = bill.amount || 0;
  const splitAmount = totalAmount / allUsers;
  const isUserUnpaid = bill.users?.some((u) => u.name === user && !u.paid);
  return (
    <div key={bill.id} className="p-4 bg-slate-200 rounded">
      <h2 className="text-xl font-bold">{bill.title}</h2>
      <p>Total Amount: £{totalAmount.toFixed(2)}</p>
      <p>Split Amount: £{splitAmount.toFixed(2)} per user</p>
      <p>Created By: {bill.created_by}</p>

      {user === bill.created_by ? (
        // Content for the creator of the bill
        <>
          <h3 className="text-lg font-semibold mt-4">Unpaid Users:</h3>
          <ul>
            {bill.users
              ?.filter((u) => !u.paid)
              .map((unpaidUser) => (
                <li key={unpaidUser.name}>{unpaidUser.name}</li>
              ))}
          </ul>
        </>
      ) : (
        // Content for other users
        <>
          {isUserUnpaid ? (
            <p className="text-purple-500 font-semibold mt-4">
              Status: You are unpaid
            </p>
          ) : (
            <p className="text-purple-300 font-semibold mt-4">Status: Paid</p>
          )}

          {isUserUnpaid && (
            <div className="mt-4">
              <SettleBillButton onClick={onSettle} />
            </div>
          )}
        </>
      )}
    </div>
  );
}