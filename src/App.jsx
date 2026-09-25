import { useState,useEffect } from 'react'
import RepoCard from './components/RepoCard'
import './App.css'

function App() {
  const [profile,setProfile] = useState({
    name:"",
    bio:"",
    avatar:"",
    followers:0,
    following:0,
    location:""
  })
  const [repos,setRepos] = useState([])


  function handleSearch(e){
    e.preventDefault();
    fetch("https://api.github.com/users/github")
    .then((response) => response.json())
    .then((data) => {
      setProfile({
        name:data.name,
        bio:data.bio,
        avatar:data.avatar_url,
        followers:data.followers,
        following:data.following,
        location:data.location
      });
      
    })
    .catch((error) => {
      console.log(error);
    });


  
    fetch("https://api.github.com/users/github/repos")
    .then((response) => response.json())
    .then((data) => {
      const shapedRepos = data.map(repo =>{
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          license: repo.license ? repo.license.spdx_id : null,
          forks: repo.forks,
          watchers: repo.watchers,
          last_update: repo.updated_at,
          html_url:repo.html_url,
        };
      });
      setRepos(shapedRepos)
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  

  return (
    <div className="App">
      {repos.map(repo=>{
        return <RepoCard key={repo.id}repoData={repo}/>
      })}
    </div>
  )
}

export default App
