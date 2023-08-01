//FetchEvents handles data fetch
/*for user*/



export const FetchEvents = () => async (dispatch) => {
    try {
      const eventsUrl = "http://127.0.0.1:3000/events";
      const response = await fetch(eventsUrl,{
        method: "GET",
        headers: {
          "Accept": "application/json", // Specify that the client expects a JSON response
          // You can add more headers here if needed
        },
      });
      const eventData = await response.json();
      dispatch({ type: "FETCH_EVENTS_SUCCESS", payload: eventData });
    } 
    
    catch (error) {
      dispatch({ type: "FETCH_EVENTS_FAILURE", payload: error.message });
    }
};
//NewUser handles posting of a new user to the database
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";


export const NewUser=(userDetails)=> async (dispatch) => {
  try {
    const signUpUrl="http://127.0.0.1:3000/signup" ;
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(userDetails), // Convert the userData to JSON string and send it in the request body
    });
    if (response.ok) {
      
      
      dispatch({ type: "SIGNUP_SUCCESS", payload: userDetails });
    } else {
      
      dispatch({ type: "SIGNUP_FAILURE", payload: "Error signing up." });
    }
  } catch (error) {
    
    dispatch({ type: "SIGNUP_FAILURE", payload: error.message });
  }

  
}


  