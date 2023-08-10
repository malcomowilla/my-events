import { ORGANIZER_LOGIN_SUCCESS,ORGANIZER_LOGIN_FAILURE,ORGANIZER_LOGIN_REQUEST } from "../components/ServerActions";
import { O_LOGOUT } from "../components/ServerActions";


export const loginOrganizer = {
  isAuthenticated: false,
  organizerLoginDetails: null,
  error: null,
  loading: false
};

export const logoutOrganizer = () => {
  return {
    type: O_LOGOUT,
    payload: loginOrganizer,
  };
};

const oLoginReducer = (state = loginOrganizer, action) => {
  switch (action.type) {
    case ORGANIZER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORGANIZER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        organizerLoginDetails: action.payload,
        //user_id: action.payload.user_id, // Assign the user_id from the action payload
        error: null,
        loading: false,
      };
    case ORGANIZER_LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        organizerLoginDetails: null,
        //user_id: null, // Reset user_id
        error: action.payload,
        
        loading: false,
      };
      case O_LOGOUT:
        return {
          ...state,
          isAuthenticated: false,
          organizerLoginDetails: null,
        };
       default:
      return state;
  }
};

export default oLoginReducer;