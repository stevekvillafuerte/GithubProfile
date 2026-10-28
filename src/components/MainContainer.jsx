import RepoContainer from './RepoContainer'
import ProfileContainer from './ProfileContainer'
import './MainContainer.css'
function MainContainer({repos,profile,showAllRepos,onToggleRepos}){
    return(
        <div className="container">
            <ProfileContainer profile={profile}/>
            <RepoContainer repos={repos} showAllRepos={showAllRepos}/>
            {repos.length > 4 && (
                <button
                    className="repositoriesToggle"
                    type="button"
                    aria-expanded={showAllRepos}
                    onClick={onToggleRepos}
                >
                    {showAllRepos ? 'Show fewer repositories' : 'View all repositories'}
                </button>
            )}
        </div>
    )
}

export default MainContainer