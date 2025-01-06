import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css["profile-card"]}>
      <div className={css.user}>
        <img src={image} alt="User avatar" className={css.foto} />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css["statictic-list"]}>
        <li className={css["statictic-item"]}>
          <span className={css["statictic-title"]}>Followers</span>
          <span className={css["statictic-data"]}>{followers}</span>
        </li>
        <li className={css["statictic-item"]}>
          <span className={css["statictic-title"]}>Views</span>
          <span className={css["statictic-data"]}>{views}</span>
        </li>
        <li className={css["statictic-item"]}>
          <span className={css["statictic-title"]}>Likes</span>
          <span className={css["statictic-data"]}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
