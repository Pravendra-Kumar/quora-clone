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
import { useState } from 'react';
import Modal from 'react-modal';

function Navbar() {

  const [openModal, setOpenModal]= useState(false);

  return (
    <div className='qHeader'>
      <div className='qHeader__logo'>
             <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/330px-Quora_logo_2015.svg.png' alt=''/>
      </div>
      <div className='qHeader__icons'>
            <div className='qHeader__icon active' ><HomeIcon/></div>
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
                <Avatar sx={{ width: 20, height: 20 }} />
            </div>
            <Language />
            <Button onClick={()=>setOpenModal(true)}>Add Question</Button>

            <Modal
            isOpen={openModal}
            onRequestClose={()=>setOpenModal(false)}
            shouldCloseOnOverlayClick={false}
            style={{
            overlay: {
              width: 700,
              height: 590,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
            >
            <div className='modal__title'>
               
               <div className='modal__info'>
                 <Avatar  className="Avatar"/>
                 <p>UseName</p>
               </div>
               <h5>Add Question</h5>
               <div className='close'>  <button onClick={()=>setOpenModal(false)}>Close</button></div>
               
             </div>
                
            </Modal>
      </div>
    </div>
  )
}

export default Navbar