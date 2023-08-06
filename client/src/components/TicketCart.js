import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeBookedTicket } from "../Reducers/ticketActions";
//import { fetchBookedTickets } from "./ServerActions";
import { useNavigate } from "react-router-dom";

const TicketCart = () => {
    const navigate = useNavigate();
    //const isAuthenticated = useSelector(state => state.loginUser.isAuthenticated);
    /*const toLogin=(
        navigate('/login')
    )*/
    const loggedInUser = useSelector(state => state.loginUser.loginDetails.user);
   // const authToken=useSelector(state => state.loginUser.jwt)
    const dispatch = useDispatch();

    
    const [ticketCounts, setTicketCounts] = useState([]);
    const [ticketPrices, setTicketPrices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    //const bookedTicketData=useSelector((state)=>state.bookedTickets.bookedTickets);
   /* useEffect(() => {
        console.log("Fetching booked tickets for user:", loggedInUser);
        if (loggedInUser && loggedInUser.id) {
            dispatch(fetchBookedTickets(loggedInUser.id))
                .catch(error => {
                    console.error("Error fetching booked tickets:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false); // Set isLoading to false if user data is not available
        }
        
       
    },[dispatch, loggedInUser]);   
    setTicketCart(bookedTicketData)*/
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
                        console.log(uniqueTickets); // Check if uniqueTickets is correct
                        setTicketCart(uniqueTickets);
                        setIsLoading(false);
                    } else {
                        console.error("Error fetching booked tickets:", response.statusText);
                        setIsLoading(false);
                    }
                } catch (error) {
                    console.error("Error:", error);
                    setIsLoading(false);
                }
            } else {
                setIsLoading(false);
            }
        };
    
        fetchBookedTickets();
    }, [loggedInUser]);
    
    const [ticketCart, setTicketCart] = useState([]);
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
    
    const removeTicket = (ticket) => {
        dispatch(removeBookedTicket(ticket));
    }
    /*if (!isAuthenticated) {
        return (
            <>
                <p>Please log in to view your Cart.</p>
                <button onClick={toLogin}>to Login</button>
            </>
        );
    }

    if (isLoading) {
        return (<p>Loading...</p>);
    }else{*/
    return(
        <>
            <h2>Cart</h2>
            { 
                
                ticketCart.map((ticket, index) => (
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
            }
            <h3>Total Checkout: Ksh{totalPrice}</h3>
            <button>Proceed to payment</button>
        </>
    );
};

export default TicketCart;

