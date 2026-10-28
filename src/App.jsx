import {useEffect, useState} from 'react'
import MainContainer from './components/MainContainer'
import './App.css'
import HeaderSearch from './components/HeaderSearch'
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
  const [userName,setUserName] = useState("github")
  const [showAllRepos,setShowAllRepos] = useState(false)


  function handleSearch(e){
    e.preventDefault();
    setShowAllRepos(false)
    fetch("https://api.github.com/users/{}".replace("{}",userName))
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


  
    fetch("https://api.github.com/users/{}/repos".replace("{}",userName))
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
  
  useEffect(()=>{
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
  }, [])
  return (
    <div className="App">
      <HeaderSearch userName={userName} setUserName={setUserName} onSubmit={handleSearch}/>

      <MainContainer
        repos={repos}
        profile={profile}
        showAllRepos={showAllRepos}
        onToggleRepos={() => setShowAllRepos(!showAllRepos)}
      />
    </div>
  )
}

export default App
