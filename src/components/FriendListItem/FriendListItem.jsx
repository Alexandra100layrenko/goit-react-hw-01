import FriendList from "../FriendList/FriendList";

export default function FriendListItem(friends){
    return(
        <ul>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem friend={friend}/>
                </li>
            ))}
        </ul>
    );
}