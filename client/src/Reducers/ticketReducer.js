import { ADD_BOOKED_TICKET } from "./ticketActions";

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
    default:
      return state;
  }
};

export default ticketReducer;