import React from "react";
import {Avatar} from "@material-ui/core";
import './SidebarChat.css';


function SidebarChat() {
    return(
    <div className="sidebarChat">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <div className="sidebarChat">
            <h2>Joel Wembo</h2>
            <p>Console Text of the last message</p>
        </div>
        

    </div>
);
}

export default SidebarChat;
