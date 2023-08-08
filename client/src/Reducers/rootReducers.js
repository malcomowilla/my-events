import { combineReducers } from '@reduxjs/toolkit';
import EventReducer from './EventReducer';
import userReducer from './UserReducer';
import loginReducer from './loginReducer';
import ticketReducer from './ticketReducer';
import organizerReducer from './OrganizerReducer';
import oLoginReducer from './OloginReducer';
//import { fetchBkdTicketsReducer } from './ticketReducer';
//import other reducers here

const rootReducer = combineReducers({
   // Add your reducers here
  // Add other reducers as needed
  newUser: userReducer,
  loginUser: loginReducer,
  events: EventReducer,
  tickets: ticketReducer,
  organizer: organizerReducer,
  loginOraganizer:oLoginReducer,
  //bookedTickets: fetchBkdTicketsReducer,
});

export default rootReducer;