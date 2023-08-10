class BookedTicketsController < ApplicationController
  before_action :set_current_user
    #booked_tickets GET    /booked_tickets/get(.:format) booked_tickets#index
    def get
      user = User.find(params[:id]) 
    # Fetch booked tickets and include the associated ticket and event
      ticket_ids = user.booked_tickets.pluck(:ticket_id)
      booked_tickets=[]
      ticket_ids.each do |ticket_id|
        ticket = Ticket.find_by(id: ticket_id)
        booked_tickets << ticket if ticket
      end
      render json: booked_tickets, status: :ok
    end
    
    
    #POST   /booked_tickets/post(.:format)booked_tickets#create
    def post
      user_id = @current_user.id
      ticket_id = params[:ticket_id]
  
      booked_ticket = BookedTicket.new(user_id: user_id, ticket_id: ticket_id)
  
      if booked_ticket.save
        render json: booked_ticket, status: :created
      else
        render json: { error: 'Failed to create booked ticket' }, status: :unprocessable_entity
      end
    end
   
   
    #delete DELETE  delete '/delete/:user_id/:ticket_id'
    def delete
      user_id = params[:user_id]
      ticket_id = params[:ticket_id]
  
      # Find the user and ticket
      user = User.find(user_id)
      ticket = Ticket.find(ticket_id)
      booked_ticket = BookedTicket.find_by(user: user, ticket: ticket)
  
      if booked_ticket.destroy
          render json: { message: "Ticket successfully removed" }, status: :ok
      else
          render json: { error: "Failed to remove ticket" }, status: :unprocessable_entity
      end
  end

    private
    def set_current_user
      @current_user = User.find_by(id: params[:user_id])
      puts @current_user;
    end
    
end
