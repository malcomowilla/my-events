import { SIGNUP_REQUEST,SIGNUP_FAILURE,SIGNUP_SUCCESS } from "../components/ServerActions";
  
  
  export const newUser = {
    userDetails: null,
    error: null,
  };
  
  const userReducer = (state = newUser, action) => {
    switch (action.type) {
      case SIGNUP_REQUEST:
        return {
          ...state,
          error: null,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          userDetails: action.payload,
          error: null,
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          userDetails: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;