class OrganizersController < ApplicationController
    skip_before_action :authorized, only: [:create_event]

    # POST /organizers/{organizer_id}/events
  def create_event
    organizer = Organizer.find_by(id: params[:organizer_id])

    if organizer
      event = Event.new(event_params)
      event.organizer = organizer

      if event.save
        render json: event, status: :created
      else
        render json: { errors: event.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Organizer not found' }, status: :not_found
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :image_url, :date, :description, :location)
  end
end






end
