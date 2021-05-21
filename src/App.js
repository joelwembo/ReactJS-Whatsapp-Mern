import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Whatsapp V2</h1>
    
    {/* Sidebar Component*/}
    <Sidebar />
     {/* Chat Component*/}
    <Chat /> 
    </div>
  );
}

export default App;
