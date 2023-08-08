class UsersController < ApplicationController
skip_before_action :authorized, only: [:create_user]

def profile
        render json: {user: UserSerializer.new(current_user)}, status: :accepted
        
    end

    def create_user
        user = User.create(user_params)
    if user.valid?
         
        token = encode_token({user_id: user.id})
                UserMailer.welcome_email(user).deliver_now

        render json: {user: UserSerializer.new(user), jwt: token}, status: :created
        else
            puts "Failed to create user!"
    puts user.errors.full_messages
      render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
    end 
    #login login POST   /login(
    def create
        user = User.find_by(username: params[:username] )

        if user && user.authenticate(params[:password])
            session[:user_id] = user.id

            token = encode_token( user_id: user.id) 
            UserMailer.welcome_back_email(user).deliver_now

            render json: {user: UserSerializer.new(user), jwt: token}, status: :accepted
        else
            render json: { message: 'Invalid username or password', error: 'Authentication failed' }, status: :unauthorized
        end
    end

def destroy
    session.delete :user_id
    head :no_content
end

    

    private
    def user_params
    params.permit(:username, :password, :password_confirmation, :email)
    end

end
