import { combineReducers } from '@reduxjs/toolkit';
import EventReducer from './EventReducer';
//import other reducers here

const rootReducer = combineReducers({
   // Add your reducers here
  // Add other reducers as needed
  events: EventReducer,
});

export default rootReducer;