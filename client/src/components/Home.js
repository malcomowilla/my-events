/*default landing page */
import React from "react";
import { useSelector } from "react-redux";
import EventItem from "./EventItem";
import { useNavigate } from "react-router-dom";
const Home=()=>{
  const navigate=useNavigate()
  const events = useSelector((state) => state.events);
  const allEvents=()=>{
     navigate("/events")
  }
  // Limit the events to 6 
  const homePageEvents = events.slice(0, 6);
    return(
        <>
          <h1>Event Ticketing website</h1>
          <h2>there should be an animation here,some styling n stuff,logo of the website,about us,promos etc.
            WATU wa Css
          </h2>
          <br />{" "}
          <button onClick={allEvents}>
            See more events...
          </button>
          <br />{" "}
          <div>
            {homePageEvents.map((event) => (
             <EventItem key={event.id} event={event} />
          ))}
          </div>
        </>
    )
}
export default Home;