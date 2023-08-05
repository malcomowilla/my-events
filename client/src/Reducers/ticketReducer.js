import { ADD_BOOKED_TICKET } from "../components/ServerActions";
import { REMOVE_BOOKED_TICKET } from "./ticketActions";
const initialState = {
  bookedTickets: [],
};

const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKED_TICKET:
      return {
        ...state,
        bookedTickets: [...state.bookedTickets, action.payload],
      };
    case REMOVE_BOOKED_TICKET:
      return {
        ...state,
        bookedTickets: state.bookedTickets.filter(ticket => ticket.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default ticketReducer;