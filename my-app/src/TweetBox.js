import React from 'react';
import './TweetBox.css'
import { Avatar, Button, IconButton } from '@mui/material';
function TweetBox() {
  return (
  <div className="tweetBox">
      <form>
           <div className="tweetBox_input">
              <Avatar src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"/>
              <input placeholder="What is happening" type="text" />
           </div>
           <input
            className="tweetBox_imageInput"
           placeholder="Optional:enter image url" type="text" />
           <Button className='tweetBox_tweetButton'>Tweet</Button>
     </form>      
  </div>
  );
}

export default TweetBox;
