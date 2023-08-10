

//EventReducer manages state of data from FetchData

const EventReducer = (events = [], action) => {
  switch (action.type) {
    case "FETCH_EVENTS_SUCCESS":
      return action.payload; // Replace the entire events state with the new payload
    case "FETCH_EVENTS_FAILURE":
      return { ...events, error: action.payload };
    default:
      return events;
  }
};
export default EventReducer;