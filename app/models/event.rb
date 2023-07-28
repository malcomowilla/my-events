class Event < ApplicationRecord
    has_many :tickets
    belongs_to :organizer
    has_many :attendees, through: :tickets
    has_many :perfomers
    has_one :venue
end
