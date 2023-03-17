import { Avatar } from '@mui/material'
import React from 'react'
import '../css/Post.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Post() {
  return (
    <div className='post'>
       <div className='post__info'>
           <Avatar sx={{ width: 30, height: 30 }}/>
           <h5>Usename</h5>
           <small>Timestamp</small>
       </div>
       <div className='post__body'>
            <div className='post__question'>
               <p>Question</p>
               <button className='post__btnAnswer'>Answer</button>
            </div>
            <div className='post__answer'>
                <p></p>
            </div>
            <img src='https://qph.cf2.quoracdn.net/main-qimg-7fad531ab98513b4b9b4989814ebb520-pjlq' alt=''/>
       </div>
       <div className='post__footer'>
           <div className='post__footerAction'>
                <ArrowUpwardIcon/>
                <ArrowDownwardIcon/>
           </div>
           <RepeatIcon/>
           <ChatBubbleOutlineIcon/>
           <div className='post__footerLeft'>
               <ShareIcon/>
               <MoreHorizIcon/>
           </div>
       </div>
    </div>
  )
}

export default Post