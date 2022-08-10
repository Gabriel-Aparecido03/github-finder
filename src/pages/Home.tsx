import { FormEvent, useState } from "react";

import { MagnifyingGlass } from "phosphor-react";
import { Header } from "../components/Header";
import { UserInformations } from "../components/UserInformation";

import './style.scss'
import { api } from "../services/api";

interface userType {
    bio : string | null
    avatar_url : string
    followers : string | null
    following : string | null
    name : string | null
    url : string | null
    public_repos : string | null
    created_at : string
    blog : string | null
    location : string | null
    company : string | null
    login : string
    twitter_username: string | null
}

export function Home() {

    const [typeUser,setTypeUser] = useState('')
    const [userObject,setUserObject]= useState<userType>()

    async function handleGettingUser(e:FormEvent) {
        e.preventDefault()
        const user = await api.get(`${typeUser}`)
            .then((response)=>{
                if(response.data) {
                    const { 
                        bio,
                        avatar_url,
                        followers,
                        following,
                        name,
                        url,
                        public_repos,
                        created_at,
                        blog,
                        location,
                        company,
                        login,
                        twitter_username
                    } = response.data

                    setUserObject({
                        bio,
                        avatar_url,
                        followers,
                        following,
                        name,
                        url,
                        public_repos,
                        created_at,
                        blog,
                        location,
                        company,
                        login,
                        twitter_username
                    })
                }
            })
    }

    return (
        <div className="github-search-container">
            <Header/>
            <form 
                className="search-action-container"
                onSubmit={handleGettingUser}
            >
                <span><MagnifyingGlass/></span>
                <input type="text" 
                    onChange={( e => setTypeUser(e.target.value))}
                    placeholder='Search by Github username'
                />
                <button
                    type="submit"
                >
                    Find dev
                </button>
            </form>
            {
                userObject && <UserInformations user={userObject}/>
            }
            {
                !userObject && 
                <div style={{display:'flex',justifyContent:'center'}}>
                    <span>User not found,ty again</span>
                </div>
            }
            
        </div>
    )
}