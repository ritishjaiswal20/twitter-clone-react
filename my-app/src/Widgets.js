import React from 'react';
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import {
  TwitterTimelineEmbed,
  TwitterSharebutton,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
function Widgets(){
  return ( 
  <div className="widgets">
        <div className="widgets_input">
          <SearchIcon className="widgets_searchIcon"/>
          <input placeholder="Search twitter" type="text"/>
        </div>
        <div className="widgets_widgetContainer">
          <h2>Whats happening</h2>
          <TwitterTweetEmbed tweetId={"1341072021099327489"} />
           
           <TwitterTimelineEmbed  
            souceType="profile"
            screenName="reactjs"
            options={{height:400}}
           />
           <TwitterShareButton
               url={"https://facebook.com/cleverprogrammer"}
               options={{ text: "#reactjs is awesome", via: "Ritishjaiswal" }}
           />
          </div>
  </div>
  );
}

export default Widgets;
