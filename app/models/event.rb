class Event < ApplicationRecord
    has_one :ticket
    belongs_to :organizer
    has_many :attendees 
    
end
