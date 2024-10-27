import s from './Profile.module.css'


export default function Profile(userData) {
    const {username, tag, location, avatar="https://cdn-icons-png.flaticon.com/512/2922/2922506.png", stats} = userData;

    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img src={avatar} alt="User avatar" className={s.avatar} />
                <p className={s.username}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>
            <ul className={s.stats}>
                <li className={s.item}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{stats.views}</span>
                </li>
                <li className={s.item}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{stats.likes}</span>    
                </li>
            </ul>
        </div>
    )
}