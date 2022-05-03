import styled from 'styled-components'

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 1020px;
    font-family: Segoe UI;
    font-size: 15px;


`
export const Nav =  styled.nav`
    width: 100%;
    background-color: #24292e;
    height: 62.98px;
    position: sticky;
    top: 2px;
`

export const RepoNav = styled.nav`

height:60px;
width: 60%;
margin-left: 35%;
display: flex;


div{
    height: 30px;
    width: 20%;
    display: flex;
    justify-content: space-between;
    &:hover {
        border-bottom: 1px solid orange;
    }
}
`

export const DashboardMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

`

export const Anchor = styled.a`
display: flex;
text-decoration: none;
width: 140px;
border: 1px solid blue;
justify-content: center;
border-radius: 10px;
&:hover{
    background-color: #24292e ;
    border: 1px solid green;
    color: white;
}
`
export const RepoDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    margin-left: 40px;
    margin-top: 5px;
    height: 80px;
    border-bottom: 2px solid grey;
`

export const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    border: 1px solid black;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 400px;
        /* border: 2px solid black; */
        height: 100px;
        margin: auto;
        color: blue;
        /* margin-top: 7%; */

    }

    input {
        width: 70%;
    }

    a {
        margin-left: center;
        margin-top: 10px;
    }


    
    
`