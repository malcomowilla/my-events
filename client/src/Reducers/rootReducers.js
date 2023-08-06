import { combineReducers } from '@reduxjs/toolkit';
import EventReducer from './EventReducer';
import userReducer from './UserReducer';
import loginReducer from './loginReducer';
import ticketReducer from './ticketReducer';
//import { fetchBkdTicketsReducer } from './ticketReducer';
//import other reducers here

const rootReducer = combineReducers({
   // Add your reducers here
  // Add other reducers as needed
  newUser: userReducer,
  loginUser: loginReducer,
  events: EventReducer,
  tickets: ticketReducer,
  //bookedTickets: fetchBkdTicketsReducer,
});

export default rootReducer;