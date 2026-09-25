import './ProfileContainer.css'
function ProfileContainer({profile}){
    return(
        <div className="profileContainer">
            <div className="profile">
                <img src={profile.avatar} alt="" />

                <div className="statPill">
                    <span className="label">Followers:</span>
                    <span className="value">{profile.followers}</span>
                </div>

                <div className="statPill">
                    <span className="label">Following:</span>
                    <span className="value">{profile.following}</span>
                </div>

                <div className="statPill">
                    <span className="label">Location:</span>
                    <span className="value">{profile.location}</span>
                </div>
                <h1>{profile.name}</h1>
                <h2>{profile.bio}</h2>
            </div>
        </div>
    )
}

export default ProfileContainer