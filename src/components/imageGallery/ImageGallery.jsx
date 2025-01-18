import c from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";

export default function ImageGallery({ gallaryList }) {
  return (
    <ul className={c.list}>
      {gallaryList.map((item) => (
        <li key={item.id} className={c.item}>
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
}
