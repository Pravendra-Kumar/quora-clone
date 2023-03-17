import React from 'react'
import '../css/Navbar.css'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Search from '@mui/icons-material/Search';
import Language from '@mui/icons-material/Language';
import {Button} from "@mui/material"
import { Avatar } from '@mui/material'

function Navbar() {
  return (
    <div className='qHeader'>
      <div className='qHeader__logo'>
             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/330px-Quora_logo_2015.svg.png' alt=''/>
      </div>
      <div className='qHeader__icons'>
            <div className='qHeader__icon'><HomeIcon/></div>
            <div className='qHeader__icon'><FeaturedPlayListOutlinedIcon/></div>
            <div className='qHeader__icon'><AssignmentTurnedInOutlinedIcon/></div>
            <div className='qHeader__icon'><PeopleAltOutlinedIcon/></div>
            <div className='qHeader__icon'><NotificationsOutlinedIcon/></div>
      </div>
      <div className='qHeader__input'>
           <Search/>
           <input type="text" placeholder='Search Quora'/>
      </div>
      <div className='qHaeder__Rem'>
            <div className='qHeader__avatar'>
                <Avatar sx={{ width: 30, height: 30 }} />
            </div>
            <Language />
            <Button>Add Question</Button>
      </div>
    </div>
  )
}

export default Navbar