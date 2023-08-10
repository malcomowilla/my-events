import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "./EventForm";

const Organiser=()=> {
  const [loggedInOrganizer, setLoggedInOrganizer] = useState(null); // Initialize with null
   
   useEffect(() => {
       const storedUser = localStorage.getItem('loggedInOrganizer');
       if (storedUser) {
           setLoggedInOrganizer(JSON.parse(storedUser));
       }
   }, []);
  
   const organizerId = loggedInOrganizer && loggedInOrganizer.user.id;
   
   console.log(organizerId);
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  
  useEffect(() => {
    const getEvent = async () => {
      const response = await fetch(
        `http://localhost:3000/events/${organizerId}`
      );
      const data = await response.json();
      setEvent(data);
    };
    getEvent();
  }, [id]);

  const handleSubmit = async (eventDetails) => {
    try {
      const response = await fetch(
        // POST   /events/:organizer_id
        `http://localhost:3000/events/${organizerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventDetails),
        }
      );
      if (response.ok) {
        // handle success case
        navigate(`/events`);
        console.log("Event updated successfully!");
      } else {
        // handle error case
        setErrorMsg("Failed to update event.");
      }
    } catch (error) {
      console.error("An error occurred while updating the event:", error);
    }
  };

  const toLogin=()=>{
    navigate("/login")
  }

  return (
    <>
    {loggedInOrganizer ? (
      event ? (
        <EventForm
          isUpdatePage={true}
          eventData={event}
          errorMsg={errorMsg}
          handleSubmit={handleSubmit}
        />
      ) : (
        <p>Loading event...</p>
      )
    ) : (
      <>
      <p>Please log in to update the event.</p>
      <button onClick={toLogin}>Login</button>
      </>
    )}
  </>
  );
}
export default Organiser;