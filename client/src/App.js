import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EventList from "./components/EventList";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events" element={<EventList/>}></Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;