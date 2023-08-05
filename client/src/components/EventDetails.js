import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Ticket from "./Ticket";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const navigate=useNavigate()
  const { id } = useParams();//for events
  const isAuthenticated = useSelector(state => state.loginUser.isAuthenticated);
  
  console.log(`logging isAuthenticated on console ${isAuthenticated}`)
  const [event, setEvent] = useState({});
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}/tickets`, {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setTickets(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);
  console.log(tickets[0])

  const toLogin=()=>{
   navigate("/login")
  }

  if (!isAuthenticated) {
    return (
      <>
      <p>Please log in to view event details.</p>
      <button onClick={toLogin}>to Login</button>
      </>
    );
  }else
  return (
    <>
      {event.name && (
        <>
          <h2>{event.name}</h2>
          <img src={event.image_url} alt={event.name} />
          <div>
            <p>{event.description}</p>
          </div>
          <div>
            <p>{event.location}</p>
          </div>
          <div>
            <p>{event.date}</p>
          </div>
        </>
      )}
      <Ticket tickets={tickets} event={event} />
    </>
  );
}

export default EventDetails;