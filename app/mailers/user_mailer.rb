class UserMailer < ApplicationMailer
default from: 'notifications@example.com'

def welcome_email(user)
    @user = user
    @url = "http://localhost:3000/login"
    mail(to: @user.email, subject: 'Welcome to events and ticketing app')

end
def welcome_back_email(user)
        @user = user
        @url = "http://localhost:3001/events"
        mail(to: @user.email, subject: 'Welcome back to events and ticketing app')
    end

end

