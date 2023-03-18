import React from 'react'
import './index.css'
import "./App.css";
import Quora from './components/Quora.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './auth/Register';
import Login from "./auth/Login";

const App = () => {


  return (
    <BrowserRouter>
            <div className="App">
            <Quora/>
            <Routes>
                 <Route path="/" element={<Quora/>}/>
                 <Route path="/register" element={<Register/>}/>
                 <Route path="/login" element={<Login/>}/>
            </Routes>
                
            </div>
    </BrowserRouter>
  )
}


export default App;


