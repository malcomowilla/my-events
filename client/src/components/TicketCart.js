import React from "react";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeBookedTicket } from "../Reducers/ticketActions";

const TicketCart = () => {
    const dispatch=useDispatch()
    const ticketCart = useSelector((state) => state.tickets.bookedTickets); // get the booked tickets from state
    //const event=useSelector((state) => state.tickets.bookedTickets.event);
    const [ticketCounts, setTicketCounts] = useState(Array(ticketCart.length).fill(1));
    const [ticketPrices, setTicketPrices] = useState(Array(ticketCart.length).fill(0));


    const addTicket = (index) => {
        const updatedCounts = [...ticketCounts];
        updatedCounts[index] += 1;
        setTicketCounts(updatedCounts);

        const updatedPrices = [...ticketPrices];
        updatedPrices[index] = updatedCounts[index] * ticketCart[index].price;
        setTicketPrices(updatedPrices);
    };

    const subtractTicket = (index) => {
        if (ticketCounts[index] > 1) {
            const updatedCounts = [...ticketCounts];
            updatedCounts[index] -= 1;
            setTicketCounts(updatedCounts);

            const updatedPrices = [...ticketPrices];
            updatedPrices[index] = updatedCounts[index] * ticketCart[index].price;
            setTicketPrices(updatedPrices);
        }
    };

    useEffect(() => {
        const updatedPrices = ticketCounts.map((count, index) => count * ticketCart[index].price);
        setTicketPrices(updatedPrices);
    }, [ticketCounts, ticketCart]);

    const totalPrice = ticketPrices.reduce((total, price) => total + price, 0);
    
    const removeTicket=(ticket)=>{
    dispatch(removeBookedTicket(ticket));
    }
    
    return (
        <>
            <h2>Cart</h2>
            {ticketCart.map((ticket, index) => (
                <div key={ticket.id}>
                    <h1>{ticket.event.name}</h1>
                    <h2>{ticket.ticket_type}</h2>
                    <div>
                        <img src={ticket.image} alt={ticket.ticket_type} />
                        <p>PRICE: Ksh{ticket.price}</p>
                    </div>
                    <button onClick={() => subtractTicket(index)}>-</button>
                    <button onClick={() => addTicket(index)}>+</button>
                    <p>Tickets: {ticketCounts[index]}</p>
                    <p>Total: Ksh{ticketPrices[index]}</p>
                    <button onClick={()=>removeTicket(ticket)}>Remove</button>
                </div>
            ))}

            <h3>Total Checkout: Ksh{totalPrice}</h3>
            <button>Proceed to payment</button>
        </>
    );
};

export default TicketCart;