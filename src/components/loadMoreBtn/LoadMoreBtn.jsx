import c from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({loadMore}) {
  return (
    <button className={c.button} onClick={loadMore}>Load more</button>
  );
}