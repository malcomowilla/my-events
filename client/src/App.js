import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchEvents } from "./components/ServerActions"; //coz it's not the only component in EventActions
import Login from "./components/Login";
import SignUp from "./components/Signup";
import EventDetails from "./components/EventDetails";
import TicketCart from "./components/TicketCart";
import Organizer from "./components/Organizer";
import AuthProvider from "./providers/Auth.provider";

const SecureRoute = (Component) => {
  return (
    <AuthProvider required={true}>
      <NavBar />
      <Component />
    </AuthProvider>
  );
};

const BaseRoute = (Component) => {
  return (
    <AuthProvider required={false}>
      <NavBar />
      <Component />
    </AuthProvider>
  );
};
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
      
      <Routes>
        
        <Route path="/" element={BaseRoute(Home)}></Route>
        <Route path="/events" element={BaseRoute(EventList)}></Route>
        <Route path="/signUp" element={BaseRoute(SignUp)}></Route>
        <Route path="/login" element={BaseRoute(Login)}></Route>
        <Route path="/EventDetails/:id" element={SecureRoute(EventDetails)}></Route>
        <Route path="/BookedTickets" element={SecureRoute(TicketCart)}></Route>
        <Route path="/Organizer" element={SecureRoute(Organizer)}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;