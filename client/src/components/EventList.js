import React from "react";
import EventItem from "./EventItem";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import { useState } from "react";

const EventList = () => {
  // Assuming that you have the events array in the Redux state
  const events = useSelector((state) => state.events);
  const [searchValue,setSearchValue]=useState("")
  const [filteredEvents, setFilteredEvents] = useState([]);
    //search parameter is the title
    const handleSearch = () => {
      console.log("search button clicked")
       const filteredEvents=events.filter((event) =>
       event.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      setFilteredEvents(filteredEvents);
  }; 

  return (
    <div>
      <h1>EVENTS LIST</h1>
      <SearchBar setSearchValue={setSearchValue} handleSearch={handleSearch}/>
       {filteredEvents.length > 0
       ? filteredEvents.map((event) => (
       <EventItem key={event.id} event={event} />
       ))
       : events.map((event) => <EventItem key={event.id} event={event} />)}
    </div>
  );
};

export default EventList;