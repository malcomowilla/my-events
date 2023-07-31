import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import Home from "./components/Home";



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<EventList/>}></Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;