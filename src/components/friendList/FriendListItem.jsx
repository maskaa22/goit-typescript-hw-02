import css from "./FriendList.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img className={css.avatar} src={avatar} alt="Avatar" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
