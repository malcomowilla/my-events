class BookedTicketsController < ApplicationController
    #booked_tickets GET    /booked_tickets(.:format) booked_tickets#index
    def get_user_tickets
     tickets = find_all_user_tickets
     render json: tickets , status: :ok
    end
    #POST   /booked_tickets(.:format)booked_tickets#create
    def post_user_tickets

    end
   
   
    
    def delete_user_tickets
    end

    private
    def find_all_user_tickets
        user_id = params[:user_id]
        ticket_id = params[:ticket_id]
        
        booked_tickets = BookedTicket.where(user_id: user_id, ticket_id: ticket_id)
        
        render json: booked_tickets
    end
end
