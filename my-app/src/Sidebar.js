import React from 'react';
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
function Sidebar() {
  return( 
  <div className="sidebar">
      <TwitterIcon/>

      <SidebarOption Icon={HomeIcon} text="home"/>
      <SidebarOption Icon={SearchIcon} text="Explore"/>
      <SidebarOption Icon={ NotificationsNoneOutlinedIcon} text="Notifications"/>
      <SidebarOption Icon={MailOutlinedIcon } text="Message"/>
      <SidebarOption Icon={BookmarkBorderIcon  } text="Bookmark"/>
      <SidebarOption Icon={ListAltIcon } text="Lists"/>
      <SidebarOption Icon={MoreHorizIcon} text="More"/>
      <SidebarOption Icon={PermIdentityIcon} text="Profile"/>

  </div>
  );
}

export default Sidebar;
