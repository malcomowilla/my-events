class Event < ApplicationRecord
    belongs_to :organizer
    has_many :tickets
    has_many :attendees
end