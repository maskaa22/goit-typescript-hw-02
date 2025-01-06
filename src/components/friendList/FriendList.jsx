import css from "./FriendList.module.css";
import FriendListItem from "../friendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={css["friend-list"]}>
      {friends.map((friend) => (
        <li key={friend.id} className={css["friend-item"]}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
