import React from "react";
import { useState, useEffect }from "react";
//import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
//import { useSelector } from "react-redux";


const EventDetails=()=> {
  const { id } = useParams();
  const [event, setEvent] = useState({});

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
    </>
  );
}

export default EventDetails;