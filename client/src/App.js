import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Link, Routes, Route, useParams } from 'react-router-dom'
import Login from "./Components/Login.js";
import Dashboard from "./Components/Dashboard.js";
import { Nav, MainDiv } from "./Styles/StyledComponents.js";
import { useDispatch } from "react-redux";
import { reset } from "./Toolkit/Slice/repoSlice.js";





const initialFormData = {
    // sensible initial values?
    userName: '',
  };


export default function App() {
    const [apiData, setApiData] = useState({})
    const [formData, setFormData] = useState(initialFormData);

    const dispatch = useDispatch()
    dispatch(reset())

    const onSubmit = (e, username) => {
      e.preventDefault()
      if(username==='') {
        alert("Please enter a username")
        return
      }
        location.href = "https://github.com/login/oauth/authorize?client_id=217f6181f9ee7168f380&login="+username+"&scope=repo"
    }

    const onNameChange = e => {
        // debugger;
        setFormData({
          userName: e.target.value,
        });
      };

    return ( 
        <MainDiv>
          <Nav />
        <Routes path="/">
          <Route index 
          element={ 
          <Login 
          onNameChange={onNameChange}
          userName={formData.userName}
          onSubmit={onSubmit} />}
          >
        </Route>
          <Route path="/dashboard"
          element={<Dashboard />}
          >
        </Route>
        </Routes>
        </MainDiv>

    )
}