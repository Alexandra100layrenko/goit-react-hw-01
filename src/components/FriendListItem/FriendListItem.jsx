import s from './FriendListItem.module.css'


export default function FriendListItem(friends) {
    const {avatar, name, isOnline} = friends;

    return (
       <div className={s.friend}>
            <img src={avatar} alt={`${name} avatar`} width="48" />
            <p className={s.name}>{name}</p>
            <span className={isOnline ? s.online : s.offline}>
                {isOnline ? 'Online' : 'Offline'}
            </span>
        </div>
    )
}