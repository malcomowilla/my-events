import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookedTicket } from "../Reducers/ticketActions";//brings the action type so it can be dispatched
import { useNavigate } from "react-router-dom";
const Ticket = ({ event,tickets }) => {
  const navigate=useNavigate()//for routing
  const dispatch = useDispatch();
  const [bookedTickets, setBookedTickets] = useState([]);

  const handleBookedTicket = (ticket) => {
    setBookedTickets([...bookedTickets, ticket,event.name]);
    // Dispatch the action to add the ticket to the Redux store
    dispatch(addBookedTicket(ticket));
    navigate(`/BookedTickets`)
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
            Book Ticket
          </button>
        </div>
      ))}
    </>
  );
};

export default Ticket;











