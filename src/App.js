/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import './App.css';

function App() {
  return (
    <div className="App">     
      <div className = "app__body">
        {/* Sidebar Component*/}
        <Sidebar />
        {/* Chat Component*/}
        <Chat /> 
      </div>  
    </div>
  );
}
export default App;
