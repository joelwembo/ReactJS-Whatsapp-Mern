 import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
//import FaceIcon from '@material-ui/icons/Face';
import Avatar from '@material-ui/core/Avatar';

import {IconButton} from  "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutlined from "@material-ui/icons/Search";
import SidebarChat from "./SidebarChat";
 function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src="https://i.pravatar.cc/150?img=70" />
            <div className = "sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>

                <IconButton>
                    <ChatIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
                
            </div>
        </div>  

        <div className = "sidebar__search">
            <div className= "sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type = "text" />
            </div>
        </div>

        <div className = "sidebar_chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>


      </div>
    );
  }
  
  export default Sidebar;