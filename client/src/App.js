import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import Home from "./components/Home";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchEvents } from "./components/ServerActions"; //coz it's not the only component in EventActions
import Login from "./components/Login";
import SignUp from "./components/Signup";
import EventDetails from "./components/EventDetails";
import TicketCart from "./components/TicketCart";


function App() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  console.log(`events state variable:${events}`);
  
  useEffect(() => {
    dispatch(FetchEvents());
  }, [dispatch]);
  console.log(`events state variable:${events}`);


  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<EventList/>}></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/EventDetails/:id" element={<EventDetails/>}></Route>
        <Route path="/BookedTickets" element={<TicketCart/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;