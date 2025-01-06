import css from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../transactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory({ items: transactions }) {
  return (
    <table className={css.table}>
      <thead className={css["table-head"]}>
        <tr className={css["table-row"]}>
          <th className={css["table-col"]}>Type</th>
          <th className={css["table-col"]}>Amount</th>
          <th className={css["table-col"]}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className={css["table-row"]}>
            <TransactionHistoryItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
