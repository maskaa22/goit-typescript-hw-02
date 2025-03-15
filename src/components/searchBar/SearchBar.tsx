import { CiSearch } from "react-icons/ci";
import c from "./SearchBar.module.css";
import { FC, FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (word: string) => void;
  err: (massage: string) => void;
  flag: (status: boolean) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSubmit, err, flag }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const search = (form.elements.namedItem("search") as HTMLInputElement)
      .value;
    // search.value;
    if (search.trim() === "") {
      err("Please enter search term!");
      return;
    }
    onSubmit(search);
    flag(true);
    form.reset();
  };
  return (
    <header className={c.header}>
      <form className={c.form} onSubmit={handleSubmit}>
        <input
          className={c.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
        <button className={c.submit} type="submit">
          <CiSearch />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
