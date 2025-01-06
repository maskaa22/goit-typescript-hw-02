import css from "./TransactionHistory.module.css";

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <>
      <td className={css[("table-col", "table-col-first")]}>{type}</td>
      <td className={css["table-col"]}>{amount}</td>
      <td className={css["table-col"]}>{currency}</td>
    </>
  );
}
