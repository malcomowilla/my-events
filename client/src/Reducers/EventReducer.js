
 
//EventReducer manages state of data from FetchData

const EventReducer = (events =[], action) => {
    switch (action.type) {
      case "FETCH_EVENTS_SUCCESS"://action types as defined in FetchEvents
        return { ...events, eventData: action.payload };

      case "FETCH_EVENTS_FAILURE":
        return { ...events, error: action.payload };
        
      default:
        return events;
    }
};
export default EventReducer;