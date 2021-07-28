import React from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import SidebarChat from './SidebarChat'
import { useState ,useEffect } from "react";
import db from '../firebase'

const Sidebar = () => {
  const[rooms,setRoom]=useState([])

  useEffect(()=>{
    const unsubscribe= db.collection('rooms').onSnapshot(snapshot=>(
       setRoom(snapshot.docs.map(doc=>(
         {
           id:doc.id,
           data:doc.data()
         }
       )))
     ))

     return()=>{
       unsubscribe()
     }
  },[])
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
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
      <div className="sidebar__search">
        <div className="sidebar__SearchContainer">
          <SearchIcon />
          <input className="sidebar___input" type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat/>
        {
          rooms.map(room=>(
            <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
          ))
        }   
      </div>
    </div>
  );
};

export default Sidebar;
