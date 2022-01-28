import React, { useState } from 'react';
import './TweetBox.css'
import { Avatar, Button, IconButton } from '@mui/material';
import db from './firebase';
function TweetBox() {
   const[tweetMessage,setTweeetMessage]=useState("");
   const[tweetImage,setTweetImage]=useState("");
   const sendTweet=(e) =>{
      e.preventDefault();
      db.collection("posts").add({
         displayName: "Ritish jaiswal",
         username:"ritish",
         verified: true,
         text:tweetMessage,
         image:tweetImage,
         avatar:"https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"

      });
      setTweeetMessage("");
      setTweetImage("");
      
   }   
  return (
  <div className="tweetBox">
      <form>
           <div className="tweetBox_input">
              <Avatar src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1"/>
              <input  onChange={(e) =>   setTweeetMessage(e.target.value)}
               value={tweetMessage} placeholder="What is happening" type="text" />
           </div>
           <input
           onChange={(e) => setTweetImage(e.target.value)}
           value={tweetImage}
            className="tweetBox_imageInput"
           placeholder="Optional:enter image url" type="text" />
           <Button onClick={sendTweet}type="submit" className='tweetBox_tweetButton'>Tweet</Button>
     </form>       
  </div>
  );
}

export default TweetBox;
