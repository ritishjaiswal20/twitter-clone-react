import React from 'react';
import "./Post.css";
import { Avatar, Button, IconButton } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
function Post({
    displayName,
    username,
    verified,
    timestamp,
    image,
    avatar
}) {
  return (
  <div className="post">
     
       <div className="post_avatar">
             <Avatar src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"/>
       </div>

       <div className="post_body">
           <div className="post_header">
               <div    className="post_headerText">
                 <h3>
                     Ritish jaiswal{" "}
                     <span className="post_headerSpecial">
                         <VerifiedIcon className="post_badge"/>@Ritish jaiswal
                     </span>
                 </h3>
               </div>
               <div className="post_headerDescription">
                   <p>I challenge you to build a twitter clone</p>
               </div>
           </div>
           <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif"/>
            
        <div className="post_footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize="small"/>
        </div>

       </div>
  </div>
  );
}

export default Post;
