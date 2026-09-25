import RepoContainer from './RepoContainer'
import ProfileContainer from './ProfileContainer'
import './MainContainer.css'
function MainContainer({repos,profile}){
    return(
        <div className="container">
            <ProfileContainer profile={profile}/>
            <RepoContainer repos={repos}/>
        </div>
    )
}

export default MainContainer