import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ filter, setFilter }) {
  const filterId = useId();
  return (
    <div className={css.container}>
      <label name="filter" htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        value={filter}
        name="filter"
        onChange={(e) => setFilter(e.target.value)}
        id={filterId}
        className={css.search}
      />
    </div>
  );
}
