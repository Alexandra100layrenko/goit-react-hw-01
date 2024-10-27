import s from './FriendList.module.css'


export default function FriendList({friends}) {

    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <li key={friend.id} className={s.item}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                </li>
            ))}
        </ul>
    )
}