import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EventList from "./components/EventList";
import Home from "./components/Home";



function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<EventList/>}></Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;