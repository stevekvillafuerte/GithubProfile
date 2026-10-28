import RepoCard from './RepoCard'
import './RepoContainer.css'
function RepoContainer({repos,showAllRepos}){
    const visibleRepos = showAllRepos ? repos : repos.slice(0, 4)

    return(
       <div className='RepoContainer'>
        {visibleRepos.map(repo=>{
            return <RepoCard key={repo.id} repoData={repo}/>
        })}
      </div>
    )
}

export default RepoContainer
