import React from "react";
import { useState, useEffect }from "react";
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//import { useSelector } from "react-redux";
import Ticket from "./Ticket";


const EventDetails=()=> {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [tickets,setTickets]=useState([]);

  // Fetch individual event= event details
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

  // Fetch individual tickets related to the event
  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}/tickets`, {
      method: 'GET',
      headers: {
        "Accept": "application/json" // Correct header key is "Accept"
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
  console.log(tickets)

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
      <Ticket tickets={tickets} event={event}/>
    </>
  );
}

export default EventDetails;