import { combineReducers } from '@reduxjs/toolkit';
import EventReducer from './EventReducer';
import userReducer from './UserReducer';
//import other reducers here

const rootReducer = combineReducers({
   // Add your reducers here
  // Add other reducers as needed
  newUser: userReducer,
  events: EventReducer,
});

export default rootReducer;