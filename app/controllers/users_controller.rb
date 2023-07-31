class UsersController < ApplicationController
skip_before_action :authorized, only: [:create_user]

def profile
        render json: {user: UserSerializer.new(current_user)}, status: :accepted
        
    end

    def create_user
        user = User.create(user_params)
    if user.valid?
         puts "User created successfully!"
    puts user.inspect
        token = encode_token({user_id: user.id})
                UserMailer.welcome_email(user).deliver_now

        render json: {user: UserSerializer.new(user), jwt: token}, status: :created
        else
            puts "Failed to create user!"
    puts user.errors.full_messages
      render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
    end 

    def create
        user = User.find_by(username: params[:username] )
        if user && user.authenticate(params[:password])

            token = encode_token( user_id: user.id) 
                UserMailer.welcome_email(user).deliver_now

            render json: {user: UserSerializer.new(user), jwt: token}, status: :accepted
        else
            render json: {message: 'Invalid username or password' }, status: :unauthorized
        end
    end


    

    private
    def user_params
    params.permit(:username, :password, :password_confirmation, :email)
    end

end
