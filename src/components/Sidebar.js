import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar, IconButton} from "@material-ui/core";
import {MoreVertIcon} from "@material-ui/icons/MoreVertIcon";
import {ChatIcon} from "@material-ui/icons/ChatIcon";
import {SearchOutlined} from "@material-ui/icons/SearchOutlined";
function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
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


      </div>
    );
  }
  
  export default Sidebar;