import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react";

import './style.scss'

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
    twitter_username:string | null
}

interface userTypeProps {
    user :userType
}

export function UserInformations({user}:userTypeProps) {
    return (
        <section className="github-search-user-container">
            <div className="user-container-main-infos">
                <div id='user-photo'>
                    <img src={user.avatar_url}alt="" />
                </div>
                <div className="user-container-name-join">
                    <div id='username-github'>
                        <h4>{user.name}</h4>
                        <span></span>
                    </div>
                    <div id='username-join-github'>
                        <span>{user.created_at}</span>
                    </div>
                </div>
            </div>
            <div className="user-container-description">
                <p>{user.bio}</p>
            </div>
            <div className="user-container-numbers">
                <div>
                    <span>Repos</span>
                    <p>{user.public_repos}</p>
                </div>
                <div>
                    <span>Followers</span>
                    <p>{user.followers}</p>
                </div>
                <div>
                    <span>Following</span>
                    <p>{user.following}</p>
                </div>
            </div>
            <div className="user-container-links-and-others">
                <div className="item-link">
                    
                    <p><MapPin/> {user.location}</p>
                </div>
                <div className="item-link">
                    
                    <a href={user.blog ? user.blog : ''} target='_blank'><Link/>{user.blog ? user.blog : ''} </a>
                </div>
                <div className="item-link">
                    <p> <TwitterLogo/> {user.twitter_username}</p>
                </div>
                <div className="item-link">
                    <p> <Buildings/> {user.company}</p>
                </div>
            </div>
        </section>
    )
}