class UsersController < ApplicationController
skip_before_action :authorized, only: [:create] 
    def create_user
        user = User.create(user_params)
    if user.valid?
        NotifierMailer.alert_user.deliver
        token = encode_token(user_id: user.id)
        render json: {user: UserSerializer.new(user), jwt: token}, status: :created
        else
      render json: { error: 'failed to create user' }, status: :unprocessable_entity
    end
    end 

    def create
        user = User.find_by(username: params[:username] )
        if user && user.authenticate(params[:password])
                    NotifierMailer.alert_user.deliver

            token = encode_token( user_id: user.id) 
            render json: {user: UserSerializer.new(user), jwt: token}, status: :accepted
        else
            render json: {message: 'Invalid username or password' }, status: :unauthorized
        end
    end


    def profile
        render json: {user: UserSerializer.new(current_user)}, status: :accepted
    end
    private

    def user_params
    params.permit(:username, :password, :password_confirmation, :email)
    end

end
