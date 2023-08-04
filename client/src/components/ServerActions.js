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
 //handles login => login is a post request
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LoginUser=(loginDetails)=> async (dispatch) => {
  try {
    const loginUrl="http://127.0.0.1:3000/login" ;
    const response = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(loginDetails), // Convert the userData to JSON string and send it in the request body
    });
    if (response.ok) {
      
      
      dispatch({ type: "LOGIN_SUCCESS", payload: loginDetails  });
    } else {
      
      dispatch({ type: "LOGIN_FAILURE", payload: "Error signing up." });
    }
  } catch (error) {
    
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
}

//post tickets associated to a particular user
export const TICKET_REQUEST = "TICKET_REQUEST";
export const TICKET_SUCCESS = "TICKET_SUCCESS";
export const TICKET_FAILURE = "TICKET_FAILURE";

export const PostTickets=(ticket)=> async (dispatch) => {
  try{
    const postTicketUrl="";
    const response = await fetch(postTicketUrl,{
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(ticket),
    });
    if (response.ok) {
      
      
      dispatch({ type: "TICKET_SUCCESS", payload: ticket  });
    } else {
      
      dispatch({ type: "TICKET_FAILURE", payload: "Error signing up." });
    }
  } catch (error) {
    
    dispatch({ type: "TICKET_FAILURE", payload: error.message });
  }
}



  