import React from 'react'
import "./Header.css";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {Avatar} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';

const Header = () => {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="header">
        <div className="header_left">
          <Avatar className='header_avatar'
          alt={user?.displayName}
          src={user?.photoURL}
          />
         <AccessTimeIcon />
        </div>
        <div className="header_search ">
          <SearchIcon />
             <input type="text" placeholder='Search Sadiq programmer'/>
        </div>
        <div className="header_right">
          <HelpOutlineIcon />
        </div>
    </div>
  )
}

export default Header;