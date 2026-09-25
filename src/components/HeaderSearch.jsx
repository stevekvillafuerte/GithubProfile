import './HeaderSearch.css'
import Search from '../assets/Search.svg'
function HeaderSearch({ userName, setUserName, onSubmit }) {
  return (
    <form action="" onSubmit={onSubmit}>
        <div className="inputContainer">
            <img src={Search} alt="" />
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
        </div>
    </form>
  )
}

export default HeaderSearch