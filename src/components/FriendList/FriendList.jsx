import s from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem';


export default function FriendList({ friends }) {

    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem {...friend} />
                </li>
            ))}
        </ul>
    );
}