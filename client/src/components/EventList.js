import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import {FetchEvents}  from "./ServerActions"; //coz it's not the only component in EventActions
import { useSelector } from "react-redux";//used to accesses the variables stored in redux state


const EventList = () => {
  const events = useSelector((state) => state.events);

 

  return (
    <div>
      {/* Render your component using the events data */}
      <>EVENTS LIST</>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;