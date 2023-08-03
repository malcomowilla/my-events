
export const ADD_BOOKED_TICKET = "ADD_BOOKED_TICKET";//action type to add ticket

export const addBookedTicket = (ticket) => {
    return {
      type: ADD_BOOKED_TICKET,
      payload: ticket,
    };
};
