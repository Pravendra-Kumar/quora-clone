import React from 'react'
import './Quora.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar.js'
import Feed from './Feed'
import Widget from './Widget'


function Quora() {
  return (
    <div className='quora'>
       <Navbar/>
       <div className='quora__content'>
        <Sidebar />
        <Feed/>
        <Widget/>
       </div>
    </div>
  )
}

export default Quora