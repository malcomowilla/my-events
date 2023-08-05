
import { ADD_BOOKED_TICKET } from "../components/ServerActions";
export const REMOVE_BOOKED_TICKET= "REMOVE_BOOKED_TICKET";//action type to remove booked ticket
export const addBookedTicket = (ticket) => {
    return {
      type: ADD_BOOKED_TICKET,
      payload: ticket,
    };
};
export const removeBookedTicket = (ticket) => {
  return {
    type: REMOVE_BOOKED_TICKET,
    payload: ticket,
  };
};

