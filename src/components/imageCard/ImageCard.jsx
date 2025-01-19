import c from "./ImageCard.module.css";

export default function ImageCard({ item, openModal, setDataForModal }) {
  return (
    <div className={c.card}>
      <img
        alt={item.alt_description}
        src={item.urls.small}
        onClick={() => {
          openModal();
          setDataForModal({
            alt: item.alt_description,
            url: item.urls.regular,
            likes: item.likes,
            username: item.user.name,
          });
        }}
        className={c.img}
      />
    </div>
  );
}
