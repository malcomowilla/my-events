import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home}></Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;