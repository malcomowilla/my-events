import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
     <Link to="/">
        Home
     </Link>{" "}
     <Link to="/signup">
        Sign Up
     </Link>{" "}
     <Link to="/events">
        Events
     </Link>{" "}
     <Link to="/BookedTickets">
        Cart
     </Link>{" "}
     {/*<Link to="/">
        About
  </Link>{" "}*/}
      
    </>
  );
};

export default NavBar;