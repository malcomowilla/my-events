import { ADD_BOOKED_TICKET } from "../components/ServerActions";
import { REMOVE_BOOKED_TICKET } from "./ticketActions";
import { FETCH_BOOKED_TICKETS_SUCCESS } from "../components/ServerActions";
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
    case FETCH_BOOKED_TICKETS_SUCCESS:
      return {
        ...state,
        bookedTickets: action.payload,
      };
    default:
      return state;
  }
};

export default ticketReducer;