import React from 'react'
import './Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Search from '@material-ui/icons/Search';
import Language from '@material-ui/icons/Language';
import {Button} from "@material-ui/core"
import { Avatar } from '@material-ui/core'

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