import React, { forwardRef } from 'react';
import "./Post.css";
import { Avatar, Button, IconButton } from '@mui/material';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
const Post = forwardRef(({
    displayName,
    username,
    verified,
    timestamp,
    image,
    avatar,
    text
},ref) => {
  return (
  <div className="post" ref={ref}>
     
       <div className="post_avatar">
             <Avatar src={avatar}/>
       </div>

       <div className="post_body">
           <div className="post_header">
               <div    className="post_headerText">
                 <h3>
                     {displayName}{" "}
                     <span className="post_headerSpecial">
                            {verified && <VerifiedIcon className="post_badge"/>}@{username}
                     </span>
                 </h3>
               </div>
               <div className="post_headerDescription">
                   <p>{text}</p>
               </div>
           </div>
           <img src={image} />
            
        <div className="post_footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small"/>
            <PublishIcon fontSize="small"/>
        </div>

       </div>
  </div>
  );
});

export default Post;
