import { SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS } from "../components/ServerActions";
  
  
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
          loading: true,
        };
      case SIGNUP_SUCCESS:
        return {
          ...state,
          userDetails: action.payload,
          error: null,
          loading: false,
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
          userDetails: null,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;