import s from './Profile.module.css'


export default function Profile(userData) {
    const {username, tag, location, avatar, stats} = userData;
    
    return (
        <div>
            <div>
                <img
                    src={avatar}
                    alt="User avatar"
                />
                <p>{username}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
            <ul>
                <li>
                    <span>{stats.followers}</span>
                    <span>1000</span>
                </li>
                <li>
                    <span>{stats.views}</span>
                    <span>2000</span>
                    </li>
                <li>
                    <span>{stats.likes}</span>
                    <span>3000</span>
                </li>
            </ul>
        </div>
    )
}