import { LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS } from "../components/ServerActions";
  
  
  export const loginUser = {
    loginDetails: null,
    
  };
  
  const loginReducer = (state = loginUser, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loginDetails: action.payload,
          error: null,
          loading: false,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loginDetails: null,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;