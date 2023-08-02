import { combineReducers } from '@reduxjs/toolkit';
import EventReducer from './EventReducer';
import userReducer from './UserReducer';
import loginReducer from './loginReducer';
//import other reducers here

const rootReducer = combineReducers({
   // Add your reducers here
  // Add other reducers as needed
  newUser: userReducer,
  loginUser: loginReducer,
  events: EventReducer,
});

export default rootReducer;