import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FetchEvents  from "./EventActions";

const EventList = () => {
  console.log("HI")
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.eventData);
  console.log(events);

  useEffect(() => {
    dispatch(FetchEvents());
  }, [dispatch]);

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