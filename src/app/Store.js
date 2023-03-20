import React  from 'react';
import Quora from "../components/Quora";
import Login from "../auth/Login";




function store(props) {

  

  return (
    <>
    {props.data.login ? <Login/>:<Quora/>} 
    
    </>
  )
}

export default store
