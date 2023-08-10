import React from "react";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addBookedTicket } from "../Reducers/ticketActions";//brings the action type so it can be dispatched
//import { useNavigate } from "react-router-dom";

const Ticket = ({ event,tickets }) => {
  //const navigate=useNavigate()//for routing
  //(below)=> retrieves the current logged in user
  const loggedInUser = useSelector((state) => state.loginUser.loginDetails.user);
  const dispatch = useDispatch();
  console.log(loggedInUser.id)
  const [isBookedMap, setIsBookedMap] = useState({});


  //const [bookedTickets, setBookedTickets] = useState([]);
  /*const handleBookedTicket = (ticket) => {
    setBookedTickets([...bookedTickets, ticket,event.name]);
    // Dispatch the action to add the ticket to the Redux store
    dispatch(addBookedTicket(ticket));
    navigate(`/BookedTickets`)
  };*/

  const handleBookedTicket = async (ticket) => {
    const updatedTicket = { ...ticket, event: event.name }; // Include the event name
    //setIsbooked(!isbooked);
    //this one checks each individual ticket
    setIsBookedMap((prevState) => ({
      ...prevState,
      [ticket.id]: !prevState[ticket.id]
    }));

    dispatch(addBookedTicket(updatedTicket));
    const bookedTicketBody={
      user_id: loggedInUser.id,
      ticket_id: updatedTicket.id, 
    }
    try {
      const userTicketUrl = "http://127.0.0.1:3000/booked_tickets/post";
      const response = await fetch(userTicketUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookedTicketBody)
      });
  
      // Log the response data for debugging
      console.log("API Response:", response);
  
    } catch (error) {
      console.error("Error booking ticket:", error);
    }
    
  };
  return (
    <>
      <h1>Get Tickets</h1>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h1>{event.name}</h1>
          <h2>{ticket.ticket_type}</h2>
          <div>
            <img src={ticket.image} alt={ticket.ticket_type} />
            <p>PRICE: Ksh{ticket.price}</p>
          </div>
          <br />
          <button onClick={() => handleBookedTicket(ticket)}>
          {!isBookedMap[ticket.id] ? "Get Ticket" : "Booked"}
          </button>
          </div>
      ))}
    </>
  );
};

export default Ticket;











