import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

const NavBar = () => {
   //check if organizer is logged in
   const [loggedInOrganizer, setLoggedInOrganizer] = useState(null); // Initialize with null
   
   useEffect(() => {
       const storedUser = localStorage.getItem('loggedInOrganizer');
       if (storedUser) {
           setLoggedInOrganizer(JSON.parse(storedUser));
       }
   }, []);
   console.log("this is the logged in ORGANIZER as being accessed in Navbar",loggedInOrganizer)
   //check if user is logged in 
   const [loggedInUser, setLoggedInUser] = useState(null); // Initialize with null
   
   useEffect(() => {
       const storedUser = localStorage.getItem('loggedInUser');
       if (storedUser) {
           setLoggedInUser(JSON.parse(storedUser));
       }
   }, []);
   console.log("this is the logged in USER as being accessed in Navbar",loggedInUser)

  return (
    <div className="top-bar">
      <div className="left-topbar-container">
      <Link to="/">
      <div className="logo-container">
      <img src="https://media.giphy.com/media/peAFQfg7Ol6IE/giphy.gif" alt="Logo" className="logo-image" />
      <h3 className="top-bar-brand-name">Jibambe Events</h3>
    </div>
     </Link>
      </div>
       <div className="right-topbar-container">
      <Link to="/">
      <button className="icon-btn"> Home </button>
     </Link>{" "}
     <Link to="/signup">
     <button className="icon-btn"> Registration </button>
     </Link>{" "}
     <Link to="/events">
     <button className="icon-btn"> Events </button>
     </Link>{" "}
     {loggedInUser && (
        <Link to="/BookedTickets">
      <button className="icon-btn"> Cart </button>
        </Link>
      )}
      {" "}
   {loggedInOrganizer && (
     <Link to="/Organizer" >
        Organizer
     </Link>)}
     {" "}
     
     {/*<Link to="/">
        About
  </Link>{" "}*/}

      </div>     
    </div>
  );
};

export default NavBar;