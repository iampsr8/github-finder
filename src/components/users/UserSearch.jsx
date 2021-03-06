import { useState,useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
    const [text, setText] = useState('')
    const { users,dispatch} = useContext(GithubContext)
    const {setAlert}=useContext(AlertContext)
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please enter something','error')
        } else {
            // search for users
          dispatch({type:'SET_LOADING'})
          const users = await searchUsers(text)
          dispatch({
            type: 'GET_USERS',
            payload:users
          })
            setText('')
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input xl:input-lg lg:input-lg md:input-md text-black sm:input-sm"
                              placeholder="Search"
                              value={text}
                              onChange={handleChange}
                />
                <button type="submit" className="absolute top-0 right-0 rounded-l-none btn w-28 xl:btn-lg sm:btn-md text-slate-200">Go</button>
            </div>
          </div>
        </form>
          </div>
          {users.length > 0 && (
              <div>
              <button onClick={()=>dispatch({type:'CLEAR_USERS'})} className="btn btn-ghost xl:btn-lg sm:btn-md">Clear</button>
            </div>
          )}
      
    </div>
  );
}

export default UserSearch;
