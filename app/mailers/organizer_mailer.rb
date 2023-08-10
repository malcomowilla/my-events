class OrganizerMailer < ApplicationMailer
    default from: 'notifications@example.com'
    
    def welcome_email(organizer)
        @organizer = organizer
        @url = "http://localhost:3000/login"
        mail(to: @organizer.email, subject: 'Welcome to events and ticketing app')
    
    end
    def welcome_back_email(organizer)
        @organizer = organizer
        @url = "http://localhost:3001/Organiser"
        mail(to: @organizer.email, subject: 'Welcome back to events and ticketing app')
    end
    
    
end
    