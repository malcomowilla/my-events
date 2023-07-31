//FetchEvents handles data fetch
const FetchEvents = () => async (dispatch) => {
    try {
      const eventsUrl = "https://event-manager-1mtv.onrender.com/events";
      const response = await fetch(eventsUrl);
      const eventData = await response.json();
      dispatch({ type: "FETCH_EVENTS_SUCCESS", payload: eventData });
    } 
    
    catch (error) {
      dispatch({ type: "FETCH_EVENTS_FAILURE", payload: error.message });
    }
};
export default FetchEvents;

  