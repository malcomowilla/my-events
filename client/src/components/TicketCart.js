import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
const TicketCart = () => {
    const [sum, setSum] = useState(0);
    const ticketCart = useSelector((state) => state.tickets.bookedTickets);//get the booked tickets from state

    const totalPrice = () => {
        // the total price of all tickets
        return ticketCart.reduce((total, ticket) => total + ticket.price, 0);
    }
  // Update the sum state when the component renders or when the ticketCart change
    useState(() => {
        setSum(totalPrice());
    }, [ticketCart]);

    return (
        <>
           <h2>Cart</h2>
            {ticketCart.map((ticket) => (
                <div key={ticket.id}>
                    
                    <h1>{ticket.ticket_type}</h1>
                    <div>
                        <img src={ticket.image} alt={ticket.ticket_type} />
                        <p>PRICE: Ksh{ticket.price}</p>
                    </div>
                </div>
            ))}

            <h3>Total: Ksh{sum}</h3>
        </>
    );
};

export default TicketCart;