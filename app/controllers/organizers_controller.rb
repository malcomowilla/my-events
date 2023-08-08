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

  skip_before_action :authorized, only: [:create_user]

    
    #post '/signup-O', to: 'organizers#signup_organizer'
    def signup_organizer
      organizer = Organizer.create(organizer_params)
      
      if organizer.valid?
        token = encode_token({ organizer_id: organizer.id })
        OrganizerMailer.welcome_email(organizer).deliver_now
        render json: { organizer: OrganizerSerializer.new(organizer), jwt: token }, status: :created
      else
        puts "Failed to create organizer!"
        puts organizer.errors.full_messages
        render json: { error: 'Failed to create organizer', errors: organizer.errors.full_messages }, status: :unprocessable_entity
      end
    end 
    #post '/login-o', to: 'organizers#login_organizer'
    def login_organizer
      organizer = Organizer.find_by(name: params[:name])
    
      if organizer && organizer.authenticate(params[:password])
        session[:organizer_id] = organizer.id
        token = encode_token(organizer_id: organizer.id) 
        render json: { user: OrganizerSerializer.new(organizer), jwt: token }, status: :accepted
      else
        render json: { message: 'Invalid username or password', error: 'Authentication failed' }, status: :unauthorized
      end
    end

    def destroy
      session.delete :organizer_id
      head :no_content
    end


  private
  def organizer_params
    params.permit(:name, :password, :email, :image)# ,:contact_number)
    end

  def event_params
    params.require(:event).permit(:name, :image_url, :date, :description, :location)
  end
end

