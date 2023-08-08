import { ORGANIZER_SIGNUP_SUCCESS } from "../components/ServerActions";
import { ORGANIZER_SIGNUP_FAILURE } from "../components/ServerActions";
import { ORGANIZER_SIGNUP_REQUEST } from "../components/ServerActions";
  const initialState = {
    organizerDetails: null,
    error: null,
  };
  
  const organizerReducer = (state = initialState, action) => {
    switch (action.type) {
      case ORGANIZER_SIGNUP_SUCCESS:
        return {
          ...state,
          organizerDetails: action.payload,
          error: null,
        };
      case ORGANIZER_SIGNUP_REQUEST:
            return {
              ...state,
              organizerDetails: action.payload,
              error: null,
            };
      case ORGANIZER_SIGNUP_FAILURE:
        return {
          ...state,
          organizerDetails: null,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default organizerReducer;