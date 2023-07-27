class Ticket < ApplicationRecord
    belongs_to :user
    belongs_to :event
    has_one :attendee
end
