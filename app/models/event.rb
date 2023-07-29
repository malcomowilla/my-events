class Event < ApplicationRecord
    has_many :tickets
    belongs_to :organizer
    has_many :attendees 
has_many  :tickets

end
