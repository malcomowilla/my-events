import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
   
  return (
    <>
     <Link to="/">
        Home
     </Link>{" "}
     <Link to="/signup">
        SignUp/Login
     </Link>{" "}
     <Link to="/events">
        Events
     </Link>{" "}
     {/*<Link to="/BookedTickets">
        Cart
     </Link>{" "}*/}
     <Link to="/Organizer" >
        Organizer
     </Link>{" "}
     {/*<Link to="/">
        About
  </Link>{" "}*/}
      
    </>
  );
};

export default NavBar;