import React, {useEffect} from 'react'
import bookImage from '.././'
import { RepoNav, DashboardMain } from '../Styles/StyledComponents'
import ReposContainer from './ReposContainer'
import {useDispatch, useSelector} from 'react-redux'
import { getRepos } from '../Toolkit/Slice/repoSlice'
import '../Styles/index.css'

export default function Dashboard() {
    const code = new URLSearchParams(location.search).get('code')
    const {repos, isLoading, isSuccess, userDetails} = useSelector((state) => state.repo)
    const dispatch = useDispatch()
    useEffect(()=> {
        if(!isSuccess) {
            dispatch(getRepos(code))
        }
    },[])

    if(isLoading) {
        return <div id='loader'></div> 
    }
    return (
        <DashboardMain>
        <div id='profile-section'>
            <div id='avatar' 
            style={{backgroundImage: `url(${userDetails.avatar_url})`}}>              
            </div>
            <div>{userDetails.name}</div>
            <div className='profile-details'>{userDetails.login}</div>
            <div className='profile-details' id='follow-button'>Follow </div>
            <div className='profile-details' id='follow-details'><span>{userDetails.followers}followers</span>
            <span>{userDetails.following}following</span></div>
        </div>
        <div id='repos-holder'>
        <RepoNav>
            <div>Overview</div>
            <div>Repositories</div>
            <div>Projects</div>
            <div>Packages</div>
            <div>Stars</div>
        </RepoNav>
        {repos.map((repo, index) => (
            <ReposContainer 
            key={index}
            name={repo.name}
            visibility = {repo.visibility}
            language = {repo.language}
            description={repo.description}
            />
        ))}

        
        </div>
        </DashboardMain>
    )
}