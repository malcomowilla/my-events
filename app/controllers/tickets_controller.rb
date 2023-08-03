# app/controllers/tickets_controller.rb

class TicketsController < ApplicationController
    before_action :set_event
  
    def index
      render json: Ticket.all, status: :ok
    end
  
    def show
      ticket = Ticket.find_by(id: params[:id])
  
      if ticket
        render json: ticket, status: :ok
      else
        render json: { error: "Ticket not found" }, status: :not_found
      end
    end
  
    def create
      ticket = Ticket.create(ticket_params)
  
      if ticket.valid?
        render json: ticket, status: :created
      else
        render json: { error: ticket.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def set_event
      @event = Event.find(params[:event_id])
    end
  
    def ticket_params
      params.require(:ticket).permit(:name, :price, :event_id)
    end
  end
  