import React from 'react';
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Button } from '@mui/material';
function Sidebar() {
  return( 
  <div className="sidebar">
      <TwitterIcon className="sidebar_twittericon" />

      <SidebarOption active Icon={HomeIcon} text="home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={ NotificationsNoneOutlinedIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlinedIcon } text="Message"/>
      <SidebarOption Icon={BookmarkBorderIcon  } text="Bookmark"/>
      <SidebarOption Icon={ListAltIcon } text="Lists"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
     

     <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
  </div>
  );
}

export default Sidebar;
