import { Avatar } from '@material-ui/core'
import React from 'react'
import './QouraBox.css'
function QuoraBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox__info'>
            <Avatar sx={{ width: 30, height: 30 }}/>
            <h5>Username</h5>
        </div>
        <div className='quoraBox__quora'>
          <p>What is your Question or Link?</p>
        </div>
    </div>
  )
}

export default QuoraBox