
function HeaderSearch({userName,setUserName,onSubmit}){
    <form action="" onSubmit={onSubmit}>
          <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
      </form>
}

export default HeaderSearch