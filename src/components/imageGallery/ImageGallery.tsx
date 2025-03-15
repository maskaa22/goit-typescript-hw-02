import c from "./ImageGallery.module.css";
import ImageCard from "../imageCard/ImageCard";
import { FC } from "react";
import { ImageGalleryProps } from "../../types";

const ImageGallery: FC<ImageGalleryProps> = ({
  gallaryList,
  openModal,
  setDataForModal,
}) => {
  return (
    <ul className={c.list}>
      {gallaryList.map((item) => (
        <li key={item.id} className={c.item}>
          <ImageCard
            item={item}
            openModal={openModal}
            setDataForModal={setDataForModal}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
