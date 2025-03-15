import Modal from "react-modal";
import c from "./ImageModal.module.css";
import { FC } from "react";
import { ImageModalProps } from "../../types";

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  closeModal,
  data: { alt, url, likes, username },
}) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgb(61 55 55 / 75%)",
    },
    content: {
      width: "80%",
      // height: '400px',
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      borderRadius: "10px",
      border: "none",
      overflow: "hidden",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      appElement={document.getElementById("root") as HTMLElement}
    >
      <div className={c.container}>
        <img src={url} alt={alt} className={c.img} />
        <div className={c.info}>
          <p className={c.text}>Author - {username}</p>
          <p className={c.text}>Likes: {likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
