class NotifierMailer < ApplicationMailer
    def alert_user
        mail(to: "malcomowilla@gmail.com", subject: "ALERT - welcome to events and ticketing" )


    end
end
