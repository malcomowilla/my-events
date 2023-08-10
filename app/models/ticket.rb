class Ticket < ApplicationRecord

    
    belongs_to :event
    has_one :attendee
    has_many :booked_tickets
end

