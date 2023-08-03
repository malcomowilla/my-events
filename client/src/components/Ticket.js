import React from "react";

const Ticket = ({ tickets }) => {
  console.log(tickets);
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h1>{ticket.ticket_type}</h1>
          <div>
            <img src={ticket.image} alt={ticket.ticket_type} />
            <p>PRICE: Ksh{ticket.price}</p>
            
          </div>
          <button>Book Ticket</button>
        </div>
      ))}
    </>
  );
};

export default Ticket;











