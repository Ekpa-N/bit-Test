import React from 'react'
import { RepoDiv } from '../Styles/StyledComponents'
import '../Styles/index.css'


export default function ReposContainer({name, visibility, language, description}) {
    return (
        <RepoDiv>
            <div id='repo-top'>
            <h4 id='repo-name'>{name}</h4>
            <div id='repo-access'>{visibility}</div>
            </div>
            <div id='repo-middle'>
            <h5 className='repo-description'>{description}</h5>
            </div>
            <div id='repo-bottom'>
                <div id='stack-colour'></div>
                <h5 className='repo-description stack-items' id='repo-stack'>{language}</h5>
            </div>
            
        </RepoDiv>
    )
}