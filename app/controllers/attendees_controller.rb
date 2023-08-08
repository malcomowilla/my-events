class AttendeesController < ApplicationController
attendees = Attendee.all
render json: attendees
    
end





