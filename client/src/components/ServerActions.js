//FetchEvents handles data fetch
/*for user*/

import { newUser } from "../Reducers/UserReducer";

export const FetchEvents = () => async (dispatch) => {
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
//NewUser handles posting of a new user to the database
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";


export const NewUser=()=> async (dispatch) => {
  try {
    const signUpUrl="https://localhost/signup" ;
    const response = await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(newUser), // Convert the userData to JSON string and send it in the request body
    });
    if (response.ok) {
      
      
      dispatch({ type: "SIGNUP_SUCCESS", payload: newUser });
    } else {
      
      dispatch({ type: "SIGNUP_FAILURE", payload: "Error signing up." });
    }
  } catch (error) {
    
    dispatch({ type: "SIGNUP_FAILURE", payload: error.message });
  }

  
}


  