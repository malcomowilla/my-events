class TicketsController < ApplicationController
    # GET /tickets.:format) tickets#show
    # returns tickets related to a specific event
  def specific_tickets
    tickets = find_event_tickets
    render json: tickets, status: :ok
  end

  private

  def find_event_tickets
    # Fetch all ticket types
    ticket_types = Ticket.distinct.pluck(:ticket_type)
    # Find the event with id 320
    event = Event.find_by(id: params[:id])

   # Create a hash to store the tickets by ticket type
    tickets_by_type = {}

   # Loop through each ticket type and find the ticket for the event
   ticket_types.each do |ticket_type|
   ticket = Ticket.find_by(event: event, ticket_type: ticket_type)
   tickets_by_type[ticket_type] = ticket if ticket.present?
   end

   #  Return only the tickets for the event, one for each ticket type
   tickets_by_type.values
  end
end
