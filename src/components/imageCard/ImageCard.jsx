import c from "./ImageCard.module.css";

export default function ImageCard({ item }) {
  return (
    <div className={c.card}>
      <img alt={item.alt_description} src={item.urls.small} className={c.img}/>
    </div>
  );
}
