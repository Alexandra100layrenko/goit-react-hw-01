import FriendListItem from '../FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';


export default function FriendList({avatar, name, isOnline}){
    return(
        <div>
            <img src="{avatar}" alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </div>
    );
}