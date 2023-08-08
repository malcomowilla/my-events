import { ORGANIZER_SIGNUP_REQUEST } from "../components/ServerActions";
//import { ORGANIZER_SIGNUP_FAILURE } from "../components/ServerActions";
import { ORGANIZER_SIGNUP_SUCCESS } from "../components/ServerActions";
export const organizerSignupSuccess = (organizerDetails) => ({
  type: ORGANIZER_SIGNUP_SUCCESS,
  payload: organizerDetails
});

export const organizerSignupRequest = (organizerDetails) => ({
  type: ORGANIZER_SIGNUP_REQUEST,
  payload: organizerDetails,
});