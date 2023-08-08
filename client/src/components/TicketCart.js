import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeBookedTicket } from "../Reducers/ticketActions";
//import { useNavigate } from "react-router-dom";

const TicketCart = () => {
    //const navigate = useNavigate();
    //const isAuthenticated = useSelector(state => state.loginUser.isAuthenticated);
    /*const toLogin=(
        navigate('/login')
    )*/
    const loggedInUser = useSelector(state => state.loginUser.loginDetails.user);
    //const bookedTickets=useSelector(state => state.tickets.bookedTickets);
   // const authToken=useSelector(state => state.loginUser.jwt)
    const dispatch = useDispatch();
    const [ticketCounts, setTicketCounts] = useState([]);
    const [ticketPrices, setTicketPrices] = useState([]);
    const [fetchedTickets,setFetchedTickets]=useState([])
    
    console.log("this is my fetchedTickets (declared)",fetchedTickets,fetchedTickets.length)
   
    useEffect(() => {
        const fetchBookedTickets = async () => {
            if (loggedInUser) {
                const bookedTicketsUrl = `http://127.0.0.1:3000/booked_tickets/get/${loggedInUser.id}`;
               
                try {
                    const response = await fetch(bookedTicketsUrl, {
                        method: "GET",
                        headers: {
                            "Accept": "application/json",
                            //"Authorization": `Bearer ${authToken}`,
                        },
                    });
    
                    if (response.ok) {
                        const data = await response.json();
                        console.log(data); // Check if data is fetched correctly
                        const uniqueTickets = data.reduce((acc, ticket) => {
                            const existingTicket = acc.find(existing => existing.id === ticket.id);
                            if (!existingTicket) {
                                acc.push(ticket);
                            }
                            return acc;
                        }, []);
                        console.log("these are the uniqueTickets",uniqueTickets); // Check if uniqueTickets is correct
                        setFetchedTickets(uniqueTickets);
                        console.log("these is the fetchedTickets state that is supposed to be updated",fetchedTickets)
                    } else {
                        console.error("Error fetching booked tickets:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        };
    
        fetchBookedTickets();
    }, [loggedInUser]); // Only dependency should be loggedInUser
    useEffect(() => {
        if (fetchedTickets.length > 0) {
            setTicketCounts(Array(fetchedTickets.length).fill(1));
            setTicketPrices(Array(fetchedTickets.length).fill(0));
        }
    }, [fetchedTickets]);

    const addTicket = (index) => {
        const updatedCounts = [...ticketCounts];
        updatedCounts[index] += 1;
        setTicketCounts(updatedCounts);

        const updatedPrices = [...ticketPrices];
        updatedPrices[index] = updatedCounts[index] * fetchedTickets[index].price;
        setTicketPrices(updatedPrices);
    };

    const subtractTicket = (index) => {
        if (ticketCounts[index] > 1) {
            const updatedCounts = [...ticketCounts];
            updatedCounts[index] -= 1;
            setTicketCounts(updatedCounts);

            const updatedPrices = [...ticketPrices];
            updatedPrices[index] = updatedCounts[index] * fetchedTickets[index].price;
            setTicketPrices(updatedPrices);
        }
    };

    useEffect(() => {
        const updatedPrices = ticketCounts.map((count, index) => count * fetchedTickets[index].price);
        setTicketPrices(updatedPrices);
    }, [ticketCounts, fetchedTickets]);

    const totalPrice = ticketPrices.reduce((total, price) => total + price, 0);
    
    const removeTicket = (ticket) => {
        dispatch(removeBookedTicket(ticket));
    }
    
    return (
        <>
            <h2>Cart</h2>
            {loggedInUser ? (
                fetchedTickets.map((ticket, index) => (
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
                        <button onClick={() => removeTicket(ticket)}>Remove</button>
                    </div>
                ))
            ) : (
                <p>Please log in to view your booked tickets.</p>
            )}
            <h3>Total Checkout: Ksh{totalPrice}</h3>
            <button>Proceed to payment</button>
        </>
    );
};

export default TicketCart;