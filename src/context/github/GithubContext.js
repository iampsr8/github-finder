import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext=createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user:{},
        isLoading:false
    }

    const [state,dispatch]=useReducer(githubReducer,initialState)
    
    //get search results
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q:text
        })
        const response = await fetch(`${GITHUB_URL}/search/users?${params}`)
        const {items}=await response.json()
        dispatch({
            type: 'GET_USERS',
            payload:items
        })
    }

    //get a single user
    const getUser = async (login) => {
        setLoading()
        
        const response = await fetch(`${GITHUB_URL}/users/${login}`)
        
        
        if (response.status === 404) {
            window.location = '/notfound'
        } else {
            const data = await response.json()
            dispatch({
                type: 'GET_USER',
                payload:data
            })
        }
        
    }

    //clear users from state
    const clearUsers = () => dispatch({
        type:'CLEAR_USERS'
    })

    const setLoading = () => dispatch({
        type:'SET_LOADING'
    })
    return <GithubContext.Provider value={{
        users:state.users,
        isLoading: state.isLoading,
        user:state.user,
        searchUsers,
        getUser,
        clearUsers
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext