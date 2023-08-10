import React from "react";
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
    <>
     <Link to="/">
        Home
     </Link>{" "}
     <Link to="/signup">
        Registration
     </Link>{" "}
     <Link to="/events">
        Events
     </Link>{" "}
     {loggedInUser && (
        <Link to="/BookedTickets">
          Cart
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
      
    </>
  );
};

export default NavBar;