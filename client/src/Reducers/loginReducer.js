import { LOGIN_REQUEST,LOGIN_FAILURE,LOGIN_SUCCESS } from "../components/ServerActions"
import { LOGOUT } from "../components/ServerActions";


export const loginUser = {
  isAuthenticated: false,
  loginDetails: null,
 
};
export const logoutUser = () => {
  return {
    type: LOGOUT,
    payload: loginUser,
  };
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
        isAuthenticated: true,
        loginDetails: action.payload,
        //user_id: action.payload.user_id, // Assign the user_id from the action payload
        error: null,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        loginDetails: null,
        //user_id: null, // Reset user_id
        error: action.payload,
        loading: false,
      };
      case LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          loginDetails: null,
        };
       default:
      return state;
  }
};

export default loginReducer;