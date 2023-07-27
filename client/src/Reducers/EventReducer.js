

//EventReducer manages state of data from FetchData

const EventReducer = (eventState = { eventData: {} }, action) => {
    switch (action.type) {
      case "FETCH_EVENTS_SUCCESS":
        return { ...eventState, eventData: action.payload };
      case "FETCH_EVENTS_FAILURE":
        return { ...eventState, error: action.payload };
      default:
        return eventState;
    }
};
export default EventReducer;