class User < ApplicationRecord
    
has_secure_password
validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}
validates :username, uniqueness: {case_sensitive: false}
# which are avalable to them
has_many :booked_tickets#which have been specifically booked as a ticket can be booked or not
has_many :attendees
end
