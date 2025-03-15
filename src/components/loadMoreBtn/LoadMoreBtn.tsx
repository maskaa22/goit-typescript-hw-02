import { FC } from "react";
import c from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  loadMore: () => void;
}
const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button className={c.button} onClick={loadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
