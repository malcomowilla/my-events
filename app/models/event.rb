class Event < ApplicationRecord
    has_many :tickets
    belongs_to :organizer
    has_many :attendees, through: :tickets
end
