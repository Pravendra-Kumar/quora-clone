import React, { useState } from "react";
import './index.css'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './auth/Register';
import Login from "./auth/Login";
import Store from './app/Store';
import Quora from "./components/Quora";


const App = () => {

  const[login, setLogin]= useState(false)
  const props = { login: login, setLogin: setLogin };

  return (
    <>
    
    <BrowserRouter>
          
           <div className="App">
           <Store data={props}/>
            <Routes>
                 <Route path="/" element={<Login/> }/>
                 <Route path="/login" element={<Login/>}/>
                 <Route path="/register" element={<Register/>}/>
                 <Route path="/quora" element={<Quora/>}/>

                
            </Routes>
                
          </div>
          
    </BrowserRouter>
    </>
  )
}


export default App;


