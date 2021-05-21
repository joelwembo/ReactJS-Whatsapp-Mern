import React from "react";
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import SearchOutlined from "@material-ui/icons/Search";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {IconButton} from  "@material-ui/core";


function Chat() {
    return (
      <div className="chat">
          <div className="chat__header">
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />

            <div className="chat__headerInfo">
                <h3>Room Name</h3>
                <p>Last Seen at....</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    
                </IconButton>
            </div>

          </div>  
      </div>
    );
  }
  
  export default Chat;