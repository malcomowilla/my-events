import React from "react";
import EventItem from "./EventItem";
import { useSelector } from "react-redux";

const EventList = () => {
  // Assuming that you have the events array in the Redux state
  const events = useSelector((state) => state.events);

  return (
    <div>
      <h1>EVENTS LIST</h1>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
       ))}
    </div>
  );
};

export default EventList;