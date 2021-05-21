import React from "react";
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import SearchOutlined from "@material-ui/icons/Search";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {IconButton} from  "@material-ui/core";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
      <div className="chat">
          <div className="chat__header">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />

            <div className="chat__headerInfo">
                <h3>Lynda Cool Business</h3>
                <p>Last Seen at....</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <IconButton>
                    <AttachFileIcon / >
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
          </div> 
          <div className="chat__body">
                <p className="chat__message">
                  <span className ="chat__name">Johhny Mka</span>
                  This is a message from joe , we were looking for you the all day, we depivng tint sokething very speciafifhd
                  <span className="chat__timestamp">
                    {new Date().toLocaleString() + ''}
                  </span>

                </p>

                <p className="chat__message chat__receiver">
                  <span className ="chat__name">Cooling Business</span>
                  This is ahe all day, we depivng tint sokething very speciafifhd
                  <span className="chat__timestamp">
                    {new Date().toLocaleString() + ''}
                  </span>

                </p>

                <p className="chat__message">
                  <span className ="chat__name">Johhny Mka</span>
                  This is a message from joe , we were looking for you the all day, we depivng tint sokething very speciafifhd
                  <span className="chat__timestamp">
                    {new Date().toLocaleString() + ''}
                  </span>

                </p>  

                <p className="chat__message chat__receiver">
                  <span className ="chat__name">Cooling Business</span>
                  This is ahe all day, we depivng tint sokething very speciafifhd
                  <span className="chat__timestamp">
                    {new Date().toLocaleString() + ''}
                  </span>

                </p>
                <p className="chat__message chat__receiver">
                  <span className ="chat__name">Cooling Business</span>
                  very speciafifhd :) Okay
                  <span className="chat__timestamp">
                    {new Date().toLocaleString() + ''}
                  </span>

                </p>

          </div> 

          <div className="chat__footer">
            <InsertEmoticonIcon />
            <form>
                <input                  
                    placeholder = "Type a message"
                    type = "text" />

                 <button  type = "submit">
                    Send a Message    
                 </button>   
            </form>
            <MicIcon />

          </div>
      </div>
    );
  }
  
  export default Chat;