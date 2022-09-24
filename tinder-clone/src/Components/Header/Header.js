import React from 'react'
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return (
    <div className='header'>
      <IconButton>
      <AccountCircleIcon fontSize='large' className='header__icon'/>
      </IconButton>
      <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/TinderIcon-2017.svg/1200px-TinderIcon-2017.svg.png' alt='tinderlogo'></img>
      <IconButton>
      <ForumIcon fontSize='large' className='header__icon'/>
      </IconButton>
    </div>
  )
}

export default Header
