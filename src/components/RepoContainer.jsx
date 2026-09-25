import RepoCard from './RepoCard'
import './RepoContainer.css'
function RepoContainer({repos}){
    return(
       <div className='RepoContainer'>
        {repos.map(repo=>{
            return <RepoCard key={repo.id} repoData={repo}/>
        })}
      </div>
    )
}

export default RepoContainer
