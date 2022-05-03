import React, {useState} from 'react'
import { LoginForm } from '../Styles/StyledComponents'
import { Anchor } from '../Styles/StyledComponents'

export default function Login(props) {
    const {onNameChange, userName, onSubmit} = props

    return (
        <>
        <LoginForm>
            <div>
             <label htmlFor='username'>
                 Enter your Github Username
            </label>
             <input onChange={onNameChange} id='username' type='text' value={userName}></input>
             <Anchor onClick={(e)=>{onSubmit(e, userName)}}
             href= '#'
             >Login to Github</Anchor>
            </div>
        </LoginForm>
        </>
    )
}